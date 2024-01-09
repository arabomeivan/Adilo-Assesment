<template lang="">
  <div>
    <div class="py-5 main-content container">

<!-- BREADCRUMBS -->
<div>

</div>
<!-- BREADCRUMBS -->

<!-- PANEL -->
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
  layout: 'Dashboard'
}
</script>
<style lang="">

</style>
