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

  methods: {
    startRecording() {
      this.$store.dispatch('startRecording')
    },
    stopRecording() {
      this.$store.dispatch('stopRecording')
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
