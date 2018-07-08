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
			<keep-alive><component :is='currentView.tag'></component></keep-alive>
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
	data() {
		return {
			history: [
				{
					tag: 'appInbox',
					title: 'Inbox',
				}
			]
		};
	},
	created(){
		eventBus.$on('changeView',(data) =>{
			let temp =[{
				tag: data.tag,
				title: data.title
			}];			

			this.history = temp.concat(this.history.splice(0));			

			
		});
	},

	computed:{
		currentView(){ 
			return this.history[0];
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