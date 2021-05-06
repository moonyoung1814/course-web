<template>
    <div class="ring-2 rounded shadow w-10/12 ml-8 px-8 pt-16 pb-8 relative" v-show="isClick == 1">
        <div class="absolute right-4 top-4 w-16 flex flex-col">
            <label :class="['iconfont icon-jiahao self-center',isCreate ? 'text-blue-900 text-4xl':'text-gray-500 text-3xl']" @click="createProject"></label>
        </div>   
        <div class="grid grid-cols-3 gap-x-8 gap-y-4">
            <div v-for="(item,index) in project" :key="index" class="relative inline-block p-4 ring-1 rounded" @click="skipToProject">
                <p class="text-base font-bold">{{item.projectName}}</p>
                <div class="border border-gray-200 my-2 w-full"></div>
                <p class="text-sm text-gray-500 w-11/12">{{item.projectIntro}}</p>
                <div class="my-2 space-y-1">
                    <p class="text-xs ">{{item.projectDocx}}</p>
                    <p class="text-xs ">{{item.projectDocx}}</p>
                    <p class="text-xs ">{{item.projectDocx}}</p>
                </div>  
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'isClick',
        'project'
    ],
    data(){
        return{
           isCreate:false
        }
    },
    methods:{
        skipToProject:function(){
            this.$router.push('/project');
        },
        createProject:function(){
            this.isCreate=!this.isCreate;
        }
    },
   
}

</script>
