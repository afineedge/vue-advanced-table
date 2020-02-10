<template>
  <div>
    <button v-on:click.self="toggleOverlay" v-bind:class="classes">
      <slot>
        Column Settings
      </slot>
    </button>
    <vue-advanced-table-overlay v-if="overlay.active">
      <div class="vue-advanced-table-column-settings">
        <div class="vue-advanced-table-column-setting" v-for="(column, index) in columnOrder" v-bind:key="column">
          <div v-bind:class="{'inactive': !isColumnVisible(column)}">
            {{ getColumnByName(column).label }}
          </div>
          <div class="vue-advanced-table-column-setting-actions">
            <button v-on:click="changeColumnPosition(index, 'up')" title="Move up" v-bind:class="classes">
              &#8679;
            </button>
            <button v-on:click="changeColumnPosition(index, 'down')" title="Move down" v-bind:class="classes">
              &#8681;
            </button>
            <button v-on:click="toggleColumnVisibility(column)" v-bind:class="['inactive' ? !isColumnVisible(column) : '', classes]">
              Toggle
            </button>
          </div>
        </div>
        <button class="vue-advanced-table-save-column-settings" v-bind:class="classes" v-if="canSave" v-on:click="toggleOverlay(); saveSetting.active = true">Save Column Settings</button>
      </div>
    </vue-advanced-table-overlay>
    <vue-advanced-table-overlay v-if="saveSetting.active">
      <div class="vue-advanced-table-column-settings">
        <div class="vue-advanced-table-column-setting">
          <span class="save-setting-text">Setting Name:</span>
            <input v-model="saveSetting.name" />
            <button class="vue-advanced-table-save-column-settings" v-on:click="saveColumnOrder(); toggleOverlay()">Save</button>
        </div>
      </div>
    </vue-advanced-table-overlay>
  </div>
</template>

<script>
import vueAdvancedTableOverlay from './vue-advanced-table-overlay.vue';

export default {
  name: 'vue-advanced-table-button-column-settings',
  props: {
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
    classes: {
      type: String,
      required: true
    },
    storage: {
      type: String,
      required: true
    },
    savedColumns: {
      type: Array,
      required: true
    },
    canSave: {
      type: Boolean,
      required: true
    }
  },
  components: {
    vueAdvancedTableOverlay
  },
  data: function() {
    return {
      overlay: {
        active: false
      },
      saveSetting: {
        active: false,
        name: ''
      },
      localColumnOrder: [],
      savedColumnOrders: []
    }
  },
  methods: {
    toggleOverlay: function() {
      const self = this;
      if (!self.overlay.active === true) {
        self.saveSetting.active = false;
      }
      return self.overlay.active = !self.overlay.active;
    },
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    },
    toggleColumnVisibility: function(column) {
      const self = this;
      if (self.isColumnVisible(column)){
        self.hiddenColumns.push(column);
      } else {
        self.$delete(self.hiddenColumns, self.hiddenColumns.indexOf(column));
      }
    },
    isColumnVisible: function(column) {
      const self = this;
      return self.hiddenColumns.indexOf(column) === -1
    },
    changeColumnPosition: function(index, direction) {
      const self = this;
      var order = [...self.localColumnOrder];
      if (direction === 'up' && index !== 0){
        order.splice(index - 1, 0, order.splice(index, 1)[0]);
      } else if (index !== order.length - 1){
        order.splice(index + 1, 0, order.splice(index, 1)[0]);
      }
      self.localColumnOrder = order;
    },
    saveColumnOrder: function() {
      const self = this;


      self.savedColumnOrders.push({
        name: self.saveSetting.name,
        columnOrder: self.columnOrder
      });

      self.saveSetting.name = '';
      self.saveSetting.active = false;
    }
  },
  mounted: function() {
    const self = this;
    if (self.storage.length === 0){
      // eslint-disable-next-line
      console.error('[Vue warn]: "columnVisibility" button is active, but "storage" prop is not being passed to vue-advanced-table. Changes to column settings will not be saved.', self);
    }
  },
  watch: {
    columnOrder: function() {
      const self = this;
      if (JSON.stringify(self.localColumnOrder) !== JSON.stringify(self.columnOrder)){
        self.localColumnOrder = self.columnOrder;
      }
    },
    localColumnOrder: function() {
      const self = this;
      if (JSON.stringify(self.localColumnOrder) !== JSON.stringify(self.columnOrder)){
        self.$emit('update:columnOrder', self.localColumnOrder);
      }
    },
    savedColumns: function() {
      const self = this;
      if (JSON.stringify(self.savedColumnOrders) !== JSON.stringify(self.savedColumns)){
        self.savedColumnOrders = self.savedColumns;
      }
    },
    savedColumnOrders: function() {
      const self = this;
      if (JSON.stringify(self.savedColumnOrders) !== JSON.stringify(self.savedColumns)){
      self.$emit('update:savedColumns', self.savedColumnOrders);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-column-settings {
    background-color: #fff;
    padding: 4px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    white-space: normal;
    text-align: left;
    cursor: initial;
    color: #000;
  }

  .vue-advanced-table-column-setting {
    padding: 4px;
    border: 1px solid #ccc;
    border-bottom: 0px;
    display: flex;
    align-items: center;
  }

  .vue-advanced-table-column-setting .inactive {
    opacity: .4;
  }

  .vue-advanced-table-column-setting button {
    margin-left: 4px !important;
    cursor: pointer;
  }

  .vue-advanced-table-column-setting:last-of-type {
    border-bottom: 1px solid #ccc;
  }

  .vue-advanced-table-column-setting > div:first-of-type {
    flex-grow: 1;
    padding: 0 8px;
  }

  .vue-advanced-table-column-setting-actions {
    white-space: nowrap;
  }

  .vue-advanced-table-save-column-settings button {
    padding: 4px;
    border: 1px solid #ccc;
    display: flex;
    text-align: center;
    margin: 4px;
    cursor: pointer;
  }

  .save-setting-text {
    margin-right: 4px;
  }
</style>
