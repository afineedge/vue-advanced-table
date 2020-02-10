<template>
    <button v-on:click.self="toggleOverlay" v-bind:style="{'z-index': zIndex}">
        <slot>
            Saved Column Settings
        </slot>
        <vue-advanced-table-overlay v-if="overlay.active">
            <div class="vue-advanced-table-saved-column-settings">
                <div class="vue-advanced-table-saved-column-setting" v-if="savedColumns.length === 0">
                    You have no saved column settings.
                </div>
                <div class="vue-advanced-table-saved-column-setting" v-for="(column, index) in savedColumns" v-bind:key="index" v-else>
                    <div>{{ column.name }}</div>
                    <div class="vue-advanced-table-saved-column-setting-actions">
                        <button v-on:click="deleteSavedColumnSetting(column)">
                            Delete
                        </button>
                        <button v-on:click="localColumnOrder = column.columnOrder">
                            Load
                        </button>
                    </div>
                </div>
            </div>
        </vue-advanced-table-overlay>
    </button>
</template>

<script>
import vueAdvancedTableOverlay from './vue-advanced-table-overlay.vue';

export default {
    name: 'vue-advanced-table-button-saved-column-settings',
    props: {
        columnOrder: {
            type: Array,
            required: true
        },
        storage: {
            type: String,
            required: true
        },
        savedColumns: {
            type: Array,
            required: true
        }
    },
    components: {
        vueAdvancedTableOverlay
    },
    data:  function() {
        return {
            overlay: {
                active: false
            },
            localColumnOrder: [],
            localColumns: []
        }
    },
    computed: {
        zIndex: function() {
            var self = this;
            if (self.overlay.active){
                return 2;
            }
            return false;
        }
    },
    methods: {
        toggleOverlay: function() {
        const self = this;
        return self.overlay.active = !self.overlay.active;
        },
        deleteSavedColumnSetting: function(column) {
            const self = this;
            let index = self.savedColumns.map((i) => i.name).indexOf(column.name);
            
            self.localColumns.splice(index, 1);
        }
    },
    watch: {
        columnOrder: function() {
            const self = this;
            if (JSON.stringify(self.localColumnOrder) !== JSON.stringify(self.columnOrder)){
                self.localColumnOrder = self.columnOrder;
            }
        },
        localColumnOrder: function() {
            const self = this;
            if (JSON.stringify(self.localColumnOrder) !== JSON.stringify(self.columnOrder)){
                self.$emit('update:columnOrder', self.localColumnOrder);
            }
        },
        savedColumns: function() {
            const self = this;
            if (JSON.stringify(self.localColumns) !== JSON.stringify(self.savedColumns)){
                self.localColumns = self.savedColumns;
            }
        },
        localColumns: function() {
            const self = this;
            if (JSON.stringify(self.localColumns) !== JSON.stringify(self.savedColumns)){
                self.$emit('update:savedColumns', self.localColumns);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-advanced-table-saved-column-settings {
    background-color: #fff;
    padding: 4px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    white-space: normal;
    text-align: left;
    cursor: initial;
    color: #000;
  }

  .vue-advanced-table-saved-column-setting {
    padding: 4px;
    border: 1px solid #ccc;
    border-bottom: 0px;
    display: flex;
    align-items: center;
  }

  .vue-advanced-table-saved-column-setting button {
    margin-left: 4px !important;
    cursor: pointer;
  }

  .vue-advanced-table-saved-column-setting:last-of-type {
    border-bottom: 1px solid #ccc;
  }

  .vue-advanced-table-saved-column-setting > div:first-of-type {
    flex-grow: 1;
    padding: 0 8px;
  }

  .vue-advanced-table-saved-column-setting-actions {
    white-space: nowrap;
  }
</style>