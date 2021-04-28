<template>
    <div>
        <div class="flex flex-row mx-8 mt-8 relative">
            <!-- 左侧个人资料 -->
            <div class="flex flex-col ring-2 rounded shadow-md py-10 w-36">
                <img src="../assets/head.jpg" alt="head" class="self-center ring-1 shadow w-12 h-12 rounded-full overflow-hidden">
                <p class="text-base self-center mt-4">{{name}}</p>
                <p class="text-base self-center mt-4">{{class_}}班</p>
                <div class="border border-gray-300 mt-6"></div> 
                <div class="mx-4 my-4">
                    <p class="text-sm self-center text-gray-700">{{intro}}</p>  
                </div>
                <!-- 编辑按钮 -->
                <div class="mx-4 my-4 ring-1 rounded shadow flex flex-col py-2">
                    <div class="flex flex-row self-center">
                        <img src="../assets/编辑.svg" alt="编辑按钮" class="w-4 h-4 self-center">
                        <p class="text-sm ml-2 self-center">编辑资料</p>
                    </div>
                </div>
            </div>
            <!-- 右侧项目卡片 -->
            <div class="ring-2 rounded shadow w-10/12 ml-8 px-8 pt-16 pb-8 relative">
                <!-- 上层图标 -->
                <div class="absolute right-8 top-4 flex flex-row space-x-4">
                    <input type="text" class="border border-gray-300 placeholder-gray-300 rounded-sm text-black 
                    w-56 h-6 text-center text-xs focus:outline-none focus:border-blue-300 focus:ring-2 shadow" placeholder="搜索">
                    <img src="../assets/编辑.svg" alt="创建项目" class="h-6 w-6 ">
                    <img src="../assets/加号.svg" alt="创建项目" class="h-6 w-6 ">
                </div>  
                 <!--下层项目列表  -->
                <div class="grid grid-cols-3 gap-x-8 gap-y-4">
                    <div v-for="(item,index) in project" :key="index" class="relative inline-block p-4 ring-1 rounded">
                        <p class="text-base font-bold">{{item.projectName}}</p>
                        <div class="absolute right-4 top-4">
                            <img src="../assets/眼睛.svg" alt="是否可见" class="w-6 h-6">
                        </div>
                        <div class="border border-gray-200 my-2 w-full"></div>
                        <p class="text-sm text-gray-500 w-11/12">{{item.projectIntro}}</p>
                        <div class="my-2 space-y-1">
                            <p class="text-xs ">{{item.projectDocx}}</p>
                            <p class="text-xs ">{{item.projectDocx}}</p>
                            <p class="text-xs ">{{item.projectDocx}}</p>
                            <text class="iconfont icon-yiwen"></text>
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
            name:"张同学",
            class_:"20210414",
            intro:"个人简介个人简介个人简介个人简介个人简介",
            project:[{projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"},
           {projectName:"项目名",projectIntro:"这是项目简介这是项目简介这是项目简介",projectDocx:"目录一目录一"}]
        }
    },
    methods:{

    }
}
</script>