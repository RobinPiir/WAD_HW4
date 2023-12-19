

<template>
  <nav class="nav">
    <router-link to="/">Home</router-link> |
    <button v-if = "authResult" @click="Logout" class="center">Logout</button>
  </nav>
  <router-view/>
</template>

<script>
import auth from "../../auth";


export default {
  name: 'HeaderCompo',
  data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include',
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
  mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
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
