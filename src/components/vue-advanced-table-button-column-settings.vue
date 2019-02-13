<template>
  <div>
    <button v-on:click="toggleOverlay" class="trigger">
      Column Settings
    </button>
    <vue-advanced-table-overlay v-if="overlay.active === true">
      <div class="button-collection">
        <draggable v-model="localColumnOrder">
          <div class="drag-handle" v-for="column in localColumnOrder" v-bind:key="column">
            <div>
              &#8691;
            </div>
            <div class="column">
              <button v-on:click="toggleColumnVisibility(column)" v-bind:class="{'inactive': !isColumnVisible(column)}">
                {{ getColumnByName(column).label }}
              </button>
            </div>
          </div>
        </draggable>
      </div>
      <div class="instructions">
        <div>To toggle a column's visibility, click its button above.</div>
        <div>Drag and drop the buttons to reorder the columns.</div>
      </div>
    </vue-advanced-table-overlay>
  </div>
</template>

<script>
import vueAdvancedTableOverlay from './vue-advanced-table-overlay.vue';
import draggable from 'vuedraggable'

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
    }
  },
  components: {
    draggable,
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
    updateColumnOrder: function() {
      const self = this;
      self.$parent.columnOrder = self.localColumnOrder;
    }
  },
  watch: {
    columnOrder: function() {
      const self = this;
      if (self.localColumnOrder !== self.columnOrder){
        self.localColumnOrder = self.columnOrder;
      }
    },
    localColumnOrder: function() {
      const self = this;
      if (self.localColumnOrder !== self.columnOrder){
        self.$emit('update:columnOrder', self.localColumnOrder);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-collection {
    background-color: #fff;
    padding: 4px;
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
  }

  .button-collection button {
    width: 100%;
  }

  .button-collection button.inactive {
    opacity: .4;
  }

  .drag-handle {
    padding: 4px;
    border: 1px solid #ccc;
    border-bottom: 0px;
    display: flex;
  }

  .drag-handle:last-of-type {
    border-bottom: 1px solid #ccc;
  }

  .drag-handle .column {
    flex-grow: 1;
    padding-left: 4px;
  }

  .instructions {
    color: #fff;
    text-align: center;
    margin: 20px auto 0;
    width: 200px;
    font-size: 14px;
  }
</style>
