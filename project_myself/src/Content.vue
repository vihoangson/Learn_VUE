<template>
	<aside class="lg-side">
		<div class="inbox-head">
			<h3>{{currentView.title}}ssa</h3>
			<form action="#" class="pull-right position">
				<div class="input-append">
					<input type="text" class="sr-input" placeholder="Search Mail">
					<button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
				</div>
			</form>
		</div>
		<div class="inbox-body">
			<keep-alive>
				<component :is='currentView.tag'></component>
			</keep-alive>
		</div>
	</aside>

</template>
<script>

import {eventBus} from './main';

import Inbox from './Inbox.vue';
import Important from './Important.vue';
import Viewmessage from './Viewmessage.vue';
import Trash from './Trash.vue';
import Sent from './Sent.vue';

export default{
	created(){
		eventBus.$on('eventchangeView',(data)=>{
			let temp = [{tag:data.tag,tag:data.tag}]
			this.history = temp.concat(this.history.splice(0));
		});
	},
	data(){
		return {
			history: [
				{tag:'appInbox',title: 'Inbox'}
			]
		}
	},
	computed:{
		currentView: function(){
			return this.history[0];
		}
	},
	components:{
		appInbox:Inbox,
		appImportant:Important,
		appViewmessage:Viewmessage,
		appTrash:Trash,
		appSent:Sent,
	}


}

</script>