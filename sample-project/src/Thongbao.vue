<template>
	<div >
		<div class="alert alert-success">{{msg}}</div>	
		<p>Shares: {{ shares }}</p>
		<socialcomponent @shareEvent='shares++'></socialcomponent>
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
			msg: 'Component thongbao: Day la thong bao'
		}
	},
	components:{
		'socialcomponent':Social
	},
	created: function(){
		eventbus.$on('doshareEvent',function(event){
			alert('Do event '+event.media+'!');
		})
	}

}
</script>

<style lang="scss">

</style>
