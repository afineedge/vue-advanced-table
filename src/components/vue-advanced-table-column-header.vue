<template>
    <th v-on:click="handleClick">
      <div>
        {{ getColumnByName(column).label }}
        <template v-if="$parent.order.column === column">
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
    },
    orderable: {
      type: String
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
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
