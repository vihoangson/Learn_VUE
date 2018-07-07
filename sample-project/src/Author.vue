<template>
	<div>
		<div class="alert alert-danger">
			<small>Author: {{varauthor.firstname}} {{varauthor.lastname}}</small>
		</div>

	</div>
</template>

<script>
export default {
	props:['varauthor'],
	data:function(){
		return {
			firstname:"Bo",
			lastname:'Son'
		}
	}


}
</script>

<style>
* {
	color:black;
}

</style>
<style scoped>
* {
	color:#aaa;
}

</style>
