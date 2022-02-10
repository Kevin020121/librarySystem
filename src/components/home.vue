<template>
  <div>
    <div class="top">
      <Head></Head>
    <div class="main">
      <Nav></Nav>
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>


import Head from './common/Head'
import Nav from './common/Nav'



export default {
  components: {
    Head,
    Nav,
  }
}
</script>

<style scoped>
.main {
  display: flex;
}

</style>