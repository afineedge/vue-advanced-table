import vueAdvancedTableOverlay from './vue-advanced-table-overlay.js';
import draggable from 'vuedraggable'

export default {
  name: 'vue-advanced-table-button-column-settings',
  template: `
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
  `,
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