<template>
    <div>
        <!-- 右侧标签页 -->
        <div class="flex flex-row mx-8 mt-8">
            <div class="flex flex-col">
                <div class="relative inline-block px-7 py-12 ring-2 rounded shadow w-32 h-80">
                    <div class="space-y-16">
                        <div class="h-5"> 
                            <label class="text-lg" @click="clickClassProjects">班级项目</label>
                            <div class="border border-blue-500 mt-0.5 w-full" v-show="isClassProjects"></div>  
                        </div>
                        <div class="h-5">
                            <label class="text-lg" @click="clickClassMembers">班级成员</label>
                            <div class="border border-blue-500 mt-0.5 w-full" v-show="isClassMembers"></div>  
                        </div>
                        <div class="h-5">
                            <label class="text-lg">共享资料</label>
                            <div class="border border-blue-500 mt-0.5 w-full" v-show="isShareData"></div>
                        </div>
                    </div>
                </div>
                <label class="text-sm text-blue-500 tracking-wide mt-8" @click="skipToClassList">>点击进入其他班级</label>
            </div>
            <!-- 项目卡片 -->
            <div class="ring-2 rounded shadow w-10/12 ml-8 px-8 pt-16 pb-8 relative" v-show="isClassProjects">
                <div class="absolute right-8 top-4">
                    <img src="../assets/加号.svg" alt="创建项目" class="h-8 w-8 ">
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
            <!-- 成员卡片 -->
            <div class="ring-2 rounded shadow w-10/12 ml-8 p-8 grid grid-cols-2 gap-4" v-show="isClassMembers">
                <div class="flex flex-col">
                    <label for="" class="text-base font-bold ">导师</label>
                    <div v-for="(item,index) in members" :key="index">
                        <div class="flex flex-col" v-if="item.id === '1'">
                            <div class="flex flex-row my-2 ring-1 rounded shadow p-2">
                                <img src="../assets/head.jpg" alt="head" class="ring-1 w-8 rounded-full overflow-hidden">
                                <p class="text-sm ml-3 self-center">{{item.name}}</p>
                            </div>
                        </div> 
                    </div>
                    <label class="text-base font-bold">管理员</label>
                    <div v-for="(item,index) in members" :key="index">
                        <div class="flex flex-col" v-if="item.id === '2'">
                            <div class="flex flex-row my-2 ring-1 rounded shadow p-2">
                                <img src="../assets/head.jpg" alt="head" class="ring-1 w-8 rounded-full overflow-hidden">
                                <p class="text-sm ml-3 self-center">{{item.name}}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="flex flex-col">
                    <label class="text-base font-bold">成员</label>
                    <div v-for="(item,index) in members" :key="index">
                        <div class="flex flex-col" v-if="item.id === '3'">
                            <div class="flex flex-row my-2 ring-1 rounded shadow p-2">
                                <img src="../assets/head.jpg" alt="head" class="ring-1 w-8 rounded-full overflow-hidden">
                                <p class="text-sm ml-3 self-center">{{item.name}}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    data(){
       return{
           isClassProjects:false,
           isClassMembers:true,
           isShareData:false,
           isHeadOver:false,
           c:"123",
           project:[{projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"}],
           members:[{id:"1",name:"导师"},{id:"2",name:"管理员"},{id:"2",name:"管理员"},
           {id:"3",name:"成员"},{id:"3",name:"成员"},{id:"3",name:"成员"},{id:"3",name:"成员"},{id:"3",name:"成员"}]
       }
    },
    methods:{
        clickClassProjects:function(){
            this.isClassProjects=true;
            this.isClassMembers=false;
        },
        clickClassMembers:function(){
            this.isClassMembers=true;
            this.isClassProjects=false;
        },
        skipToClassList:function(){
            this.$router.push('classList');
        },
        skipToProject:function(){
            this.$router.push('project');
        }
    }
}
</script>

<style>

</style>
