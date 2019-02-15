<template>
  <div class="module-header">
      <div class="m-subheader">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
              <h3 class="m-subheader__title ">
                {{ name }}
              </h3>
              <div class="buttons" v-for="button in buttons">
                <div v-if="button.visibleToAdmin">
                  <b-button :variant="button.style" v-on:click="button.onClick">{{button.label}}</b-button>
                </div>
              </div>
          </div>
          <div class="floorplan-dropdown" style="padding-top: 10px;">
              <ul class="m-portlet__nav">
                  <li m-dropdown-toggle="hover" class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" aria-expanded="true"><a href="#" class="m-dropdown__toggle btn btn-outline-primary dropdown-toggle label"><span class="floor-plan-label">Select floor</span></a>
                      <div class="m-dropdown__wrapper" style="z-index: 101;"><span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style="left: auto; right: 60.5px;"></span>
                          <div class="m-dropdown__inner">
                              <div class="m-dropdown__body">
                                  <div class="m-dropdown__content">
                                      <ul class="m-nav">
                                          <li class="m-nav__item"><a href="#" class="m-nav__link"><i class="m-nav__link-icon flaticon-placeholder-3"></i> <span class="m-nav__link-text">abc</span></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleHeader',
  props: {
    name: String,
    buttons:Array,
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    toggleEditMode:function(){
      console.log("toggle Edit Mode");
      
    },
    createFloor:function(){
      console.log("create Floor");
    },
    removeFloor:function(){
      console.log("remove Floor");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
