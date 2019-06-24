<template>
  <th class="vue-advanced-table-column-footer" v-bind:class="classObject.footerCell">
    <div class="vue-advanced-table-column-footer-content">
      <slot></slot>
    </div>
  </th>
</template>

<script>
export default {
  name: 'vue-advanced-table-column-footer',
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
    classObject: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-column-footer {
    position: sticky;
    bottom: 0;
    background-color: inherit;
  }
  .vue-advanced-table-column-footer-content {
    display: flex;
    align-items: space-between;
    width: 100%;
  }
</style>
