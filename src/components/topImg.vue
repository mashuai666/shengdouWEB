<template>
  <div>
    <img :src='src' alt="" class="product-center-bgimg">
  </div>
</template>

<script>
export default {
  name: 'topImg',
  props: {
    src: String
  }
}
</script>

<style scoped>
.product-center-bgimg{
  width: 100%;
}
</style>
