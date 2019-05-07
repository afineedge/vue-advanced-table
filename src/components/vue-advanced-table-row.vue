<template>
    <tr class="vue-advanced-table-row" v-bind:class="processRow(row)">
      <slot>
      </slot>
    </tr>
</template>

<script>

export default {
  name: 'vue-advanced-table-row',
  data: function() {
    return {
    }
  },
  props: {
    row: {
     type: Object,
     required: true
    },
    processRow: {
     type: Function
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-row {
    background-color: #ffffff;
  }
</style>
