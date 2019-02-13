<template>
  <th class="vue-advanced-table-column-header" v-on:click="handleClick" v-if="isColumnVisible(column)" v-bind:style="{ width: width + 'px' }">
    <!-- <span class="vue-advanced-table-column-header-content-placeholder">{{ getColumnByName(column).label }}</span> -->
    <div class="vue-advanced-table-column-header-content">
      <div class="vue-advanced-table-column-header-label">
        {{ getColumnByName(column).label }}
      </div>
      <div class="vue-advanced-table-column-header-direction" v-if="canColumnBeOrdered">
        <span v-bind:style="{ color: ordered && direction === 'desc' ? 'initial' : '#ccc' }">
          &#x25B2;
        </span>
        <span v-bind:style="{ color: ordered && direction === 'asc' ? 'initial' : '#ccc' }">
          &#x25BC;
        </span>
      </div>
    </div>
  </th>
</template>

<script>
export default {
  name: 'vue-advanced-table-column-header',
  props: {
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    column: {
      type: String,
      required: true
    },
    order: {
      type: Object
    },
    orderable: {
      type: Boolean,
      default: true
    },
    hiddenColumns: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      width: 80,
      targetCell: null
    }
  },
  mounted: function() {
    const self = this;
    const interval = 10;
    setInterval(function(){
      self.setColumnWidth();
    }, interval);
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    },
    setTargetCell: function() {
      const self = this;
      self.targetCell = self.$parent.$el.querySelector('[columnName="' + self.column + '"]');
    },
    setColumnWidth: function(){
      const self = this;
      const el = self.targetCell;
      if (el !== null){
        self.width = el.offsetWidth;
      } else {
        self.setTargetCell();
      }
    },
    handleClick: function() {
      const self = this;
      const order = self.order;
      if (self.canColumnBeOrdered){
        if (order.column === self.column){
          if (order.direction === 'desc') {
            order.direction = 'asc';
          } else {
            order.direction = 'desc';
          }
        } else {
          order.column = self.column;
        }
      }
    },
    isColumnVisible: function(column) {
      const self = this;
      return self.hiddenColumns.indexOf(column) === -1
    }
  },
  computed: {
    direction: function() {
      const self = this;
      return self.$parent.order.direction;
    },
    ordered: function() {
      const self = this;
      return self.$parent.order.column === self.column;
    },
    canColumnBeOrdered: function() {
      const self = this;
      return self.getColumnByName(self.column).orderable !== false && self.orderable !== false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-column-header {
    padding: 4px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }

  .vue-advanced-table-column-header-content {
    white-space: nowrap;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .vue-advanced-table-column-header-label {
    white-space: normal;
  }

  .vue-advanced-table-column-header-content-placeholder {
    opacity: 0;
  }

  .vue-advanced-table-column-header-direction {
    white-space: nowrap;
  }
</style>
