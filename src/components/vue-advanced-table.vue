<template>
  <div class="vue-advanced-table-container">
    <div class="vue-advanced-table-controls" v-if="buttons.length > 0 || searchable">
      <div class="vue-advanced-table-buttons" v-bind:class="classObject.buttonContainer" v-if="buttons.length > 0">
        <vue-advanced-table-buttons v-bind="$props" v-bind:columnOrder="columnOrder" v-bind:filteredColumnOrder="filteredColumnOrder" v-bind:hiddenColumns="hiddenColumns" v-bind:storage="storage" v-bind:classObject="classObject" v-bind:rows="filteredRows"
          v-bind:savedColumns="savedColumns" v-on:update:columnOrder="columnOrder = $event" v-on:update:savedColumns="savedColumns = $event"></vue-advanced-table-buttons>
      </div>
      <div class="vue-advanced-table-search" v-if="searchable !== false">
        <slot name="table-search">
          <input class="vue-advanced-table-search-input" v-model="search" placeholder="Search" v-bind:class="classObject.search" />
        </slot>
      </div>
    </div>
    <div class="vue-advanced-table-wrapper" ref="wrapper">
      <table cellpadding="0" cellspacing="0" border="0" v-bind:class="classObject.table" ref="table" class="vue-advanced-table" v-bind:style="tableWidth">
        <tbody v-bind:class="classObject.body" ref="tbody">
          <vue-advanced-table-row v-for="row in filteredRows" v-bind:row="row" v-bind:key="row[primaryKey]" v-bind:class="{ active: selectedRows.indexOf(row[primaryKey]) > -1 }" v-bind:process-row="processRow">
            <vue-advanced-table-cell v-for="column in filteredColumnOrder" v-bind:key="column" v-bind:column="getColumnByName(column)" v-bind:row="row" v-bind:class="classObject.cell" v-bind:style="getFixedStyle(column, 'cell')">
              <slot v-bind:name="'column-' + column" v-bind:row="row" v-bind:primary-key="primaryKey"></slot>
            </vue-advanced-table-cell>
          </vue-advanced-table-row>
        </tbody>
        <tfoot class="vue-advanced-table-footer" v-bind:class="classObject.footer" v-if="footerVisible" ref="tfoot">
          <tr>
            <vue-advanced-table-column-footer v-for="column in filteredColumnOrder" v-bind:classObject="classObject" v-bind:key="column" v-bind:column="column" v-bind:columns="columns" v-bind:rows="filteredRows" v-bind:style="getFixedStyle(column, 'footer')">
              <slot v-bind:name="'footer-' + column" v-bind:table="filteredRows" v-bind:primary-key="primaryKey"></slot>
            </vue-advanced-table-column-footer>
          </tr>
        </tfoot>
        <thead class="vue-advanced-table-header" v-bind:class="classObject.header">
          <tr>
            <vue-advanced-table-column-header v-for="column in filteredColumnOrder" v-bind:classObject="classObject" v-bind:key="column" v-bind:column="column" v-bind="$props" v-bind:hiddenColumns="hiddenColumns" v-bind:columnName="column" v-bind:style="getFixedStyle(column, 'header')" />
          </tr>
        </thead>
      </table>
    </div>
   </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
window.Vue = Vue;
import nodeRenderer from './renderNode'
import vueAdvancedTableColumnHeader from './vue-advanced-table-column-header.vue'
import vueAdvancedTableRow from './vue-advanced-table-row.vue'
import vueAdvancedTableCell from './vue-advanced-table-cell.vue'
import vueAdvancedTableButtons from './vue-advanced-table-buttons.vue'
import vueAdvancedTableColumnFooter from './vue-advanced-table-column-footer.vue'

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
    storage: {
      type: String,
      default: ''
    },
    processRow: {
      type: Function,
      default: function() {
        return function() {};
      }
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
      savedColumns: [],
      search: ''
    }
  },
  components: {
    vueAdvancedTableColumnHeader,
    vueAdvancedTableRow,
    vueAdvancedTableCell,
    vueAdvancedTableButtons,
    vueAdvancedTableColumnFooter
  },
  mounted: function() {
    const self = this;
    var storedData;

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
      if (Array.isArray(storedData.savedColumns)){
        self.savedColumns = storedData.savedColumns;
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
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      let column = self.columns.find(function(column) {
        return column.name === name;
      });

      if (typeof column === 'undefined') {
        return {
          name: name,
          label: name
        }
      } else {
        return column;
      }
    },
    setColumnOrder: function(order) {
      const self = this;

      if (Array.isArray(order)){
        let columnOrder = [];
        const currColumns = self.columns.map(function(column) {
          return column.name;
        });
        for (let i = 0; i < order.length; i++){
          if (currColumns.indexOf(order[i]) > -1){
            columnOrder.push(order[i]);
          }
        }
        for (let i = 0; i < currColumns.length; i++){
          if (columnOrder.indexOf(currColumns[i]) == -1){
            columnOrder.splice(i, 0, currColumns[i]);
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
        hiddenColumns: self.hiddenColumns,
        savedColumns: self.savedColumns
      };

      if (param === 'columnOrder'){
        payload.columnOrder = self.columnOrder;
      }
      if (param === 'hiddenColumns'){
        payload.hiddenColumns = self.hiddenColumns;
      }
      if (param === 'savedColumns'){
        payload.savedColumns = self.savedColumns;
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
    getVNodeText: function(node, column){
      const self = this;
      if (typeof node[0].componentOptions !== 'undefined' && node[0].componentOptions.tag === 'router-link'){
        return node[0].componentOptions.children[0].text;
      }

      const DetailConstructor = Vue.extend(nodeRenderer);
      const detailRenderer = new DetailConstructor({
          propsData: {
              node: node[0]
          }
      });
      detailRenderer.$mount();
      const element = detailRenderer.$el;
      if (element.tagName === 'SELECT'){
        return element.options[element.selectedIndex].text;
      }
      return element.value || element.innerText || element.textContent;                          
    },
    getDisplayValue: function(data, column, row) {
      const self = this;
      const scopedSlots = self.$scopedSlots;
      const slot = scopedSlots['column-' + column.name];
      let sortData = data;

      if (sortData.toString().length === 0){
        return '';
      }

      if (typeof slot === 'function'){
        sortData = self.getVNodeText(slot({
          row: row
        }), column);
      }
      if (typeof column.render === 'function'){
        return column.render(sortData);
      }
      if (typeof column.format === 'string'){
        if (column.format === 'date'){
          let newDate = new Date(sortData);
          let date = (("0" + (newDate.getMonth() + 1)).slice(-2)) + '/' + ("0" + (newDate.getDate())).slice(-2) + '/' + newDate.getFullYear();
          return date;
        } else if (column.format === 'dollar'){
          return Number(sortData.toString().replace(/[^0-9.-]+/g,""));
        }
      } else if (!isNaN(+sortData) && sortData.toString().length > 0){
        return Number(sortData);
      }
      return sortData;
    },
    getFixedStyle: function(column, target){
      const self = this;
      if (self.fixedColumn === column){
        if (target === 'header' || target === 'footer'){
          return {
            position: 'sticky',
            left: 0,
            backgroundColor: 'inherit',
            zIndex: 1
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
    savedColumns: function() {
      const self = this;
      console.log(self.savedColumns);
      if (self.storage.length > 0){
        self.storeTableInfo('savedColumns');
      }
    }
  },
  computed: {
    tableData: function() {
      const self = this;
      const rows = self.rowDisplayValuesFilteredColumns;
      const data = [];

      var columnHeaders = self.filteredColumnOrder.map(function(column){
        return self.getColumnByName(column).label;
      })

      for (let i = 0; i < rows.length; i++){
        let values = Object.values(rows[i]);
        data.push(values);
      }

      if (typeof self.$refs.tfoot !== 'undefined'){
        var footerRow = self.$refs.tfoot.getElementsByTagName('tr');
        var footerData = [];
        for (let i = 0; i < footerRow.length; i++){
          let rowData = [];
          const row = footerRow[i];
          const cells = row.getElementsByTagName('th');
          for (let r = 0; r < cells.length; r++){
            const cell = cells[r];
            rowData.push(cell.textContent.trim());
          }
          footerData = rowData;
        }

        return [[...columnHeaders], ...data, [...footerData]];
      } else {
        return [[...columnHeaders], ...data];
      }
    },
    rowDisplayValues: function() {
      const self = this;
      const render = {};
      const rows = self.rows;
      let keyExists = true;

      for (let i = 0; i < rows.length; i++){
        if (keyExists && typeof rows[i][self.primaryKey] === 'undefined') {
          // eslint-disable-next-line
          console.error(`[Vue warn]: Column associated with designated primary key ${self.primaryKey} does not exist.`, self);
          keyExists = false;
        }
        
        let displayRow = {};
        let columns = Object.keys(rows[i]);
        for (let r = 0; r < columns.length; r++){
          let column = self.getColumnByName(columns[r]);
          let displayCell = rows[i][column.name];
          displayRow[column.name] = self.getDisplayValue(displayCell, column, rows[i]);
        }
        render[rows[i][self.primaryKey]] = displayRow;
      };
      return render;
    },
    rowDisplayValuesFilteredColumns: function() {
      const self = this;
      const columns = self.filteredColumnOrder;
      let rows = self.rowDisplayValues;
      let response = [];

      for (let i = 0; i < Object.keys(rows).length; i++) {
        let row = {};
        let key = Object.keys(rows)[i];
        for (let j = 0; j < columns.length; j++) {
          if (typeof rows[key][columns[j]] === 'string') {
            row[columns[j]] = rows[key][columns[j]].trim();
          } else {
            row[columns[j]] = rows[key][columns[j]];
          }
        }
    
        response.push(row);
      }

      return response;
    },
    rowsAsObjects: function() {
      const self = this;
      const rowsAsObjects = {};

      const rows = self.rows;
      for (let i = 0; i < rows.length; i++){
        let rowObject = {};
        let columns = Object.keys(rows[i]);
        for (let r = 0; r < columns.length; r++){
          let column = self.getColumnByName(columns[r]);
          let data = rows[i][column.name];
          rowObject[column.name] = data;
        }
        rowsAsObjects[rows[i][self.primaryKey]] = rowObject;
      };
      return rowsAsObjects;
    },
    rowOrderWithDirection: function() {
      const self = this;
      if (self.order.direction == 'desc') {
        return self.rowOrder;
      }
      return self.rowOrder.slice().reverse();
    },
    rowOrder: function() {
      const self = this;
      const order = [];
      const rows = self.rows;
      const rowDisplayValues = self.rowDisplayValues;
      const keys = Object.keys(rowDisplayValues);
      const len = keys.length;
      const indices = new Array(len);
      for (var i = 0; i < len; i++){
        indices[i] = keys[i];
      }

      if (typeof self.order !== 'undefined' && self.order.column.length > 0){
        indices.sort(function(a, b) {
          const column = self.getColumnByName(self.order.column);
          let dataA = rowDisplayValues[a][self.order.column];
          let dataB = rowDisplayValues[b][self.order.column];
          if (dataA === dataB){
            return 0;
          }
          //if (self.order.direction == 'desc') {
            if (column.format === 'date'){
              if (isNaN(Date.parse(dataA))){
                return 1;
              }
              if (isNaN(Date.parse(dataB))){
                return -1;
              }
              dataA = new Date(dataA);
              dataB = new Date(dataB); 
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
          /*} else {
            if (column.format === 'date'){
              if (isNaN(Date.parse(dataA))){
                return 1;
              }
              if (isNaN(Date.parse(dataB))){
                return -1;
              }
              dataA = new Date(dataA);
              dataB = new Date(dataB); 
            }
            if (dataA === ''){
              return 1;
            }
            if (dataB === ''){
              return -1;
            }

            if (dataA < dataB){
              return 1;
            }
            if (dataA > dataB){
              return -1;
            }
            return 0;
          }*/
        });
      }
      return indices;
    },
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
      const rows = self.reorderedRows;
      if (self.search.toString().length > 0) {
        const rowDisplayValues = self.rowDisplayValues;
        const response = rows.filter(function(row){
          const rowForDisplay = rowDisplayValues[row[self.primaryKey]];
          const found = Object.values(rowForDisplay).some(function(data){

            return data.toString().toLowerCase().includes(self.search.toString().toLowerCase());
          });
          return found;
        });
        return response;
      }

      return rows;
    },
    reorderedRows: function(){
      const self = this;
      const rows = self.rowsAsObjects;
      const rowDisplayValues = self.rowDisplayValues;
      const order = self.rowOrderWithDirection;
      const reorderedRows = [];
      for (let i = 0; i < order.length; i++){
        reorderedRows.push(rows[order[i]]);
      }
      return reorderedRows;
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
        footer: '',
        footerCell: ''
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
    },
    tableWidth: function() {
      const self = this;
      if (typeof self.fixedColumn === 'undefined'){
        return {
          width: '100%',
          maxWidth: '100%'
        }
      } else {
        return {
          maxWidth: 'fit-content',
          width: 'fit-content'
        }
      }
    },
    footerVisible: function() {
      const self = this;
      var keys = Object.keys(self.$scopedSlots);
      for (let i = 0; i < keys.length; i++){
        if (keys[i].indexOf('footer-') === 0){
          return true;
        }
      }
      return false;
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
    min-height: 0px;
    z-index: 1;
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
    overflow-y: auto;
    position: relative;
  }

  .vue-advanced-table-header-scroll {
    overflow: hidden;
    flex-shrink: 0;
    width: 100%;
    position: relative;
  }

  .vue-advanced-table-header {
  }

  .vue-advanced-table-column-footer {
    background-color: #fff;
    border-top: 0px;
  }

  .vue-advanced-table-column-header {
    background-color: #fff;
    border-top: 0px;
  }
</style>
