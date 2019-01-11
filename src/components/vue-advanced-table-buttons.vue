<template>
  <div>
    <vue-advanced-table-button-column-visibility v-if="isColumnVisiblityButtonSelected"></vue-advanced-table-button-column-visibility>
    <button type="button" v-for="button in buttons" v-if="typeof button === 'object'" v-on:click="button.action">
      {{ button.label }}
    </button>
  </div>
</template>

<script>
import vueAdvancedTableButtonColumnVisibility from './vue-advanced-table-button-column-visibility.vue'

export default {
  name: 'vue-advanced-table-buttons',
  props: {
    buttons: {
      type: Array,
      required: true
    }
  },
  components: {
    vueAdvancedTableButtonColumnVisibility
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
    isColumnVisiblityButtonSelected: function() {
      const self = this;
      return self.buttons.find(function(button) {
        return button === 'columnVisibility'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
