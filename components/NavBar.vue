<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-light fixed-top">
  <div class="container-fluid">
    <nuxt-link to="/" class="gap-2 p-2 d-flex align-items-center">
    <div class="brand p-1 d-flex justify-content-center">
      <img src="../assets/images/swarm.png" class="img-fluid" alt="">
    </div>
    <h5 class="mt-2 text-dark-blue">
      Adilo
    </h5>
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">
      <ul class="nav nav-tabs ml-5 gap-2">
        <li class="nav-item">
    <a class="nav-link nav-link-active" aria-current="page" href="#">Projects</a>
  </li>

<!-- Dropdown Menu for Tools And Apps -->
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tools & Apps</a>
    <ul class="dropdown-menu">
      <li class="pb-3"><nuxt-link class="dropdown-item" to="/snapbyte">Snapbyte Recorder</nuxt-link></li>
      <li class="pb-3"><a class="dropdown-item" href="#">AudioBounce</a></li>
      <li><a class="dropdown-item" style="border:none;" href="#">Sugar Voice</a></li>
    </ul>
  </li>
  <!-- Dropdown Menu for Tools And Apps -->

  <!-- Menu Links -->
        <li v-for="links in navLinks" :key="links.id" class="nav-item">
    <a class="nav-link nav-link-active" aria-current="page" href="#">{{links.name}}</a>
  </li>
  <!-- Menu Links -->
  <div class="pt-2 help pr-4">
    <nuxt-link to="#" class="text-dark-blue"><b>Help</b></nuxt-link>
  </div>

<li class="d-flex">

  <div class="d-flex">
   <img src="../assets/images/boyband.png" class="img-fluid profile-img" alt="no image">
   <div>
    <div class="text-small">
<b>Ivan Arabome</b>
   </div>
   <div class="text-grey text-x-small">
    <p>arabomeivan@gmail.com</p>
   </div>
   </div>
  </div>

</li>
</ul>


    </div>
  </div>
</nav>
  </div>
</template>
<script>
export default {
  name:'NavBar',

  data(){
    return{
      navLinks:[
        {
          id:0,
          name:'Channels',
          class:'nav-item'
        },
        {
          id:1,
          name:'Contacts',
          class:'nav-item'
        },
        {
          id:2,
          name:'Analytics',
          class:'nav-item'
        },
        {
          id:3,
          name:'Settings',
          class:'nav-item'
        },

      ]
    }
  }
}
</script>
<style lang="">

</style>
