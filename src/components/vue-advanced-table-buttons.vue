<template>
  <div>
    <template v-for="(button, index) in buttons">
      {{button}}
      <vue-advanced-table-button-column-settings v-if="button === 'columnVisibility'" v-bind:key="index" v-bind="$props" v-on:update:columnOrder="$emit('update:columnOrder', $event)"></vue-advanced-table-button-column-settings>
       <vue-advanced-table-button-export-csv v-else-if="button === 'exportCSV'" v-bind:key="index" v-bind="$props"></vue-advanced-table-button-export-csv>
       <vue-advanced-table-button-export-excel v-else-if="button === 'exportExcel'" v-bind:key="index" v-bind="$props"></vue-advanced-table-button-export-excel>
       <vue-advanced-table-button-export-pdf v-else-if="button === 'exportPdf'" v-bind:key="index" v-bind="$props"></vue-advanced-table-button-export-pdf>
      <button type="button" v-on:click="button.action" v-bind:key="index" v-else-if="button.action">
        {{ button.label }}
      </button>
    </template>
  </div>
</template>

<script>
import vueAdvancedTableButtonColumnSettings from './vue-advanced-table-button-column-settings.vue'
import vueAdvancedTableButtonExportCsv from './vue-advanced-table-button-export-csv.vue'
import vueAdvancedTableButtonExportExcel from './vue-advanced-table-button-export-excel.vue'
import vueAdvancedTableButtonExportPdf from './vue-advanced-table-button-export-pdf.vue'

export default {
  name: 'vue-advanced-table-buttons',
  props: {
    buttons: {
      type: Array,
      required: false
    },
    columns: {
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
    },
    rows: {
      type: Array,
      required: false
    }
  },
  data: function() {
    return {
      columnVisibility: {
        active: false
      }
    }
  },
  components: {
    vueAdvancedTableButtonColumnSettings,
    vueAdvancedTableButtonExportCsv,
    vueAdvancedTableButtonExportExcel,
    vueAdvancedTableButtonExportPdf
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
