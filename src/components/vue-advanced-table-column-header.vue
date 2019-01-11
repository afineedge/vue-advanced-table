<template>
    <th v-on:click="handleClick">
      <div>
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
    orderable: {
      type: Boolean,
      default: true
    }
  },
  mounted: function() {
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
      const order = self.$parent.order;
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
</style>
