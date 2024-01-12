// store/example.js

export const state = () => ({
  mediaRecorder: null,
  recordedChunks: [],
  recording: false,
  recordings: [],
  mediaStream: null, // New state to store the media stream
});

export const mutations = {
  changeMediaRecorder(state, value) {
    state.mediaRecorder = value;
  },
  changeRecordedChunks(state, value) {
    state.recordedChunks = value;
  },
  changeRecording(state, value) {
    state.recording = value;
  },
  changeMediaStream(state, value) {
    state.mediaStream = value;
  },

  setRecordings(state, values)
  {
    state.recordings = values
  }
};

export const actions = {
  startRecording({ commit, state }) {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        commit('changeMediaRecorder', mediaRecorder);
        commit('changeMediaStream', stream); // Store the media stream in the state
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            commit('changeRecordedChunks', [...state.recordedChunks, event.data]);
          }
        };


        mediaRecorder.start();
        commit('changeRecording', true);
        this.$router.push('/session');
      })
      .catch((error) => {
        alert('Error accessing media devices:', error);
      });
  },

  stopRecording({ commit, state }) {
    if (state.mediaRecorder) {
      state.mediaRecorder.stop();
      commit('changeRecording', false);
      commit('changeRecordedChunks', []);


      // Stop the media stream
      if (state.mediaStream) {
        state.mediaStream.getTracks().forEach(track => track.stop());
        commit('changeMediaStream', null);
      }

      // save the video and generate thumbnail for it
      const videoBlob = new Blob(state.recordedChunks, { type: 'video/webm' });
    const videoURL = URL.createObjectURL(videoBlob);

    const videoElement = document.createElement('video');
    videoElement.src = videoURL;

    // Create a canvas and draw the first frame
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d').drawImage(videoElement, 0, 0);

    // Convert the canvas to a data URL (thumbnail)
    const thumbnail = canvas.toDataURL('image/jpeg');

    console.log(thumbnail)
    const recordingDetails = {
      title: 'Random video Recording',
      fileSize: state.recordedChunks.reduce((acc, chunk) => acc + chunk.size, 0),
      recordingTime: new Date().toLocaleString(),
      thumbnails: thumbnail,
    };

    const recordings = []
    recordings.push(recordingDetails)

    commit('setRecordings', recordings)
    }
  },
};
