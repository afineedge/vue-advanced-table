<template>
    <tr>
      <slot>
      </slot>
    </tr>
</template>

<script>

export default {
  name: 'vue-advanced-table-row',
  props: {
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    columnOrder: {
      type: Array,
      required: true
    },
    row: {
      type: [String, Object],
      required: true
    },
    primaryKey: {
      type: String,
      required: true
    }
  },
  components: {
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
