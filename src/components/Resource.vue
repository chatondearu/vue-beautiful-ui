<template>
  <div class="resource">
    <img v-if="type === 'img'" :src="url">
  </div>
</template>

<script type="javascript">
  import _ from 'lodash'

  export default {
    props: {
      url: {
        required: false,
        type: String,
        default: null
      }
    },
    computed: {
      type () {
        let type = null
        if (this.url) {
          if (
            _.endsWith(this.url, '.png') ||
            _.endsWith(this.url, '.jpg') ||
            _.endsWith(this.url, '.gif')
          ) {
            type = 'img'
          }
        }
        return type
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resource {

  }
</style>