<template>
  <div class="vue-advanced-table" ref="table">
    <div class="vue-advanced-table-controls" v-if="buttons.length > 0 || searchable">
      <div class="vue-advanced-table-buttons" v-if="buttons.length > 0">
        <vue-advanced-table-buttons v-bind="$props" v-bind:columnOrder="columnOrder" v-bind:hiddenColumns="hiddenColumns" v-on:update:columnOrder="columnOrder = $event"></vue-advanced-table-buttons>
      </div>
      <div class="vue-advanced-table-search" v-if="searchable !== false">
        <slot name="table-search">
          <input v-model="search" placeholder="Search" />
        </slot>
      </div>
    </div>
    <div class="vue-advanced-table-wrapper">
      <div class="vue-advanced-table-scroll">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" v-bind:class="classes">
          <thead>
            <vue-advanced-table-column-header v-for="column in columnOrder" v-bind:key="column" v-bind:column="column" v-bind="$props" v-bind:hiddenColumns="hiddenColumns" v-bind:columnName="column"/>
          </thead>
          <thead class="vue-advanced-table-floating-header">
            <vue-advanced-table-column-header v-for="column in columnOrder" v-bind:key="column" v-bind:column="column" v-bind="$props" v-bind:hiddenColumns="hiddenColumns"/>
          </thead>
          <tbody>
            <vue-advanced-table-row v-for="(row, index) in reorderedRows" v-bind:row="row" v-bind:key="index">
              <vue-advanced-table-cell v-for="column in columnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind="$props" v-bind:hiddenColumns="hiddenColumns">
                <slot v-bind:name="'column-' + column" v-bind:row="row">
                </slot>
              </vue-advanced-table-cell>
            </vue-advanced-table-row>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import vueAdvancedTableColumnHeader from './vue-advanced-table-column-header.vue'
import vueAdvancedTableRow from './vue-advanced-table-row.vue'
import vueAdvancedTableCell from './vue-advanced-table-cell.vue'
import vueAdvancedTableButtons from './vue-advanced-table-buttons.vue'

export default {
  name: 'vue-advanced-table',
  props: {
    primaryKey: {
      type: String,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    buttons: {
      type: Array,
      default: function(){
        return ['columnVisibility'];
      }
    },
    order: {
      type: Object,
      default: function() {
        return {
          column: '',
          direction: 'asc'
        }
      }
    },
    orderable: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: true
    },
    classes: {
      type: String
    }
  },
  data: function() {
    return {
      columnOrder: [],
      hiddenColumns: [],
      selectedRows: {},
      search: ''
    }
  },
  components: {
    vueAdvancedTableColumnHeader,
    vueAdvancedTableRow,
    vueAdvancedTableCell,
    vueAdvancedTableButtons
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
      var rows = self.filteredRows;
      if (typeof self.order !== 'undefined'){
        rows = self.filteredRows.sort(function(a, b) {
          if (a[self.order.column] < b[self.order.column])
            return -1;
          if (a[self.order.column] > b[self.order.column])
            return 1;
          return 0;
        });
        if (self.order.direction == 'desc') {
          rows.reverse();
        }
      }

      return rows;
    },
    filteredRows: function() {
      const self = this;
      return self.rows.filter(function(row) {
        var response = false;
        for (let i = 0; i < Object.keys(row).length; i++){
          var data = row[Object.keys(row)[i]];
          var renderColumn = self.columns.find(function(column) {
            return column.name === Object.keys(row)[i] && typeof column.render == 'function';
          });
          if (typeof renderColumn === 'object') {
            if(renderColumn.render(data).toLowerCase().indexOf(self.search.toLowerCase()) > -1) {
              response = true;
            }
          } else if (data.toString().toLowerCase().indexOf(self.search.toLowerCase()) > -1) {
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
  .vue-advanced-table {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .vue-advanced-table-controls {
    flex-shrink: 0;
    margin-bottom: 8px;
    display: flex;
  }

  .vue-advanced-table-buttons {
    flex-shrink: 0;
  }

  .vue-advanced-table-search {
    flex-shrink: 0;
    margin-left: auto;
    text-align: right;
  }

  .vue-advanced-table-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .vue-advanced-table-scroll {
    overflow-y: scroll;
  }

  .vue-advanced-table-floating-header {
    position: absolute;
    top: 0;
  }
</style>
