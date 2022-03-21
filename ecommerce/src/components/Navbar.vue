<template>
  <div class="nav-bar">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand style="color:white"><router-link to="/" style="decoration-text:none;  color: white">Ecommerce</router-link></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="list"></b-icon>
        </template>
      </b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Navbar",
  components: {},
};
</script>
