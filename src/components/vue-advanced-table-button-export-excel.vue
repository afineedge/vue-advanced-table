
<template>
	<div>
		<download-excel
			v-bind:data="changedRows">
			<button v-on:click="test(rows)">
				Export Excel
			</button>

	</download-excel>
	</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'

import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)

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
      required: false
    },
    hiddenColumns: {
      type: Array,
      required: false
    }
  },
  components: {
  },
  data: function() {
    return {
    	changedRows: []
    }
  },
  	computed: {
		sortedEmployeeList: function() {

  		var self = this;
    	//console.log("TEST rows", self.$props.rows);
    	console.log("TEST rows before", self.rows);
    	var rowsInOrder = [];
    	var emptyStruct = {};
    	var resultStruct = {};

    	for (let i = 0; i < self.columnOrder.length; i++) {
    		emptyStruct[self.columnOrder[i]] = '';
    	}


    	for (let j = 0; j < self.rows.length; j++) {
    		var tempStruct = JSON.parse(JSON.stringify(emptyStruct));
    		for (let i = 0; i < self.columnOrder.length; i++) {
    			tempStruct[self.columnOrder[i]] = self.rows[j][self.columnOrder[i]];
    		}
			var resultStruct  = JSON.parse(JSON.stringify(tempStruct));
    		rowsInOrder.push(resultStruct);
    	}
    	self.changedRows = rowsInOrder;
		}
	}

  methods: {

    test: function(data) {
   //  	var self = this;
   //  	//console.log("TEST rows", self.$props.rows);
   //  	console.log("TEST rows before", self.rows);
   //  	var rowsInOrder = [];
   //  	var emptyStruct = {};
   //  	var resultStruct = {};

   //  	for (let i = 0; i < self.columnOrder.length; i++) {
   //  		emptyStruct[self.columnOrder[i]] = '';
   //  	}


   //  	for (let j = 0; j < self.rows.length; j++) {
   //  		var tempStruct = JSON.parse(JSON.stringify(emptyStruct));
   //  		for (let i = 0; i < self.columnOrder.length; i++) {
   //  			tempStruct[self.columnOrder[i]] = self.rows[j][self.columnOrder[i]];
   //  		}
			// var resultStruct  = JSON.parse(JSON.stringify(tempStruct));
   //  		rowsInOrder.push(resultStruct);
   //  	}
   console.log(data)
    }
  },

  watch: {
  }
}


</script>

