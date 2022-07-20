const obj={
    install(Vue){
        // console.log('@@install', Vue);
        Vue.filter("mySlice",function(value){
            return value.slice(0,4);
        });
        Vue.directive('fbind', {
            bind(element, binding) {
                console.log('bind', this);
                element.value = binding.value;
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                console.log('inserted', this);
                element.focus();

            },
            // 指令所在的模板被重新解析
            update(element, binding) {
                console.log("update", this);
                // bind(element,binding);
                element.value = binding.value;
            },
        })
        Vue.mixin({
            data() {
                return {
                    x:10,
                    y:2,
                }
            },
        })
        // vm, vc都能用了
        Vue.prototype.hello=()=>{alert("你好")}
    }
}

export default obj