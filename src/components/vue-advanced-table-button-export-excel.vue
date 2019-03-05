
<template>
	<div>
		<download-excel
			v-bind:data="rows">
			<button v-on:click="test(rows)">
				Export Excel
			</button>

	</download-excel>
<!-- 		<download-csv
			:data   = "json_data">
			Download Data
			<img src="download_icon.png">
			<div>
		</download-csv> -->
	</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'

import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)

export default {
  name: 'vue-advanced-table-button-column-settings',
  props: {
    rows: {
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
    }
  },
  methods: {
    test: function(data) {

    	console.log("in test this", this);
    	console.log("in test data", data);
    }
  },
  mounted: function() {
  },
  watch: {
  }
}


</script>

