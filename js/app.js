var vm = new Vue({

    template : `
    <h1>template</h1>
    <p>Content</p>
    `,
    data:{
        message : "Hello world"
    }, 
    beforeCreate:function(){
        alert('beforeCreate');
    },
    created:function(){
        alert('created');
    },
    beforeMount:function(){
        alert('beforeMount');
    },
    mounted:function(){
        alert('mounted');
    },
    beforeUpdate:function(){
        alert('beforeUpdate');
    },
    updated:function(){
        alert('updated');
    },
    activated:function(){
        alert('activated');
    },
    deactivated:function(){
        alert('deactivated');
    },
    beforeDestroy:function(){
        alert('beforeDestroy');
    },
    destroyed:function(){
        alert('destroyed');
    },
    errorCaptured:function(){
        alert('errorCaptured');
    },
},
);

setTimeout(function(){
    alert(111);
    vm.$mount("#app");
    //vm.$data.message = '2112';
},4000);

