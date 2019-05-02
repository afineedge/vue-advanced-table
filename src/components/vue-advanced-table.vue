<template>
  <div class="vue-advanced-table-container">
    <div class="vue-advanced-table-controls" v-if="buttons.length > 0 || searchable">
      <div class="vue-advanced-table-buttons" v-bind:class="classObject.buttonContainer" v-if="buttons.length > 0">
        <vue-advanced-table-buttons v-bind="$props" v-bind:columnOrder="columnOrder" v-bind:filteredColumnOrder="filteredColumnOrder" v-bind:hiddenColumns="hiddenColumns" v-bind:storage="storage" v-bind:classObject="classObject" v-bind:rows="reorderedRows" v-on:update:columnOrder="columnOrder = $event"></vue-advanced-table-buttons>
      </div>
      <div class="vue-advanced-table-search" v-if="searchable !== false">
        <slot name="table-search">
          <input class="vue-advanced-table-search-input" v-model="search" placeholder="Search" v-bind:class="classObject.search" />
        </slot>
      </div>
    </div>
    <div class="vue-advanced-table-wrapper">
      <div class="vue-advanced-table-scroll">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" v-bind:class="classObject.table" ref="table" class="vue-advanced-table">
          <tbody v-bind:class="classObject.body" ref="tbody">
            <vue-advanced-table-row v-for="row in currentPageRows" v-bind:row="row" v-bind:key="row[primaryKey]" v-bind:class="{ active: selectedRows.indexOf(row[primaryKey]) > -1 }">
              <vue-advanced-table-cell v-for="column in filteredColumnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind:class="classObject.cell" v-bind:style="getFixedStyle(column, 'cell')">
                <slot v-bind:name="'column-' + column" v-bind:row="row" v-bind:primary-key="primaryKey"></slot>
              </vue-advanced-table-cell>
            </vue-advanced-table-row>
          </tbody>
          <thead class="vue-advanced-table-header" v-bind:class="classObject.header">
            <tr>
              <vue-advanced-table-column-header v-for="column in filteredColumnOrder" v-bind:classObject="classObject" v-bind:key="column" v-bind:column="column" v-bind="$props" v-bind:hiddenColumns="hiddenColumns" v-bind:columnName="column" v-bind:style="getFixedStyle(column, 'header')" />
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="vue-advanced-table-pagination">
      <vue-advanced-table-pagination v-if="perPage" v-model="currentPage" v-bind:total="reorderedRows.length" v-bind:perPage="perPage" v-bind:classes="classObject"></vue-advanced-table-pagination>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import vueAdvancedTableColumnHeader from './vue-advanced-table-column-header.vue'
import vueAdvancedTableRow from './vue-advanced-table-row.vue'
import vueAdvancedTableCell from './vue-advanced-table-cell.vue'
import vueAdvancedTableButtons from './vue-advanced-table-buttons.vue'
import vueAdvancedTablePagination from './vue-advanced-table-pagination.vue'

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
    selectedRows: {
      type: Array,
      required: false,
      default: function(){
        return [];
      }
    },
    columns: {
      type: Array,
      required: true
    },
    buttons: {
      type: Array,
      default: function(){
        return [];
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
    perPage: {
      type: Number
    },
    page: {
      type: Number
    },
    storage: {
      type: String,
      default: ''
    },
    classes: {
      type: [String, Object],
      default: ''
    }
  },
  data: function() {
    return {
      columnOrder: [],
      hiddenColumns: [],
      search: '',
      tableData: [],
      currentPage: 1
    }
  },
  components: {
    vueAdvancedTableColumnHeader,
    vueAdvancedTableRow,
    vueAdvancedTableCell,
    vueAdvancedTableButtons,
    vueAdvancedTablePagination
  },
  mounted: function() {
    const self = this;
    var storedData;

    if (typeof self.page !== 'undefined'){
      self.currentPage = self.page;
    }

    if (self.storage.length > 0){
      storedData = self.getStoredTableInfo();
    }

    if (storedData !== null && typeof storedData === 'object'){
      if (Array.isArray(storedData.columnOrder)){
        self.setColumnOrder(storedData.columnOrder);
      }
      if (Array.isArray(storedData.hiddenColumns)){
        self.hiddenColumns = storedData.hiddenColumns;
      }
    } else {
      self.setColumnOrder();
    }

    if (self.hiddenColumns.length === 0){
      for (var i = 0; i < self.columns.length; i++){
        if (self.columns[i].visible === false){
          self.hiddenColumns.push(self.columns[i].name);
        }
      }
    }

    self.updateTableData();
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    },
    setColumnOrder: function(order) {
      const self = this;

      if (Array.isArray(order)){
        const columns = self.columns.map(function(column) {
          return column.name;
        });
        let columnOrder = [];
        const currColumns = self.columns.map(function(column) {
          return column.name;
        });
        for (let i = 0; i < order.length; i++){
          if (columns.indexOf(order[i]) > -1){
            columnOrder.push(order[i]);
          }
        }
        for (let i = 0; i < currColumns.length; i++){
          if (columnOrder.indexOf(currColumns[i]) == -1){
            columnOrder.push(currColumns[i]);
          }
        }
        self.columnOrder = columnOrder;
      } else {
        self.columnOrder = self.columns.map(function(column) {
          return column.name;
        });
      }
    },
    storeTableInfo: function(param) {
      const self = this;
      var payload = {
        columnOrder: self.columnOrder,
        hiddenColumns: self.hiddenColumns
      };

      if (param === 'columnOrder'){
        payload.columnOrder = self.columnOrder;
      }
      if (param === 'hiddenColumns'){
        payload.hiddenColumns = self.hiddenColumns;
      }

      localStorage.setItem('vue-advanced-table-' + self.storage, JSON.stringify(payload));
    },
    getStoredTableInfo: function() {
      const self = this;
      return JSON.parse(localStorage.getItem('vue-advanced-table-' + self.storage));
    },
    isColumnVisible: function(column) {
      const self = this;
      return self.hiddenColumns.indexOf(column) === -1
    },
    updateTableData: function() {
      const self = this;
      Vue.nextTick(function(){
        var rows = self.$refs.tbody.getElementsByTagName('tr');
        var data = [];
        for (let i = 0; i < rows.length; i++){
          let rowData = [];
          const row = rows[i];
          const cells = row.getElementsByTagName('td');
          for (let r = 0; r < cells.length; r++){
            const cell = cells[r];
            rowData.push(cell.textContent.trim());
          }
          data.push(rowData);
        }

        var columnHeaders = self.filteredColumnOrder.map(function(column){
          return self.getColumnByName(column).label;
        })

        self.tableData = [[...columnHeaders], ...data];
      })
    },
    getVNodeText: function(node, column){
      const self = this;
      if (typeof node[0].children !== 'undefined'){
        if (node[0].children.length > 1){
          // eslint-disable-next-line
          console.error('[Vue warn]: Column "' + column + '" template may contain only one root element.', self);
        }
        return self.getVNodeText(node[0].children, column);
      } else if (node[0].text){
        return node[0].text.trim();
      } else {
        return '';
      }
    },
    getValueForSorting: function(data, column, row) {
      const self = this;
      const scopedSlots = self.$scopedSlots;
      const slot = scopedSlots['column-' + column.name];
      let sortData = data;
      if (typeof slot === 'function'){
        sortData = self.getVNodeText(slot({
          row: row
        }), column);
      }
      if (typeof column.format === 'string'){
        if (column.format === 'date'){
          return Date.parse(new Date(sortData)).toString().toLowerCase();
        } else if (column.format === 'dollar'){
          return Number(sortData.replace(/[^0-9.-]+/g,"")).toString().toLowerCase();
        }
      } else if (!isNaN(+sortData) && sortData.toString().length > 0){
        return Number(sortData).toString().toLowerCase();
      }
      return sortData.toString().toLowerCase();
    },
    getFixedStyle: function(column, target){
      const self = this;
      if (self.fixedColumn === column){
        if (target === 'header'){
          return {
            position: 'sticky',
            left: 0,
            backgroundColor: 'inherit'
          }
        } else {
          return {
            position: 'sticky',
            left: 0,
            backgroundColor: 'inherit'
          }
        }
      }
    }
  },
  watch: {
    columnOrder: function() {
      const self = this;
      if (self.storage.length > 0){
        self.storeTableInfo('columnOrder');
      }
    },
    hiddenColumns: function() {
      const self = this;
      if (self.storage.length > 0){
        self.storeTableInfo('hiddenColumns');
      }
    },
    filteredColumnOrder: function() {
      const self = this;
      self.updateTableData();
    },
    order: function() {
      const self = this;
      self.updateTableData();
    },
    rows: function() {
      const self = this;
      self.updateTableData();
    }
  },
  computed: {
    filteredColumnOrder: function() {
      const self = this;
      return self.columnOrder.filter(function(column){
        return self.isColumnVisible(column);
      });
    },
    fixedColumn: function() {
      const self = this;
      var fixedColumns = self.filteredColumnOrder.filter(function(column){
        return self.getColumnByName(column).fixed;
      });
      if (fixedColumns.length > 1){
        // eslint-disable-next-line
        console.error('[Vue warn]: Multiple columns are assigned attribute "fixed" with value "true". Only the first column will be fixed.', self);
      }
      return fixedColumns[0];
    },
    filteredRows: function() {
      const self = this;
      const rows = self.rows;
      return rows.filter(function(row){

        let found = false;
        for (let i = 0; i < self.columnOrder.length; i++){
          const column = self.getColumnByName(self.columnOrder[i]);
          if (typeof row[column.name] !== 'undefined'){
            let data = self.getValueForSorting(row[column.name], column, row);
            if (data.indexOf(self.search.toString().toLowerCase()) > -1){
              found = true;
              break;
            }
          }
        }
        return found;
      });
    },
    reorderedRows: function() {
      const self = this;
      const rows = self.filteredRows;

      if (typeof self.order !== 'undefined' && self.order.column.length > 0){
        let sortedRows = rows.sort(function(a, b) {
          const column = self.getColumnByName(self.order.column);
          let dataA = self.getValueForSorting(a[self.order.column], column, a);
          let dataB = self.getValueForSorting(b[self.order.column], column, b);
          if (dataA === dataB){
            return 0;
          }
          if (dataA === ''){
            return 1;
          }
          if (dataB === ''){
            return -1;
          }

          if (dataA < dataB){
            return -1;
          }
          if (dataA > dataB){
            return 1;
          }
          return 0;
        });
        if (self.order.direction == 'desc') {
          sortedRows.reverse();
        }
        return sortedRows;
      }
      return rows;
    },
    currentPageRows: function() {
      var self = this;
      if (typeof self.perPage !== 'undefined'){
        var page = self.currentPage - 1;
        var startIndex = page * self.perPage;
        return self.reorderedRows.slice(startIndex, startIndex + self.perPage);
      }
      return self.reorderedRows;
    },
    classObject: function() {
      const self = this;
      var classes = {
        buttonContainer: '',
        buttons: '',
        search: '',
        table: '',
        header: '',
        headerCell: '',
        body: '',
        cell: '',
        paginationContainer: '',
        paginationButtons: {
          inactive: '',
          active: ''
        }
      }

      if (typeof self.classes === 'string'){
        classes.table = self.classes;
      } else if (typeof self.classes === 'object'){
        const keys = Object.keys(self.classes);
        var validKeys = Object.keys(classes);
        for (let i = 0; i < keys.length; i++){
          const key = keys[i];
          if (validKeys.indexOf(key) > -1){
            classes[key] = self.classes[key];
          }
        }
      }

      return classes;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-container {
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

  .vue-advanced-table-header-scroll {
    overflow: hidden;
    flex-shrink: 0;
    width: 100%;
    position: relative;
  }

  .vue-advanced-table-scroll {
    overflow-y: scroll;
    position: relative;
  }

  .vue-advanced-table-header {
  }

  .vue-advanced-table-column-header {
    background-color: #fff;
    border-top: 0px;
  }
</style>
