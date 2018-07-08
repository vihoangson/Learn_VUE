<template>
	<aside class='lg-side'>
		<div class="inbox-head">
			<h3>{{ currentView.title }}</h3>
			<form action="#" class="pull-right position hidden">
				<div class="input-append">
					<input type="text" class="sr-input" placeholder="Search Mail">
					<button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
				</div>
			</form>
		</div>
		<div class="inbox-body">
			<keep-alive><component :is='currentView.tag' :data='currentView.data'></component></keep-alive>
		</div>
	</aside>
	

</template>
<script>

import { eventBus } from './main';
import Trash from './Trash.vue';
import Viewmessage from './Viewmessage.vue';
import Important from './Important.vue';
import Inbox from './Inbox.vue';
import Sent from './Sent.vue';

export default{
	props:{
		message:{
			type:Array,
			required:true
		}
	},
	data() {
		return {
			history: [
			{
				tag: 'appInbox',
				title: 'Inbox',
				data: {
							messages: null
						}
			}
			]
		};
	},
	created(){
		eventBus.$on('changeView',(data) =>{
			let temp =[{
				tag: data.tag,
				title: data.title,
				data: data.data || {}
			}];			

			this.history = temp.concat(this.history.splice(0));			

			
		});
	},

	computed:{
		currentView(){ 
				let current = this.history[0];
				current.data.messages = this.messages;
				return current;
		}
	},
	components:{
		appTrash: Trash,
		appViewmessage: Viewmessage,
		appImportant: Important,
		appInbox: Inbox,
		appSent: Sent,
	}
}
</script>