// store/example.js

export const state = () => ({
  mediaRecorder: null,
  recordedChunks: [],
  recording: false,
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
    }
  },
};
