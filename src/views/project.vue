<template>
    <div class="flex justify-center"><!-- 外框架整体垂直居中 -->
        <div class="flex flex-col mx-8 mt-8 relative items-center space-y-4"><!-- 框架内垂直居中 -->
            <div class="absolute right-4">
                <img src="../assets/加号.svg" alt="加入项目" class="w-6 h-6">
            </div>
            <p class="text-2xl font-bold tracking-widest">{{projectName}}</p>
            <div class="ring-1 rounded shadow px-8 py-4">
                <p class="text-sm text-gray-700">{{projectIntro}}</p>
            </div>
            <div class="flex flex-row justify-center space-x-4">
                <div>
                    <img src="../assets/head.jpg" alt="head" class="ring-1 shadow w-8 h-8 rounded-full overflow-hidden" 
                    @mouseenter="onEnterTd(e)" @mouseleave="onLeaveTd(e)">
                    <div class="ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white flex flex-row
                    z-10 absolute items-center px-4 py-4 mt-2" v-show="isEnter">
                        <img src="../assets/head.jpg" alt="头像" class="ring-1 shadow w-10 h-10 rounded-full overflow-hidden">
                        <div class="flex flex-col ml-4">
                            <label class="text-xs text-black">张同学</label>
                            <label class="text-xs text-gray-700">20210415班</label>
                        </div>
                    </div>
                </div>
                
                <img src="../assets/head.jpg" alt="head" class="ring-1 shadow w-8 h-8 rounded-full overflow-hidden">
                <img src="../assets/head.jpg" alt="head" class="ring-1 shadow w-8 h-8 rounded-full overflow-hidden">
            </div>
            <p class="text-xs text-gray-500">已加入该项目</p>
            <div class="ring-2 shadow-md rounded-md flex flex-col items-center py-4 px-16 w-full">
                <ul class="list-disc text-sm text-gray-700 space-y-2 tracking-wider">
                    <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
                    <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
                    <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
                    <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
                    <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            projectName:"项目名",
            projectIntro:"这是项目简介这是项目简介这是项目简介",
            projectDocx:"目录一目录一",
            docxTime:"2021.04.15",
            isEnter:false
        }
    },
    methods:{
        onEnterTd:function(){
            this.isEnter=true;
        },
        onLeaveTd:function(){
            this.isEnter=false;
        }
    }
}
</script>