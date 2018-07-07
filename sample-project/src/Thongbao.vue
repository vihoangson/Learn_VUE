<template>
	<div >
		<div class="alert alert-success">{{msg}}</div>	

		<p>Shares: {{ shares }}</p>
		<socialcomponent :article='$data' @shareEvent='shares++'></socialcomponent>
		<hr>
		<h1>Slot name</h1>
		<slot name='top'></slot>
		<slot name='middle'></slot>
		<slot name='bottom'></slot>
		<hr>
		<slot></slot>
		<hr>

		<slot >
			<div class="alert alert-info">this is slot</div>
		</slot>
		<!-- <componentslot></componentslot> -->
	</div>

</template>

<script>

import Social from './Social.vue'
import {eventbus} from './main';

export default {

	name: 'thongbao',

	data () {
		return {
			shares:0,
			msg: 'null'
		}
	},
	components:{
		'socialcomponent':Social,
		// 'componentslot':{
		// 	data:function(){
		// 		return {};
		// 	},
		// 	template:'sss<slot>slot in side</slot>'
		// }
	},
	created: function(){
		eventbus.$on('doshareEvent',function(event){
			this.msg = event.articless.shares;
		})
	}

}
</script>

<style lang="scss">

</style>
