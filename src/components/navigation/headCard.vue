<template>
    <div :class="['ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white w-28 h-28 flex flex-col',
        'justify-center z-10 absolute mt-5 divide-y divide-gray-300 items-center']">
        <div class="flex flex-row items-center py-1" v-for="(item,index) in label" :key="index" @click="skip(item.fun)">
            <label :class="['iconfont','icon-'+item.iconName,'text-gray-600 text-base font-semibold']"></label>
            <label class="ml-1 text-sm text-gray-700">{{item.name}}</label>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'isHeadOver',
        'label'
    ],
    data(){
        return{
            searchContent:""
        }
    },
    methods:{
        //v-for中不同元素绑定不同的事件
        skip:function(fun){
            this[fun]()
        },
        //跳转到外部链接
        skipToPerson:function(){
            window.location.href = 'http://home.moonyoung.top';
        },
        exit:function(){

        }
    },
    //初始值,子传父
    mounted:function(){
        
    }
}

</script>
