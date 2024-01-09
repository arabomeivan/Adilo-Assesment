<template>
 <div class="py-5 main-content container">

  <!-- BREADCRUMBS -->
  <div>

  </div>
  <!-- BREADCRUMBS -->

  <!-- PANEL -->
<div>
<PaNel/>
</div>
<!-- RECORD SECTION -->
<div class="flex-grow-1 border record-section mt-5 p-5 text-center">
<h5 class="text-black">Say hello to the world!</h5>

<p class="text-grey text-small mt-1">Record your first video/audio and share it what your team, friends, followers and customers.</p>

<div class="mt-3">
  <button type="button" class="btn btn-primary gap-3"><i class="bi bi-camera-video mr-1"></i> New Request</button>
  <button type="button" class="btn btn-danger gap-3"><i class="bi bi-record-circle mr-1"></i>Start Recording</button>
</div>
</div>
<!-- RECORD SECTION -->

<!-- INFO SECTION -->
<div class="row mt-2">
<div class="col-lg-6">

</div>

<div class="col-lg-6 py-5">
<h5 class="text-dark-blue">Want more controls & better quality recording?</h5>

<div class="mt-5">
  <button type="button" class="btn btn-primary">Download the desktop recorder</button>
</div>

</div>
</div>

<div>
    <button @click="startRecording">Start Recording</button>
    <button @click="stopRecording">Stop Recording</button>
  </div>
<!-- INFO SECTION -->
 </div>
</template>

<script>
import PaNel from '../components/PaNel.vue'
export default {
  name: 'IndexPage',

  components:{
    PaNel
  },
  layout: 'Dashboard',
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
        })
        .catch((error) => {
          console.error('Error accessing media devices:', error);
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
