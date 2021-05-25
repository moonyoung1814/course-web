<template>
    <div class="w-56 h-8 flex items-center">
        <!-- 点击搜索键 or 键盘回车键进行搜索 -->
          <div class="flex items-center">
            <label class="iconfont icon-sousuo text-gray-700 text-lg absolute font-bold origin-center ml-48" @click="search"></label>
          </div>
          <input type="text" class="border border-gray-300 placeholder-gray-300 rounded-sm text-gray-700 
          w-56 h-8 text-center text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow pr-8 pl-2" 
          placeholder="搜索" v-model="searchContent" @keyup.enter="search">
    </div>
</template>

<script>
export default {
    props:[
        
    ],
    data(){
        return{
            searchContent:""
        }
    },
    methods:{
        // 将输入框内容传到导航栏组件
        search:function(){
            var _searchContent = this.searchContent
            this.$emit('searchCheck',_searchContent)
        }
    },
    //初始值,子传父
    mounted:function(){
        
    }
}

</script>
