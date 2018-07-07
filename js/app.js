
Vue.component('my_component',{
	template:`
	<h4>my_component_gobal<h4>
	`
});

new Vue({
	el: '#app1'
});
new Vue({
	el: '#app2'
});

new Vue({
	el: '#app3',
	components:{
		my_component:{
			template:`<h4>my_component_local<h4>`
		},
		'contactus':{
			template:`<h4>my_component_local_naming_convention<h4>`
		}
	}
});
