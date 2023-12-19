<template>
  <div class="home">
    <PostsCompo/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsCompo from '@/components/PostsCompo.vue'

export default {
  name: 'HomeView',
  components: {
    PostsCompo
  }
}
</script>
