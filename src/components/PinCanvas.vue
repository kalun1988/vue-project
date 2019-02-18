<template>
  <div class="pin-canvas">
    <b-row>
    <b-col cols="12">
      <h1>{{ name }}</h1>
      <b-img :src=image fluid/>
    </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PinCanvas',
  props: {
    name: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
