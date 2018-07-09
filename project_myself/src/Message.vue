<template>
	<div>
		<div v-for='message in messages'>
				<div>{{ message.subject }}</div>
				<div>{{ message.content }}</div>
				<div>{{ message.isImportant }}</div>
				<div>{{ message.isDeleted }}</div>
				<div>{{ message.isRead }}</div>
				<div>{{ message.type }}</div>
				<hr>

		</div>
	</div>
</template>
<script>
export default {
	props:{
		messages:{
			type:Array,
			required:true
		}
	}
}
</script>