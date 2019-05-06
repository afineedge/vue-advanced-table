<template>
	<div v-bind:class="classes.paginationContainer" class="vue-advanced-table-pagination">
		<pagination-button v-bind:page="'prev'" v-bind:classes="classes.paginationButtons" v-bind:key="'prev'" v-bind:disabled="value === 1">
			<strong>&lt;</strong>
		</pagination-button>
		<template v-if="totalPages <= 10">
			<pagination-button v-for="buttonPage in totalPages" v-bind:page="buttonPage" v-bind:classes="classes.paginationButtons" v-bind:key="buttonPage"></pagination-button>
		</template>
		<template v-else>
			<pagination-button v-for="buttonPage in pageGroups.start" v-bind:page="buttonPage" v-bind:classes="classes.paginationButtons" v-bind:key="buttonPage"></pagination-button>
			<pagination-button v-bind:page="'...'" v-bind:classes="classes.paginationButtons" v-bind:key="'.'"></pagination-button>
			<pagination-button v-for="buttonPage in pageGroups.middle" v-bind:page="buttonPage" v-bind:classes="classes.paginationButtons" v-bind:key="buttonPage"></pagination-button>
			<pagination-button v-if="pageGroups.middle.length > 0" v-bind:page="'...'" v-bind:classes="classes.paginationButtons" v-bind:key="'..'"></pagination-button>
			<pagination-button v-for="buttonPage in pageGroups.end" v-bind:page="buttonPage" v-bind:classes="classes.paginationButtons" v-bind:key="buttonPage"></pagination-button>
		</template>
		<pagination-button v-bind:page="'next'" v-bind:classes="classes.paginationButtons" v-bind:key="'next'" v-bind:disabled="value === totalPages">
			<strong>&gt;</strong>
		</pagination-button>
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
					<button type="button" v-bind:class="buttonClass" v-on:click="handlePaginationClick(page)">
						<slot>{{ page }}</slot>
					</button>
				`,
				props: {
					page: {
						type: [Number, String],
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
					handlePaginationClick: function(page){
						var self = this;
						if (typeof page === 'number'){
							self.goToPage(page);
						} else {
							if (page === 'prev'){
								self.goToPage(self.$parent.value - 1);
							} else if (page === 'next'){
								self.goToPage(self.$parent.value + 1);
							}
						}
					},
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
			totalPages: function() {
				var self = this;
				return Math.ceil(self.total / self.perPage);
			},
			pageGroups: function() {
				var self = this;
				var pages = {
					start: [],
					middle: [],
					end: []
				};
				if (self.value < 4){
					var startPage = 1;
					for (let i = 0; i <= 5; i++){
						pages.start.push(startPage + i);
					}
					pages.end.push(self.totalPages);
				} else if (self.value < self.totalPages - 3){
					var startPage = self.value - 2;
					pages.start.push(1);
					for (let i = 0; i <= 4; i++){
						pages.middle.push(startPage + i);
					}
					pages.end.push(self.totalPages);
				} else {
					var startPage = self.totalPages - 4;
					pages.start.push(1);
					for (let i = 0; i <= 4; i++){
						pages.end.push(startPage + i);
					}
				}
				/*if (self.value < 5){
					startPage = 1;
				} else {
					startPage = self.value;
				}
				for (var i = 0; i <= 4; i++){
					pages.start.push(startPage + i);
				}*/
				/*for (let i = self.totalPages - 3; i <= self.totalPages; i++){
					pages.end.push(i);
				}*/
				return pages;
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
		margin-left: auto;
	}
</style>

