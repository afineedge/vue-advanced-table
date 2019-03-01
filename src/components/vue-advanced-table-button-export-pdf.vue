
<template>
  <div>

   <button @click="$refs.myPdfComponent.print()">print</button>
    <pdf ref="myPdfComponent" src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"></pdf>
<!-- 			<pdf src="rows">
				<button v-on:click="test(rows)">


					Export PDF
				</button>
			</pdf> -->

<!-- 			<button v-on:click="test(rows)">
				<pdf src="rows">
				</pdf>
				Export PDF
			</button> -->

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
import pdf from 'vue-pdf'

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
  	pdf
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

