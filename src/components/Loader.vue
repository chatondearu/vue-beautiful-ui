<template>
  <div class="loader ball-scale-ripple-multiple">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script type="javascript">
  export default {}
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  $size: 50px;
  @keyframes ball-scale-ripple-multiple {
    0% {
      transform: scale(0.1);
      opacity: 1;
    }
    70% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      opacity: 0.0;
    }
  }

  @function delay($interval, $count, $index) {
    @return ($index * $interval) - ($interval * $count);
  }

  @mixin ball-scale-ripple-multiple ($n:3, $start:0) {
    @for $i from $start through $n {
      > div:nth-child(#{$i}) {
        animation-delay: delay(0.2s, $n, $i - 1);
      }
    }
  }

  .ball-scale-ripple-multiple {
    display: inline-block;
    @include ball-scale-ripple-multiple();

    width: $size;
    height: $size;
    position: relative;
    transform: translateX($size / 2);
    // transform: translateX(-$size / 2);

    > div {
      animation-fill-mode: both;
      position: absolute;
      top: -2px;
      left: -26px;
      width: $size;
      height: $size;
      border-radius: 100%;
      border: 2px solid $primary-color;
      animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8);
    }
  }
</style>