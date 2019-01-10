<template>
    <th v-on:click="handleClick">
      <div>
        {{ getColumnByName(column).label }}
        <template v-if="$parent.order.column === column && (getColumnByName(column).orderable !== false)">
          <span v-if="$parent.order.direction === 'desc'">
            &#x25B2;
          </span>
          <span v-else>
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
      const column = self.getColumnByName(self.column);
      if (typeof column.orderable !== false){
        if (order.column === self.column){
          if (order.direction === 'desc') {
            order.direction = 'asc'
          } else {
            order.direction = 'desc'
          }
        } else {
          order.column = self.column;
        }
      }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
