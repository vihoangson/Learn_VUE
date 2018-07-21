<template>
	<app-message :messages='incomingMessage'></app-message>	
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
	computed:{
		incomingMessage(){
			console.log(this.data);
			return this.data.messages.filter(function(messag){
				return (messag.type=='incoming' && !messag.isDeleted);
			});
		}
	},
	components:{
		appMessage: Message
	}

}
</script>