<template>
    <div class="overlay" v-on:click.self="$parent.toggleOverlay" v-bind="$props">
      <div class="overlay-content">
        <slot>
        </slot>
      </div>
    </div>
</template>

<script>
export default {

  name: 'vue-advanced-table-overlay',
  props: {
  },
  components: {
  },
  data: function() {
    return {
    }
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
  }

  .overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
