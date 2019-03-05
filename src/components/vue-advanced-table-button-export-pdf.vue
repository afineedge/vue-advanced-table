
<template>
	<div>

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

      var pdfMake = require('pdfmake/build/pdfmake.js')
      if (pdfMake.vfs == undefined){
        var pdfFonts = require('pdfmake/build/vfs_fonts.js')
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
      }
      var docDefinition = {pageOrientation: 'landscape', content: [		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'},{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'},{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3',,'Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},] }
      pdfMake.createPdf(docDefinition).download('optionalName.pdf')


	//let pdfName = 'test';
 // var head = [Object.keys(data[0])];
 // var body = [];
 // for (let i = 0; i < data.length; i++ ) {
 // 	body.push(Object.values(data[i]));
 // 		//console.log('Object.values(data[i]))', Object.values(data[i]));
 // }
 // console.log("body", body);
 // console.log("head", head);
  //  var doc = new jsPDF('l', 'pt');
   // doc.text('FIT', 10, 12);
  //  doc.autoTable({head: head, body: body,theme:'grid',columnStyles: { text: { columnWidth: 'auto' } }});
  //  doc.autoTable({html: '#table', startY: 100});
   // doc.save(pdfName + '.pdf');
    // console.log("in test this", this);
    // console.log("in test data", data);
    // console.log("keys", Object.keys(data[0]));
    }
  },
  mounted: function() {
  },
  watch: {
  }
}


</script>

