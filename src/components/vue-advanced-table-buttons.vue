<template>
  <div v-bind:class="classObject.buttonContainer">
    <template v-for="(button, index) in buttons">
      <vue-advanced-table-button-column-settings v-if="isColumnSettingsButton(button)" v-bind:key="index" v-bind="$props" v-bind:classes="getButtonClass(button)" v-on:update:columnOrder="$emit('update:columnOrder', $event)"></vue-advanced-table-button-column-settings>
      <vue-advanced-table-button-export-excel v-else-if="isExcelExportButton(button)" v-bind:key="index" v-bind="$props" v-bind:classes="getButtonClass(button)"></vue-advanced-table-button-export-excel>
      <vue-advanced-table-button-export-csv v-else-if="isCsvExportButton(button)" v-bind:key="index" v-bind="$props" v-bind:classes="getButtonClass(button)"></vue-advanced-table-button-export-csv>

      <button type="button" v-on:click="button.action" v-bind:key="index" v-bind:class="getButtonClass(button)" v-else>
        {{ button.label }}
      </button>
    </template>
  </div>
</template>

<script>
import vueAdvancedTableButtonColumnSettings from './vue-advanced-table-button-column-settings.vue'
import vueAdvancedTableButtonExportExcel from './vue-advanced-table-button-export-excel.vue'
import vueAdvancedTableButtonExportCsv from './vue-advanced-table-button-export-csv.vue'

export default {
  name: 'vue-advanced-table-buttons',
  props: {
    buttons: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: false
    },
    columns: {
      type: Array,
      required: true
    },
    columnOrder: {
      type: Array,
      required: true
    },
    hiddenColumns: {
      type: Array,
      required: true
    },
    classObject: {
      type: Object,
      required: true
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
    vueAdvancedTableButtonExportExcel,
    vueAdvancedTableButtonExportCsv

  },
  mounted: function() {
  },
  methods: {
    getButtonClass: function(button) {
      var self = this;
      if (typeof button.class === 'string'){
        if (typeof self.classObject.buttons === 'string'){
          return self.classObject.buttons + ' ' + button.class;
        }

        return button.class;
      }

      return self.classObject.buttons;
    },
    isColumnSettingsButton: function(button) {
      return button === 'columnVisibility' || button.extend === 'columnVisibility';
    },
    isExcelExportButton: function(button) {
      return button === 'exportExcel' || button.extend === 'exportExcel';
    },
     isCsvExportButton: function(button) {
      return button === 'exportCsv' || button.extend === 'exportCsv';
    },
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
