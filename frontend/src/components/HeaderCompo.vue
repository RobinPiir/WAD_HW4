<template>
  <nav class="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="loginLink">{{ loginText }}</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'HeaderCompo',
  computed: {
    loginText() {
      const params = new URLSearchParams(window.location.search);
      return params.has('email') && params.has('password') ? 'Logout' : 'Log in';
    },
    loginLink() {
      const params = new URLSearchParams(window.location.search);
      return params.has('email') && params.has('password') ? '/' : '/login';
    }
  }
};
</script>

<style>
.nav{
    bottom: 0;
    right: 0;
    left: 0;
    top: 50px;
    padding-top: 2em;
    padding-bottom: 2em;
    border: 1px solid #646174;
    background-color: #BED6B8;
    text-align: center;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
}
</style>
