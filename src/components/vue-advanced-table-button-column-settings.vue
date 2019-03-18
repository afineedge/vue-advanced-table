<template>
  <button v-on:click.self="toggleOverlay" v-bind:class="classes">
    <slot>
      Column Settings
    </slot>
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
      </div>
    </vue-advanced-table-overlay>
  </button>
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
      localColumnOrder: []
    }
  },
  methods: {
    toggleOverlay: function() {
      const self = this;
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
</style>
