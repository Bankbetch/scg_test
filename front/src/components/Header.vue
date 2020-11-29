<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-light sticky-top">
    <a class="navbar-brand" href="#">
      Bootstrap
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <fa :icon="['fas', 'bars']"></fa>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="(item, index) of menus" :key="index">
          <router-link :to="item.link" class="nav-link"> {{ item.name }} </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Xyz',
          link: '/xyz'
        },
        {
          name: 'Bc',
          link: '/bc'
        },
        {
          name: 'Google Map',
          link: '/googlemap'
        },
        {
          name: 'About',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style></style>
