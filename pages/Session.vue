<template lang="">
  <div>
    <div class="py-5 main-content container">
<div class="mb-2 d-flex gap-2 ml-2">
  <i class="bi bi-record-circle mr-1 text-danger"></i> Live Preview
</div>

<div class="webcam mb-2">
  <video ref="webcamVideo" width="100%" height="auto" style="border-radius:28px;" autoplay playsinline></video>
  </div>

  <div class="text-center">
    <button type="button" class="btn btn-danger gap-3" @click="stopRecording"><i class="bi bi-stop-circle mr-1"></i></i>Stop Recording</button>
  </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Session',
  layout:'Dashboard',
  mounted()
  {
    this.webcam()
  },

  methods:
  {
    async webcam()
    {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const webcamVideo = this.$refs.webcamVideo;
        webcamVideo.srcObject = stream;
      } catch (error) {
        console.log(error)
      }
    },
    stopRecording() {
      if (this.webcamStream) {
    this.webcamStream.getTracks().forEach(track => track.stop());
    this.webcamStream = null;
  }
      this.$store.dispatch('stopRecording');
    }
  }

}
</script>
<style lang="">

</style>
