
<template>
	<div id="justid">

				<button v-on:click="test(rows)">
					Export PDF
				</button>


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
// import jsPDF from 'jspdf'
// import 'jspdf-autotable';
import fs from 'fs';
import html2canvas from 'html2canvas';

export default {
  name: 'vue-advanced-table-button-column-settings',
  props: {
    rows: {
      type: Array,
      required: false
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
    test: function() {
    	var self = this;
    	console.log("Table", self.table);

      var pdfMake = require('pdfmake/build/pdfmake.js')
      if (pdfMake.vfs == undefined){
        var pdfFonts = require('pdfmake/build/vfs_fonts.js')
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
      }
            html2canvas($('#justid')[0], {

                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    // var width = $("#tblCustomers").width();
                    // var pageOrientation = 'landscape';
                    // width = width/2;
                    // var height = $("#tblCustomers").height();
                    // height = height/2;
                   // console.log("data", data);
                    var docDefinition = {
                    	pageOrientation: pageOrientation,
                        content: [{
                            image: data
                            // ,
                            // fit: [width,height]
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("Table.pdf");
                }
            });
  //     var docDefinition = {pageOrientation: 'landscape', content: [		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		// {
		// 	style: 'tableExample',
		// 	table: {
		// 		headerRows: 1,
		// 		body: [
		// 			[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'},{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'},{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 			['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
		// 		]
		// 	},
		// 	layout: {
		// 		hLineWidth: function (i, node) {
		// 			return (i === 0 || i === node.table.body.length) ? 2 : 1;
		// 		},
		// 		vLineWidth: function (i, node) {
		// 			return (i === 0 || i === node.table.widths.length) ? 2 : 1;
		// 		},
		// 		hLineColor: function (i, node) {
		// 			return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
		// 		},
		// 		vLineColor: function (i, node) {
		// 			return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
		// 		},
		// 	}

		// },] }
  //     pdfMake.createPdf(docDefinition).download('optionalName.pdf')
    }
   },
  mounted: function() {
  },
  computed: {
  	table: function() {
  		var self = this;
  		return self.$parent.$parent.$refs.table;
  	}
  },
  watch: {
  }
}


</script>

