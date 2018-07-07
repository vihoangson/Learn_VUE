<template>
  <div id="app">

    <div class="container">
        <a href="#" @click.prevent='active_name="home"' class="btn btn-primary">home</a>
        <a href="#" @click.prevent='active_name="about"' class="btn btn-primary">about</a>
        <a href="#" @click.prevent='active_name="contact"' class="btn btn-primary">contact</a>
        <keep-alive><component :is='active_name'></component></keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  data:function(){
    return {
      active_name:'home'
    }
  }
}
</script>

<style lang="scss">
</style>
