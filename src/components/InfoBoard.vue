<template>
  <div class="info-board">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'InfoBoard',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
