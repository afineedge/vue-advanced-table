import vueAdvancedTableButtonColumnSettings from './vue-advanced-table-button-column-settings.js'

export default {
  name: 'vue-advanced-table-buttons',
  template: `
    <div>
      <template v-for="(button, index) in buttons">
        <vue-advanced-table-button-column-settings v-if="button === 'columnVisibility'" v-bind:key="index" v-bind="$props" v-on:update:columnOrder="$emit('update:columnOrder', $event)"></vue-advanced-table-button-column-settings>
        <button type="button" v-on:click="button.action" v-bind:key="index" v-else>
          {{ button.label }}
        </button>
      </template>
    </div>
  `,
  props: {
    buttons: {
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
    hiddenColumns: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      columnVisibility: {
        active: false
      }
    }
  },
  components: {
    vueAdvancedTableButtonColumnSettings
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
  }
}