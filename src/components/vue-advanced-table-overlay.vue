<template>
    <div class="vue-advanced-table-overlay" v-on:click.self="$parent.toggleOverlay" v-bind="$props">
      <div class="vue-advanced-table-overlay-content">
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
  .vue-advanced-table-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 2;
  }

  .vue-advanced-table-overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-height: 80vh;
    overflow-y: auto;
  }
</style>
