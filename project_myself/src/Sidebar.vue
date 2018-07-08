<template>
	
	<aside class="sm-side">
		<div class="user-head">
			<a class="inbox-avatar" href="javascript:;">
				<img  width="64" hieght="60" src="http://bootsnipp.com/img/avatars/ebeb306fd7ec11ab68cbcaa34282158bd80361a7.jpg">
			</a>
			<div class="user-name">
				<h5><a href="#">Alireza Zare</a></h5>
				<span><a href="#">Info.Ali.Pci@Gmail.com</a></span>
			</div>
			<a class="mail-dropdown pull-right" href="javascript:;">
				<i class="fa fa-chevron-down"></i>
			</a>
		</div>
		<div class="inbox-body">
			<a href="#myModal" data-toggle="modal"  title="Compose"    class="btn btn-compose">
				Compose
			</a>
			<!-- Modal -->
			<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade" style="display: none;">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
							<h4 class="modal-title">Compose</h4>
						</div>
						<div class="modal-body">
							<form role="form" class="form-horizontal">
								<div class="form-group">
									<label class="col-lg-2 control-label">To</label>
									<div class="col-lg-10">
										<input type="text" placeholder="" id="inputEmail1" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-lg-2 control-label">Cc / Bcc</label>
									<div class="col-lg-10">
										<input type="text" placeholder="" id="cc" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-lg-2 control-label">Subject</label>
									<div class="col-lg-10">
										<input type="text" placeholder="" id="inputPassword1" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-lg-2 control-label">Message</label>
									<div class="col-lg-10">
										<textarea rows="10" cols="30" class="form-control" id="" name=""></textarea>
									</div>
								</div>

								<div class="form-group">
									<div class="col-lg-offset-2 col-lg-10">
										<span class="btn green fileinput-button">
											<i class="fa fa-plus fa fa-white"></i>
											<span>Attachment</span>
											<input type="file" name="files[]" multiple="">
										</span>
										<button class="btn btn-send" type="submit">Send</button>
									</div>
								</div>
							</form>
						</div>
					</div><!-- /.modal-content -->
				</div><!-- /.modal-dialog -->
			</div><!-- /.modal -->
		</div>
		<ul class="inbox-nav inbox-divider">
			<li :class='{active:activeView == "appInbox"}'>
				<a href="#"  @click.prevent='currentView("appInbox", "Inbox")'><i class="fa fa-inbox"></i> Inbox <span class="label label-danger pull-right">2</span></a>

			</li>
			<li :class='{active:activeView == "appSent"}'>
				<a href="#"  @click.prevent='currentView("appSent", "Sent mail")'><i class="fa fa-envelope-o"></i> Sent Mail</a>
			</li>
			<li :class='{active:activeView == "appImportant"}'>
				<a href="#"  @click.prevent='currentView("appImportant", "Important")'><i class="fa fa-bookmark-o"></i> Important</a>
			</li>
			<li :class='{active:activeView == "appViewmessage"}'>
				<a href="#"  @click.prevent='currentView("appViewmessage", "View message")'><i class=" fa fa-external-link"></i> Drafts <span class="label label-info pull-right">30</span></a>
			</li>
			<li :class='{active:activeView == "appTrash"}'>
				<a href="#"  @click.prevent='currentView("appTrash", "Trash")'><i class=" fa fa-trash-o"></i> Trash</a>
			</li>
		</ul>
	</aside>			

</template>
<script>
import { eventBus } from './main';

export default{
	created:function(){
		eventBus.$on('changeView',(data)=>{
			this.activeView = data.tag;
		})
	},
	data() {
		return {
			activeView:'appIndex'
		};
	},
	methods:{
		currentView : function(appname,title){
			eventBus.$emit('changeView',{
				tag:appname,
				title:title
			})
		}
	}
}
</script>