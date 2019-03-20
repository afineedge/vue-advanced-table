<template>
    <tr class="vue-advanced-table-row" v-if="visible">
      <slot>
      </slot>
    </tr>
</template>

<script>

export default {
  name: 'vue-advanced-table-row',
  data: function() {
    return {
      filterString: ''
    }
  },
  props: {
    row: {
     type: Object,
     required: false
    },
    search: {
     type: String,
     required: false
    }
  },
  components: {
  },
  mounted: function() {
    const self = this;
    self.updateFilterString();
  },
  methods: {
    updateFilterString: function() {
      const self = this;
      const el = self.$el;
      if (typeof el == 'object' && el.childNodes.length > 0){
        const cells = el.childNodes;
        let string = '';
        for (var cell of cells){
          if (string.length > 0){
            string = string + ', ';
          }
          string = string + cell.innerText;
        }
        self.filterString = string.toLowerCase();
      } else {
        self.filterString = '';
      }
    }
  },
  computed: {
    visible: function() {
      const self = this;
      return self.filterString.indexOf(self.search.toLowerCase()) > -1;
    }
  },
  watch: {
    row: function() {
      const self = this;
      Vue.nextTick(function(){
        self.updateFilterString();
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
