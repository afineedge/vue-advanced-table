<template>
	<div v-bind:class="classes.paginationContainer" class="vue-advanced-table-pagination">
		<pagination-button v-for="buttonPage in pages" v-bind:page="buttonPage" v-bind:classes="classes.paginationButtons" v-bind:key="buttonPage"></pagination-button>
	</div>
</template>

<script>
	export default {
		name: 'vue-advanced-table-pagination',
		props: {
			value: {
				type: Number,
				required: true
			},
			perPage: {
				type: Number,
				required: true
			},
			total: {
				type: Number,
				required: true
			},
			classes: {
				type: Object,
				required: false
			}
		},
		data: function() {
			return {
			}
		},
		components: {
			paginationButton: {
				template: `
					<button type="button" v-bind:class="buttonClass" v-on:click="goToPage(page)">
						{{ page }}
					</button>
				`,
				props: {
					page: {
						type: Number,
						required: true
					},
					classes: {
						type: Object,
						required: false
					}
				},
				computed: {
					buttonClass: function(){
						var self = this;
						if (typeof self.classes === 'object'){
							if (self.page === self.$parent.value){
								return self.classes.active;
							}
							return self.classes.inactive;
						}
					}
				},
				methods: {
					goToPage: function(page){
						var self = this;
						self.$parent.goToPage(page);
					}
				}
			}
		},
		created: function() {
			var self = this;
		},
		watch: {
			value: function() {
				var self = this;
			}
		},
		computed: {
			pages: function() {
				var self = this;
				return Math.ceil(self.total / self.perPage);
			}
		},
		methods: {
			goToPage: function(page){
				var self = this;
				self.$emit('input', page);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.vue-advanced-table-pagination {
		margin-top: 15px;
	}
</style>

