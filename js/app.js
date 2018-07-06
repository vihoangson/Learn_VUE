var data = {
    so: 1,
    chu: "asdf"
}
var vm = new Vue({
    el: '#app',
    data: data
        
});
console.log(vm);
console.log(vm.$data.so);
console.log(vm.$data.so === data.so);
console.log(vm.$data === data);


