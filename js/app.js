var vm = new Vue({
    template : `
    <h1>template</h1>
    <p>Content</p>
    `,
    data:{
        message : "Hello world"
    } 
});

//vm.$mount('#app');
vm.$mount();

console.log(vm.$el);

document.getElementById('app').appendChild(vm.$el);