export const fruitMixin = {
	data(){
		return {
		filterText: '',
		fruits: ['Mango','Apple','Banana','Melon']
		}
	},
	computed: {
		filteredfruits(){
			return this.fruits.filter((element) => {
				return element.match(this.filterText);
			})
		}
	}
};