<template>
  <div class="bui-dialog-wrapper" v-show="show">
    <div class="bui-dialog">
      <div class="bui-dialog-title">
        <slot name="header"></slot>
      </div>
      <div class="bui-dialog-content">
        <slot></slot>
      </div>
      <div class="bui-dialog-actions">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  // import Popper from 'popper.js'

  export default {
    props: {
      show: Boolean
    },
    // watch: {
    //   show (val, lastVal) {
    //     if (val === lastVal) { return }
    //     if (val) {
    //       console.log(this.$el, window.document.body)
    //       // this.$popper = new Popper(window.document.body, this.$el, {
    //       //   placement: 'top'
    //       // })
    //     }
    //   }
    // },
    methods: {
      close () {
        this.$emit('hidden::dialog')
      }
    }
    // data () {
    //   return {
    //     $popper: null
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  .bui-dialog-wrapper {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 999;
    position: fixed;
    overflow: auto;
    margin: 0px;
    background-color: rgba($blue-grey-600, .1);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .bui-dialog {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: auto;
    padding: 1em;
    background: white;
    color: black;

    @include card(5);
    // width: 280px;

    .bui-dialog-title {
      padding: 24px 24px 0;
      margin: 0;
      font-size: 2.5rem;
    }

    .bui-dialog-actions {
      padding: 8px 8px 8px 24px;
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;

      & > * {
        margin-right: 8px;
        height: 36px;
        &:first-child {
          margin-right: 0;
        }
      }

      .full-width {
        padding: 0 0 8px 0;
        & > * {
          height: 48px;
          flex: 0 0 100%;
          padding-right: 16px;
          margin-right: 0;
          text-align: right;
        }
      }
    }

    .bui-dialog-content {
      padding: 20px 24px 24px 24px;
      color: rgba(0,0,0, 0.54);
    }
  }
</style>