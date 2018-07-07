<template>
	<div >
		<div class="alert alert-success">{{msg}}</div>	

		<p>Shares: {{ shares }}</p>
		<socialcomponent :article='$data' @shareEvent='shares++'></socialcomponent>
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
		'socialcomponent':Social
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
