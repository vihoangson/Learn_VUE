<template>
	<div>
		<button class='btn btn-default' @click='share'>Share Facebook</button>
	</div>

</template>
<script>
	export default{
		methods:{
			share:function(){				
				this.$emit('shareEvent',{
					media:"facebook"
				});
			}
		}

	}
</script>