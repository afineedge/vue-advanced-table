<template>
  <th class="vue-advanced-table-column-header" v-on:click="handleClick" v-bind:class="classObject.headerCell">
    <div class="vue-advanced-table-column-header-content">
      <div class="vue-advanced-table-column-header-label">
        {{ getColumnByName(column).label }}
      </div>
      <div class="vue-advanced-table-column-header-direction" v-if="canColumnBeOrdered">
        <span class="vue-advanced-table-order" v-bind:class="{ active: ordered && direction === 'desc' ? 'active' : '' }">
          &#x25B2;
        </span>
        <span class="vue-advanced-table-order" v-bind:class="{ active: ordered && direction === 'asc' ? 'active' : '' }">
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
    },
    classObject: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      width: 80,
      targetCell: null
    }
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
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
    flex-shrink: 0;
    position: sticky;
    top: 0;
    background-color: inherit;
  }

  .vue-advanced-table-column-header-content {
    white-space: nowrap;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
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

  .vue-advanced-table-order{
    color: #ccc;
  }

  .vue-advanced-table-order.active{
    color: #000;
  }
</style>
