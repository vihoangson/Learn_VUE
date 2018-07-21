<template>
    <div>
        <app-message :messages='sentMessage'></app-message>
    </div>
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
            sentMessage(){
                console.log(this.data);
                return this.data.messages.filter(function(messag){
                    return (messag.type=='outgoing' && !messag.isDeleted);
                });
            }
        },
        components:{
            appMessage: Message
        }

    }
</script>