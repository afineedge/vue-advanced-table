<template>
    <td>
      <slot>{{ content }}</slot>
    </td>
</template>

<script>
export default {
  name: 'vue-advanced-table-cell',
  props: {
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    primaryKey: {
      type: String,
      required: true
    }
  },
  mounted: function() {
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    }
  },
  computed: {
    content: function() {
      const self = this;
      const column = self.getColumnByName(self.column.name);
      if (typeof column.render === 'function') {
        return column.render(self.row[column.name]);
      }

      return self.row[column.name];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
