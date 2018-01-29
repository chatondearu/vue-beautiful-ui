<template>
  <transition name="nav-expand">
    <nav class="bui-navigation" v-if="open" v-on-clickaway="close">
      <icon-button v-if="showCloseButton" icon="close" type="clear" @click.native="close"></icon-button>
      <slot></slot>
    </nav>
  </transition>
</template>

<script type="javascript">
  import { parentHasClass } from 'app/components/utils/functions'
  import IconButton from './IconButton'
  import { mixin as ClickAway } from 'vue-clickaway'

  export default {
    mixins: [ClickAway],
    name: 'bui-navigation',
    props: {
      open: Boolean,
      activeClickAway: {
        type: Boolean,
        default: true
      },
      showCloseButton: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      close (event) {
        if (!this.activeClickAway) { return }
        this.$nextTick(() => {
          if (!parentHasClass(event.target, 'unclose-navigation')) {
            this.$emit('close')
          }
        })
      }
    },
    components: {
      IconButton
    }
  }
</script>

<style lang="scss">
  @import '~style/variables.scss';

  .bui-navigation {
    position: fixed;
    z-index: 1;
    width: 250px;
    background-color: $white;
    top: 0;
    bottom: 0;
    left: 0;
    @include card(3);

    &.nav-expand-enter-active, &.nav-expand-leave-active {
      transition: left .25s ease;
      left: 0;
    }
    &.nav-expand-enter, &.nav-expand-leave-active {
      left: -250px;
    }

    p {
      margin-top: 10px;
      padding: 5px;
    }
  }
</style>