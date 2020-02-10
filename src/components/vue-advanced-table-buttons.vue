<template>
  <div v-bind:class="classObject.buttonContainer">
    <template v-for="(button, index) in buttons">
      <vue-advanced-table-button-column-settings v-if="isColumnSettingsButton(button)" v-bind:key="index" v-bind="$props" v-bind:classes="getButtonClass(button)" v-bind:button="button" v-bind:canSave="hasSaveFeature" v-on:update:columnOrder="$emit('update:columnOrder', $event)" v-on:update:savedColumns="$emit('update:savedColumns', $event)">
        <template v-if="button.label">{{ button.label }}</template>
      </vue-advanced-table-button-column-settings>
      <vue-advanced-table-button-saved-column-settings v-else-if="isSavedColumnSettingsButton(button)" v-bind:key="index" v-bind="$props" v-bind:classes="getButtonClass(button)" v-bind:button="button" v-on:update:columnOrder="$emit('update:columnOrder', $event)" v-on:update:savedColumns="$emit('update:savedColumns', $event)">
        <template v-if="button.label">{{ button.label }}</template>
      </vue-advanced-table-button-saved-column-settings>
      <vue-advanced-table-button-export-csv v-else-if="isCsvExportButton(button)" v-bind:key="index" v-bind="$props" v-bind:button="button" v-bind:class="getButtonClass(button)">
        <template v-if="button.label">{{ button.label }}</template>
      </vue-advanced-table-button-export-csv>

      <button type="button" v-on:click="button.action($parent.$parent)" v-bind:key="index" v-bind:class="getButtonClass(button)" v-else>
        {{ button.label }}
      </button>
    </template>
  </div>
</template>

<script>
import vueAdvancedTableButtonColumnSettings from './vue-advanced-table-button-column-settings.vue'
import vueAdvancedTableButtonSavedColumnSettings from './vue-advanced-table-button-saved-column-settings.vue'
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
    filteredColumnOrder: {
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
    },
    storage: {
      type: String,
      required: true
    },
    savedColumns: {
        type: Array,
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
    vueAdvancedTableButtonSavedColumnSettings,
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
    isSavedColumnSettingsButton: function(button) {
      return button === 'savedColumns' || button.extend === 'savedColumns';
    },
    isCsvExportButton: function(button) {
      if (typeof button === 'string') {
        return button.toLowerCase() === 'exportcsv'; 
      }
      
      if (typeof button.extend === 'string') {
        return button.extend.toLowerCase() === 'exportcsv'; 
      }

      return false;
    },
  },
  computed: {
    hasSaveFeature: function() {
      const self = this;
      let hasSaveButton = self.buttons.includes('savedColumns');

      if (hasSaveButton === true) {
        return true;
      } else {
        let found = self.buttons.some(button => button.extend === 'savedColumns');

        if (found === true) {
          return true;
        }
      }

      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
