<template>
  <div id="app">
    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">
      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
        <h4>
          My Name
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>
      </div>
      <vs-sidebar-item index="1">
        <router-link to="/">Home</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="2">
        <router-link to="/about">About</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="3">
        <router-link to="/srb">SRB</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="5" >
        <vs-button @click="active=false" color="primary" type="filled">Close Sidebar</vs-button>
      </vs-sidebar-item>
      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>


    <b-container fluid>
      
      <vs-button @click.stop="active=true" color="primary" type="filled">Open Sidebar</vs-button>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  data:()=>({
    active:false,
  })
}
</script>
<style lang="scss">
@-webkit-keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.animated-background, .img-loading, .text-line-loading {
  -webkit-animation-duration: 1.25s;
          animation-duration: 1.25s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
          animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  background: #f6f6f6;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 800px 104px;
  height: 96px;
  position: relative;
}

.img-loading {
  height: 300px;
  width: 100%;
}

.text-line-loading {
  height: 20px;
  width: 100%;
  margin: 10px 0;
  margin:10px;
}



  @-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 0.5s linear infinite;
  -moz-animation: rotating 0.5s linear infinite;
  -ms-animation: rotating 0.5s linear infinite;
  -o-animation: rotating 0.5s linear infinite;
  animation: rotating 0.5s linear infinite;
}


.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
