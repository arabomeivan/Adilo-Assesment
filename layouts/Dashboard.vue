<template lang="">
  <div>

<!-- NAVBAR -->
<NavBar/>
<!-- NAVBAR -->

<!-- PARENT COMPONENT TO HOLD CONTENT -->
<div class="d-flex">
  <!-- SIDEBAR -->
  <aside class="bg-light py-5 px-2">
    <ul class="nav flex-column gap-2 mt-5">
  <li class="nav-item-pill mt-5 justify-content-center d-flex">
    <nuxt-link to="/" class="nav-link d-flex tab">
      <div class="container">
    <div class="row">
    <div class="col-lg-3">
      <img src="../assets/images/video.png" class="img-fluid" alt="">
    </div>
    <div class="col-lg-9">
      My Recordings
</div>
    </div>
    </div></nuxt-link>
  </li>
  <li class="nav-item-pill justify-content-center d-flex">
    <nuxt-link to="/" class="nav-link d-flex gap-3 tab">
    <div class="container">
    <div class="row">
    <div class="col-lg-3">
      <i class="bi bi-share"></i>
    </div>
    <div class="col-lg-9">
      Requested
</div>
    </div>
    </div>
  </nuxt-link>
  </li>
</ul>
  </aside>
  <div class="container flex-grow-1">
    <nuxt/>
  </div>
</div>
<!-- PARENT COMPONENT TO HOLD CONTENT -->

  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
export default {
name: 'Dashboard',

components:
{
  NavBar
}
}
</script>
<style lang="">

</style>
