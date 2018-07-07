<template>
	<div >
		<div class="alert alert-success">{{msg}}</div>	
		<p>Shares: {{ shares }}</p>
		<socialcomponent @shareEvent='shares++'></socialcomponent>
	</div>

</template>

<script>

import Social from './Social.vue'

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
	}

}
</script>

<style lang="scss">

</style>
