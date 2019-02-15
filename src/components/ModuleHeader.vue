<template>
  <div class="module-header">
    <h3 class="m-subheader__title ">
      {{ name }}
    </h3>
    <b-button-group v-for="button in buttons" :key="button.id">
      <b-button v-if="button.visibleToAdmin" :variant="button.style" v-on:click="button.onClick">{{button.label}}</b-button>
    </b-button-group>
    
  </div>
</template>

<script>
export default {
  name: 'ModuleHeader',
  props: {
    name: String,
    buttons:Array,
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
