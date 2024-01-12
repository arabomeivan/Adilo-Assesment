<template>
 <div class="py-5 main-content container">

  <!-- BREADCRUMBS -->
  <div>

  </div>
  <!-- BREADCRUMBS -->

  <!-- PANEL -->
<div>
<PaNel @startRecording="grantPermission" />
</div>
<!-- RECORD SECTION -->
<div class="flex-grow-1 border record-section mt-5 p-5 text-center">

  <div class="text-center mb-2">
 <img src="../assets/images/folder.png" class="img-fluid" alt="">
  </div>
<h5 class="text-black">Say hello to the world!</h5>

<p class="text-grey text-small mt-1">Record your first video/audio and share it what your team, friends, followers and customers.</p>

<div class="mt-3">
  <button type="button" class="btn btn-primary gap-3 new-request-btn" @click="grantPermission"><i class="bi bi-camera-video mr-1"></i> New Request</button>
  <button type="button" class="btn btn-danger gap-3" @cick="startRecording"><i class="bi bi-record-circle mr-1"></i>Start Recording</button>
</div>
</div>
<!-- RECORD SECTION -->

<!-- INFO SECTION -->
<div class="row mt-2">
<div class="col-lg-6">
<img src="../assets/images/window-preview.png" class="img-fluid mt-3" alt="">
</div>

<div class="col-lg-6 py-5">
<h5 class="text-dark-blue info">Want more controls & better quality recording?</h5>

<div class="mt-5">
  <button type="button" class="btn btn-primary">Download the desktop recorder</button>
</div>

</div>
</div>

<!-- Permission Modal -->
<GrantPermission/>
<!-- INFO SECTION -->
 </div>
</template>

<script>
import PaNel from '../components/PaNel.vue'
import GrantPermission from '~/components/GrantPermission.vue';
export default {
  name: 'IndexPage',

  components:{
    PaNel,
    GrantPermission
  },
  layout: 'Dashboard',
  methods: {
    grantPermission() {
      this.$bvModal.show('grant-permission')
    },

    startRecording()
    {
      this.$store.dispatch('startRecording')
    }
  },
}
</script>
