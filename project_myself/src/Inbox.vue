<template>
	<h1>Inbox</h1>

</template>
<script>
export default{
	props:{
		data:{
			type:Array,
			required:true
		}
	},
	created:function(){
		console.log(this.data)
	}	
}
</script>