<template>
  <table>
    <thead>
      <tr>
        <vue-advanced-table-column-header v-for="column in columnOrder" v-bind:key="column" v-bind:primaryKey="column" v-bind:column="column" v-bind:rows="rows" v-bind:columns="columns"/>
      </tr>
    </thead>
    <tbody>
      <vue-advanced-table-row v-for="row in rows" v-bind:row="row" v-bind:rows="rows" v-bind:columns="columns" v-bind:key="row[primaryKey]" v-bind:primaryKey="row[primaryKey]" v-bind:columnOrder="columnOrder">
        <vue-advanced-table-cell v-for="column in columnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind:rows="rows" v-bind:columns="columns" v-bind:primaryKey="primaryKey">
          <slot v-bind:name="column" v-bind:row="row">
          </slot>
        </vue-advanced-table-cell>
      </vue-advanced-table-row>
    </tbody>
  </table>
</template>

<script>
import vueAdvancedTableColumnHeader from './vue-advanced-table-column-header.vue'
import vueAdvancedTableRow from './vue-advanced-table-row.vue'
import vueAdvancedTableCell from './vue-advanced-table-cell.vue'

export default {
  name: 'vue-advanced-table',
  props: {
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    options: {
      type: Object
    },
    primaryKey: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      columnOrder: [],
      columnVisibility: {},
      selectedRows: {}
    }
  },
  components: {
    vueAdvancedTableColumnHeader,
    vueAdvancedTableRow,
    vueAdvancedTableCell
  },
  mounted: function() {
    const self = this;
    self.setColumnOrder();
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    },
    setColumnOrder: function() {
      const self = this;
      self.columnOrder = self.columns.map(function(column) {
        return column.name;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
