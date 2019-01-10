<template>
  <div>
    <div style="margin-bottom: 8px;">
      <input v-model="search" />
    </div>
    <div>
      <table style="text-align: left;" cellpadding="8" cellspacing="0" border="1">
        <thead>
          <tr>
            <vue-advanced-table-column-header v-for="column in columnOrder" v-bind:key="column" v-bind:primaryKey="column" v-bind:column="column" v-bind:rows="rows" v-bind:columns="columns"/>
          </tr>
        </thead>
        <tbody style="visibility: collapse;">
          <vue-advanced-table-row v-for="row in reorderedRows" v-bind:row="row" v-bind:rows="rows" v-bind:columns="columns" v-bind:key="row[primaryKey]" v-bind:primaryKey="row[primaryKey]" v-bind:columnOrder="columnOrder">
            <vue-advanced-table-cell v-for="column in columnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind:rows="rows" v-bind:columns="columns" v-bind:primaryKey="primaryKey">
              <slot v-bind:name="column" v-bind:row="row">
              </slot>
            </vue-advanced-table-cell>
          </vue-advanced-table-row>
        </tbody>
      </table>
    </div>
    <div>
      <table style="text-align: left;" cellpadding="8" cellspacing="0" border="1">
        <thead style="visibility: collapse;">
          <tr>
            <vue-advanced-table-column-header v-for="column in columnOrder" v-bind:key="column" v-bind:primaryKey="column" v-bind:column="column" v-bind:rows="rows" v-bind:columns="columns"/>
          </tr>
        </thead>
        <tbody>
          <vue-advanced-table-row v-for="row in reorderedRows" v-bind:row="row" v-bind:rows="rows" v-bind:columns="columns" v-bind:key="row[primaryKey]" v-bind:primaryKey="row[primaryKey]" v-bind:columnOrder="columnOrder">
            <vue-advanced-table-cell v-for="column in columnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind:rows="rows" v-bind:columns="columns" v-bind:primaryKey="primaryKey">
              <slot v-bind:name="column" v-bind:row="row">
              </slot>
            </vue-advanced-table-cell>
          </vue-advanced-table-row>
        </tbody>
      </table>
    </div>
  </div>
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
    order: {
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
      selectedRows: {},
      search: ''
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
  },
  computed: {
    reorderedRows: function() {
      const self = this;
      var rows = self.filteredRows.sort(function(a, b) {
        if (a[self.order.column] < b[self.order.column])
          return -1;
        if (a[self.order.column] > b[self.order.column])
          return 1;
        return 0;
      });
      if (self.order.direction == 'desc') {
        rows.reverse();
      }

      return rows;
    },
    filteredRows: function() {
      const self = this;
      return self.rows.filter(function(row) {
        var response = false;
        for (let i = 0; i < Object.keys(row).length; i++){
          var data = row[Object.keys(row)[i]];
          if(data.toString().toLowerCase().indexOf(self.search.toLowerCase()) > -1) {
            response = true;
          }
        }
        return response;
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
