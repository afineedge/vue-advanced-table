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
      <div class="vue-advanced-table-header-scroll">
        <tr class="vue-advanced-table-header" v-bind:class="classObject.header">
          <vue-advanced-table-column-header v-for="column in filteredColumnOrder" v-bind:classObject="classObject" v-bind:key="column" v-bind:column="column" v-bind="$props" v-bind:hiddenColumns="hiddenColumns" />
        </tr>
      </div>
      <div class="vue-advanced-table-scroll">
        <div cellpadding="0" cellspacing="0" border="0" width="100%" v-bind:class="classObject.table" ref="table" class="vue-advanced-table">
          <thead class="vue-advanced-table-header-placeholder" v-bind:class="classObject.header">
            <tr>
              <vue-advanced-table-column-header v-for="column in filteredColumnOrder" v-bind:classObject="classObject" v-bind:key="column" v-bind:column="column" v-bind="$props" v-bind:hiddenColumns="hiddenColumns" v-bind:columnName="column" />
            </tr>
          </thead>
          <tbody v-bind:class="classObject.body" ref="tbody">
            <vue-advanced-table-row v-for="(row, index) in reorderedRows" v-bind:row="row" v-bind:key="index" v-bind:search="search">
              <vue-advanced-table-cell v-for="column in filteredColumnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind="$props" v-bind:hiddenColumns="hiddenColumns" v-bind:class="classObject.cell" v-bind:columnName="column">
                <slot v-bind:name="'column-' + column" v-bind:row="row">
                </slot>
              </vue-advanced-table-cell>
            </vue-advanced-table-row>
          </tbody>
        </div>
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
     required: false
    },
    tableElement: {
     type: String,
     required: false
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
      selectedRows: {},
      search: '',
      tableData: []
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
    var storedData;

    var scroller = self.$el.querySelector('.vue-advanced-table-scroll');
    var scrollHeader = self.$el.querySelector('.vue-advanced-table-header-scroll').querySelector('.vue-advanced-table-header');
    scroller.addEventListener('scroll', function(e) {
      scrollHeader.style.marginLeft = scroller.scrollLeft * -1 + 'px';
    })

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
    reorderedRows: function() {
      const self = this;
      self.updateTableData();
    }
  },
  computed: {
    filteredColumnOrder : function() {
      const self = this;
      return self.columnOrder.filter(function(column){
        return self.isColumnVisible(column);
      });
    },
    reorderedRows: function() {
      const self = this;
      var rows = self.rows;
      if (typeof self.order !== 'undefined'){
        rows = self.rows.sort(function(a, b) {
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
        cell: ''
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
  }

  .vue-advanced-table-scroll {
    overflow-y: scroll;
  }

  .vue-advanced-table-header-placeholder {
    opacity: 0;
    visibility: collapse;
  }

  .vue-advanced-table-header {
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }

  .vue-advanced-table-header .vue-advanced-table-column-header {
    display: flex;
    align-items: flex-end;
  }
</style>
