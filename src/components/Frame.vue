<template>
  <div class="bui-frame">
    <div class="bui-frame-container">
      <slot></slot>
    </div>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'bui-frame',
    created () {
      const doc = document.documentElement
      const style = document.getElementsByTagName('body')[0].style
      this.stateScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      style['overflowY'] = 'hidden'
      style['marginTop'] = (parseInt(style['marginTop'] || 0) - this.stateScroll) + 'px'
    },
    beforeDestroy () {
      const style = document.getElementsByTagName('body')[0].style
      style['overflowY'] = 'auto'
      style['marginTop'] = (parseInt(style['marginTop'] || 0) + this.stateScroll) + 'px'
    },
    data () {
      return {
        stateScroll: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~style/responsive.scss';
  @import '~style/variables.scss';

  .bui-frame {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    @include fl-container();
    background-color: rgba($dark, .2);

    .bui-frame-container {
      @include flex-fit();
      background-color: $white;
      max-width: 680px;
      margin: auto;
      max-height: 100%;
      overflow: auto;
    }
  }
</style>