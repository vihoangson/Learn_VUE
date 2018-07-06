var vm = new Vue({
    el: '#app',
    data: {
        strings: ""
    }
        
});

setTimeout(function(){
    vm.strings = 'hello';

},2000);
