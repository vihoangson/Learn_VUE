<template>
	<div>
		<button class='btn btn-default' @click='share'>Share Facebook</button>
	</div>

</template>
<script>
	import {eventbus} from './main';

	export default{
		methods:{
			share:function(){

				eventbus.$emit('doshareEvent',{					
					media:"facebooks "
				});

				this.$emit('shareEvent',{
					media:"facebook"
				});
			}
		}

	}
</script>