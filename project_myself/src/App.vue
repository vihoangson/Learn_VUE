<template>
	<div class="container">
   <div class="mail-box">
    <app-sidebar :message='message'></app-sidebar>
     <app-content :message='message'></app-content>
   </div>
 </div>
</template>

<script>


import Sidebar from './Sidebar.vue';
import Content from './Content.vue';
import message from './data/message';

export default {
  data(){
    return {
      message:message
    }
  },
  components:{
    'app-sidebar' : Sidebar,
    'app-content' : Content
  }
}
</script>