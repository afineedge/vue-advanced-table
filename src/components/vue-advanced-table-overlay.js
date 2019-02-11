export default {
  name: 'vue-advanced-table-overlay',
  template: `
    <div class="vue-advanced-table-overlay" v-on:click.self="$parent.toggleOverlay" v-bind="$props">
      <div class="vue-advanced-table-overlay-content">
        <slot>
        </slot>
      </div>
    </div>
  `,
  props: {
  },
  components: {
  },
  data: function() {
    return {
    }
  },
  mounted: function() {
  },
  methods: {
  },
  computed: {
  }
}