<template>
    <HeaderCompo/>
    <SignUpCompo/>
    <FooterCompo/>
</template>

<script>
// @ is an alias to /src
import FooterCompo from '@/components/FooterCompo.vue'
import HeaderCompo from '@/components/HeaderCompo.vue'
import SignUpCompo from '@/components/SignUpCompo.vue'

export default {
  name: 'SignUpView',
  components: {
    FooterCompo,
    HeaderCompo,
    SignUpCompo
  }
}
</script>
