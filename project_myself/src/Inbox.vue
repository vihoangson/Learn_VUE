<template>
	
	<app-message :massages='dataComponent'></app-message>
</template>
<script>

import Message from './Message.vue';

export default{
	props:{
		data:{
			type:Object,
			required:true
		}
	},
	created(){
		console.log(this.data);
	},
	computed: {
		dataComponent(){
			return this.data.messages;
		}
		
	},
	components:{
		appMessage:Message
	}
}
</script>