<template>
	<div>
		<button class='btn btn-default' @click='share("facebook")'>Share Facebook</button>
		<button class='btn btn-default' @click='share("twitter")'>Share Twitter</button>
		<div>msg: {{article.shares}}</div>
	</div>

</template>
<script>
import {eventbus} from './main';

export default{
	props:['article'],
	methods:{
		share:function(method){

			eventbus.$emit('doshareEvent',{					
				articless:this.article
			});


			this.$emit('shareEvent',function(method){
				media:method
			});
		}
	}

}
</script>