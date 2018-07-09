<template>
	
	<div>
		<div v-for = 'm in massages'>{{m.content}}</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			massages:{
				type:Array,
				required:true
			}
		}
	}
}
</script>