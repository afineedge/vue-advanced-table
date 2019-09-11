
<template>
    <button v-on:click="createExcel()">
        <slot>
            Export Excel
        </slot>
    </button>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

export default {
  name: 'vue-advanced-table-button-export-excel',
  props: {
    rows: {
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
    filteredColumnOrder: {
      type: Array,
      required: true
    },
    hiddenColumns: {
      type: Array,
      required: true
    },
    button: {
      type: [String, Object],
      required: true
    }
  },
  components: {
  },
  data: function() {
    return {
    }
  },
  computed: {
    tableRows: function() {
      var self = this;
      var table = self.rows.map(function(row) {
        var rowData = [];
        for (var i = 0; i < self.filteredColumnOrder.length; i++){
          var column = self.filteredColumnOrder[i];
          rowData.push(row[column]);
        }

        return rowData;
      })

      return [[...self.filteredColumnOrder], ...table];
    }
  },

  methods: {

    createExcel: function() {
     const self = this;

      if (typeof self.button.action === 'function'){
        self.button.action(); 
      }

      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: self.button.title || 'Worksheet',
        Subject: self.button.subject || '',
        Author: self.button.author || '',
        CreatedDate: new Date()
      };

      wb.SheetNames.push("Worksheet");
      var ws_data = self.tableRows;
      var ws = XLSX.utils.aoa_to_sheet(ws_data);
      wb.Sheets["Worksheet"] = ws;
      var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i<s.length; i++){
          view[i] = s.charCodeAt(i) & 0xFF
        };
        return buf;
      }

      saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), self.button.fileName ? self.button.fileName + '.xlsx' : 'test.xlsx');
    }
 }

}
</script>

