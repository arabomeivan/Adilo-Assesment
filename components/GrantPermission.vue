<template lang="">
  <div>
    <div>

  <b-modal id="grant-permission" centered hide-footer title="New Recording">
   <div>
<p class=" text-black">Save the recording in</p>

<div class="mb-3">
  <select class="form-select text-dark-blue" aria-label="Default select example">
  <option selected>Select a project</option>
</select>
</div>
<div class="d-flex justify-content-between mb-2">
  <p class="text-light">Record Screen</p>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="toggleSwitch">
  </div>
</div>
<div class="d-flex justify-content-between mb-2">
  <p class="text-light">Record camera</p>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="toggleSwitch">
  </div>
</div>
<div class="d-flex justify-content-between mb-2">
  <p class="text-light">Record mic</p>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="toggleSwitch">
  </div>
</div>

<div class="text-center">
  <button type="button" class="btn btn-primary gap-3 new-request-btn" @click="startRecording"><i class="bi bi-camera-video mr-1"></i>Start Recording</button>
</div>
   </div>
  </b-modal>
</div>
  </div>
</template>
<script>
export default {
name:'GrantPermission',
data() {
    return {
      mediaRecorder: null,
      recordedChunks: [],
      recording: false,
    };
  },
  methods: {
    startRecording() {
      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((stream) => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.recordedChunks = [];

          this.mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              this.recordedChunks.push(event.data);
            }
          };

          this.mediaRecorder.onstop = () => {
            this.saveRecording();
          };

          this.mediaRecorder.start();
          this.recording = true;
          this.$router.push('/Session')
        })
        .catch((error) => {
          alert('Error accessing media devices:', error);
        });
    },
    stopRecording() {
      if (this.mediaRecorder && this.recording) {
        this.mediaRecorder.stop();
        this.recording = false;
      }
    },
    saveRecording() {
      const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
      const title = prompt('Enter a title for the recording:');
      if (title) {
        // Now you can save the blob and title, e.g., send it to a server
        // You might want to use a library like axios for this
        // axios.post('/api/save-recording', { title, blob });
        console.log('Recording saved with title:', title);
        console.log('Recording saved with title:', blob);
      }
    },
  },
}
</script>
<style lang="">

</style>
