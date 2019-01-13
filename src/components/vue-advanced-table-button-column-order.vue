<template>
  <div>
    <button v-on:click="toggleOverlay" class="trigger">
      Column Order
    </button>
    <vue-advanced-table-overlay v-if="overlay.active === true">
      <div class="button-collection">
        <button v-for="column in columnOrder" v-bind:key="column" v-on:click="toggleColumnVisibility(column)" v-bind:class="{'inactive': !isColumnVisible(column)}">
          {{ getColumnByName(column).label }}
        </button>
      </div>
    </vue-advanced-table-overlay>
  </div>
</template>

<script>
import vueAdvancedTableOverlay from './vue-advanced-table-overlay.vue';

export default {
  name: 'vue-advanced-table-button-column-visibility',
  props: {
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
  components: {
    vueAdvancedTableOverlay
  },
  data: function() {
    return {
      overlay: {
        active: false
      }
    }
  },
  mounted: function() {
  },
  methods: {
    toggleOverlay: function() {
      const self = this;
      return self.overlay.active = !self.overlay.active;
    },
    getColumnByName: function(name) {
      const self = this;
      return self.columns.find(function(column) {
        return column.name === name;
      });
    },
    toggleColumnVisibility: function(column) {
      const self = this;
      if (self.isColumnVisible(column)){
        self.hiddenColumns.push(column);
      } else {
        self.$delete(self.hiddenColumns, self.hiddenColumns.indexOf(column));
      }
    },
    isColumnVisible: function(column) {
      const self = this;
      return self.hiddenColumns.indexOf(column) === -1
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-collection {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: #fff;
    padding: 4px 4px 0;
    display: flex;
    flex-direction: column;
  }

  .button-collection button {
    margin-bottom: 4px;
  }

  .button-collection button.inactive {
    opacity: .4;
  }
</style>
