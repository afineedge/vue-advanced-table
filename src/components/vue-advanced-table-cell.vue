<template>
    <td class="vue-advanced-table-cell">
      <slot>{{ content }}</slot>
    </td>
</template>

<script>
export default {
  name: 'vue-advanced-table-cell',
  props: {
    row: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    }
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
    content: function() {
      const self = this;
      if (typeof self.column.render === 'function') {
        return self.column.render(self.row[self.column.name], self);
      }

      return self.row[self.column.name];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-cell {
    padding: 4px;
  }
</style>
