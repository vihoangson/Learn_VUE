Vue.component ("couter",{

	data:function(){
		return {
			num:0
		}
	},
	template:`
	<button class='btn btn-primary' @click='num++'>{{num}}</button>
	`
});
var data_out = {num:0};
Vue.component ("couter_data_out",{

	data:function(){
		return data_out;
	},
	template:`
	<button class='btn btn-success' @click='num++'>{{num}}</button>
	`
});


var vm = new Vue({
	el: '#app'          
});
