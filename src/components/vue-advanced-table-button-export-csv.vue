
<template>
	<button v-on:click="createExcel()">
		<slot>
      Export CSV
    </slot>
	</button>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

export default {
  name: 'vue-advanced-table-button-export-csv',
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

    	/*var columnOrderNoDeleted = JSON.parse(JSON.stringify(self.columnOrder));
    	var rowsInOrder = [];
    	var emptyStruct = {};
    	var resultStruct = {};
    	var arrayOfArrays = [];

    	for (let i = 0; i < columnOrderNoDeleted.length; i++) {
    		emptyStruct[columnOrderNoDeleted [i]] = '';
    	}

    	for (let j = 0; j < self.rows.length; j++) {
    		var tempStruct = JSON.parse(JSON.stringify(emptyStruct));
    		for (let i = 0; i < columnOrderNoDeleted.length; i++) {
    			tempStruct[columnOrderNoDeleted[i]] = self.rows[j][self.columnOrder[i]];
    		}
			var resultStruct  = JSON.parse(JSON.stringify(tempStruct));
    		rowsInOrder.push(resultStruct);
    	}

    	  for (let i=0; i < rowsInOrder.length; i++) {
    		var entry = Object.values(rowsInOrder[i]);
    		arrayOfArrays.push(entry);
    	}
    	arrayOfArrays.unshift(Object.keys(rowsInOrder[1]));

    	return arrayOfArrays;*/
		}
	},

  methods: {

    createExcel: function() {
      const self = this;

      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017,12,19)
      };

      wb.SheetNames.push("Test Sheet");
      var ws_data = self.tableRows;
      var ws = XLSX.utils.aoa_to_sheet(ws_data);
      wb.Sheets["Test Sheet"] = ws;
      var wbout = XLSX.write(wb, {bookType:'csv',  type: 'binary'});
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i<s.length; i++){
          view[i] = s.charCodeAt(i) & 0xFF
        };
        return buf;
      }

      saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.csv');
    }
  }

}
</script>

