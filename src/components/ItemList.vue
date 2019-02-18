<template>
  <div class="item-list">
    <h1>{{ name }}</h1>
  <div class="items">
    <div class="item" v-for="(item, index) in items" v-on:click="onClickedItem(item.id, index)" :key="item.id">
      {{item.label}}
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    name: String,
    items: Array
  },
  methods:{
    onClickedItem: function(id, index){
      this.$emit("onClickedItem", id, index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>