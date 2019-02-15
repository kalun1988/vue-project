<template>
  <div id="app">
    <b-container fluid>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/srb">SRB</router-link>
      </div>
      <router-view/>
    </b-container>
  </div>
</template>

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
