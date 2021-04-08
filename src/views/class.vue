<template>
    <div class="container mx-auto my-6 ">
        <!-- 导航栏 -->
        <nav>
        <div class="flex justify-between items-end">

            <p class="text-3xl font-bold tracking-wider">Course</p>

            <div class="flex space-x-14">
            <div>
                <label class="text-xl">首页</label>
            </div>
            <div>
                <label class="text-xl">课程</label>
            </div>
            <div>
                <label class="text-xl">班级</label>
            </div>
            </div>

            <div class="flex space-x-14">
            <!-- inline-block 内联块级元素 -->
            <div class="relative inline-block">
                <!-- 鼠标悬停过渡+变换 -->
                <div class="border border-gray-50 rounded-full h-10 w-10 overflow-hidden 
                transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125" >
                <img src="../assets/head.jpg" alt="head">
                </div>
                <div class="ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white w-28 h-28 flex flex-col
                justify-center z-10 absolute origin-top-right right-0 mt-1 divide-y divide-gray-100" v-show="isHeadOver">
                <div class="flex flex-row self-center">
                    <img src="../assets/人.svg" alt="icon_person" class="w-5">
                    <label class="ml-1 py-2 text-sm text-gray-700" >我的空间</label>
                </div>
                <div class="flex flex-row self-center">
                    <img src="../assets/退出.svg" alt="icon_exit" class="w-5">
                    <label class="ml-1 py-2 text-sm text-gray-700">退出登录</label>
                </div> 
                </div>
            </div>
            <div class="border rounded-full h-10 w-10 overflow-hidden">
                <img src="../assets/收藏.svg" alt="attention">
            </div>
            </div>

            <div class="">
            <input type="text" class="border border-gray-300 placeholder-gray-300 rounded-sm text-black 
            w-56 h-8 text-center text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow" :placeholder=name>
            </div>
        </div> 

        <div class="border border-gray-300 mt-6"></div>   
        </nav>

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
                <label class="text-sm text-blue-500 tracking-wide mt-8">>点击进入其他班级</label>
            </div>
            <!-- 项目卡片 -->
            <div class="ring-2 rounded shadow w-10/12 ml-8 p-8" v-show="isClassProjects">
            <div class="grid grid-cols-3 gap-x-8 gap-y-4">
                <div v-for="(item,index) in project" :key="index" class="relative inline-block p-4 ring-1 rounded">
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
        }
    }
}
</script>

<style>

</style>
