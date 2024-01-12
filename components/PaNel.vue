<template lang="">
  <div>
    <div class="row">
  <div class="col-lg-4">
    <h5 class="text-dark-blue">My Recordings {{recordings.length}}</h5>
  </div>
  <div class="col-lg-8 d-flex justify-content-end">
    <div class="container">
    <div class="row">
    <div class="col-lg-6 gap-1 justify-content-end px-0 pr-1 d-flex filter-section">
      <button type="button" class="btn btn-light"><i class="bi bi-arrow-down-up mr-1"></i>By Date</button>
  <button type="button" class="btn btn-light"><i class="bi bi-funnel mr-1"></i>Add Filter</button>
    </div>
    <div class="col-lg-6 gap-1 d-flex px-0">
      <button type="button" class="btn btn-primary gap-3" @click="grantPermission"><i class="bi bi-camera-video mr-1"></i> New Request</button>
  <button type="button" class="btn btn-danger" @click="startRecording"><i class="bi bi-record-circle mr-1"></i> Start Recording</button>
    </div>
    </div>
    </div>
</div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'PaNel',
  computed:
  {
    recordings()
    {
      return this.$store.state.recordings
    }
  },
  methods:
  {
    startRecording()
    {
      this.$store.dispatch('startRecording')
    },
    grantPermission()
    {
      this.$emit('startRecording')
    }
  },
}
</script>
<style lang="">

</style>
