var data = {
    so: 1,
    chu: "chu string"
}
var vm = new Vue({
    el: '#app',
    data: data,
    methods:{
        chgText:function(){
            this.$refs.btnRefs.innerText = 111;
            //console.log();
        }
    }
        
});

