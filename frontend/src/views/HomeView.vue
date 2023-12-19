<template>
  <div class="home">
    <HeaderCompo/>

    <PostsCompo/>
    <FooterCompo/>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterCompo from '@/components/FooterCompo.vue'
import HeaderCompo from '@/components/HeaderCompo.vue'
import PostsCompo from '@/components/PostsCompo.vue'

export default {
  name: 'HomeView',
  components: {
    FooterCompo,
    HeaderCompo,
    PostsCompo
  }
}
</script>
