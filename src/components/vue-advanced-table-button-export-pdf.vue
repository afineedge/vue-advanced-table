
<template>
	<div id="justid">

				<button v-on:click="test(rows)">
					Export PDF
				</button>
	</div>
</template>

<script>
/* eslint-disable */
// import jsPDF from 'jspdf'
// import 'jspdf-autotable';
import fs from 'fs';
import html2canvas from 'html2canvas';
// import pdfMake from 'pdfmake'

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
    	// var fs = = require('fs');
    	console.log("Table", self.table);

      var pdfMake = require('pdfmake/build/pdfmake.js')
      if (pdfMake.vfs == undefined){
        var pdfFonts = require('pdfmake/build/vfs_fonts.js')
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
      }
      html2canvas($('#tblCustomers')[0], {
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

