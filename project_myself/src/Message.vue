<template>
    <table class="table table-inbox table-hover">
        <tr class="unread" v-for="message in messages">
            <td class="inbox-small-cells">
                <input type="checkbox" class="mail-checkbox">
            </td>
            <td class="inbox-small-cells"><i v-if="message.attachment.length > 0" class="fa fa-star"></i></td>
            <td class="view-message  dont-show">{{message.subject}}</td>
            <td class="view-message ">{{message.subject}}</td>
            <td class="view-message  inbox-small-cells"><i v-if="message.attachment.length > 0" class="fa fa-paperclip"></i></td>
            <td class="view-message  text-right">9:27 AM</td>
        </tr>
    </table>
</template>
<script>
    export default {
        props: {
            messages: {
                type: Array,
                required: true
            }
        },
        computed() {
        }
    }
</script>