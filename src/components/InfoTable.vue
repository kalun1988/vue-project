<template>
  <div class="infoTable">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'InfoTable',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
