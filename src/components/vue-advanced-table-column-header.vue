<template>
    <td class="vue-advanced-table-column-header" v-on:click="handleClick" v-if="isColumnVisible(column)" v-bind:style="{ width: width + 'px' }">
      <span class="vue-advanced-table-column-header-content-placeholder">{{ getColumnByName(column).label }}</span>
      <div class="vue-advanced-table-column-header-content">
        {{ getColumnByName(column).label }}
        <template v-if="canColumnBeOrdered">
          <span v-bind:style="{ color: ordered && direction === 'desc' ? 'initial' : '#ccc' }">
            &#x25B2;
          </span>
          <span v-bind:style="{ color: ordered && direction === 'asc' ? 'initial' : '#ccc' }">
            &#x25BC;
          </span>
        </template>
      </div>
    </td>
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
      width: 200
    }
  },
  mounted: function() {
    const self = this;
    setInterval(function(){
      self.getColumnWidth();
    }, 1)
  },
  methods: {
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    },
    getColumnWidth: function(){
      const self = this;
      var el = self.$parent.$el.querySelector('[columnName="' + self.column + '"]');
      if (el !== null){
        if (el.nextElementSibling === null){
          self.width = el.offsetWidth;
        } else {
          self.width = el.offsetWidth;
        }
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
    position: absolute;
    top: 0;
  }

  .vue-advanced-table-column-header-content-placeholder {
    opacity: 0;
  }
</style>
