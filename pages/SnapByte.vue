<template lang="">
  <div>
    <div class="py-5 main-content container">

<!-- BREADCRUMBS -->
<div>

</div>
<!-- BREADCRUMBS -->

<!-- pANEL -->
<div>
  <PaNel/>
</div>
<!-- PANEL -->


<div class="table-responsive mt-4">
  <table class="table table-borderless">
    <thead>
    <tr>
      <th scope="col" class="text-dark-blue">Recordings</th>
      <th scope="col" class="text-dark-blue">Title</th>
      <th scope="col" class="text-dark-blue">Views</th>
      <th scope="col" class="text-dark-blue">Size</th>
      <th scope="col" class="text-dark-blue">Last Modified</th>
    </tr>

    <tr v-for="recording in recordings" :key="recording">
     <td> <img :src="recording.thumbnails" alt="Thumbnail"></td>
     <td>{{recording.title}}</td>
     <td>332</td>
     <td>{{recording.fileSize}} &nbsp;KB</td>
     <td>{{recording.recordingTime}}</td>
     <td>{{recording.recordingTime}}</td>
     <button type="button" class="btn btn-transparent"><i class="bi bi-three-dots text-dark-blue"></i></button>
    </tr>

  </thead>
</table>
</div>
</div>
  </div>
</template>
<script>
import PaNel from '../components/PaNel.vue'
export default {
  name: 'SnapByte',
  components:{
    PaNel
  },
  layout: 'Dashboard',
  computed:
  {
    recordings()
    {
      return this.$store.state.recordings
    }
  },

  mounted(){
    console.log(this.recordings)
  }
}
</script>
<style lang="">

</style>
