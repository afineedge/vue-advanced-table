<template>
  <div>
    <template v-for="button in buttons">
      <vue-advanced-table-button-column-visibility v-if="button === 'columnVisibility'" v-bind="$props" v-on:update:columnOrder="$emit('update:columnOrder', $event)"></vue-advanced-table-button-column-visibility>
      <button type="button" v-on:click="button.action" v-else>
        {{ button.label }}
      </button>
    </template>
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
    },
    columns: {
      type: Array,
      required: true
    },
    columnOrder: {
      type: Array,
      required: true
    },
    hiddenColumns: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      columnVisibility: {
        active: false
      }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
