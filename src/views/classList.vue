<template>
    <div>
        <div class="flex flex-row mx-8 mt-8 relative">
            <!-- 左侧标签页 -->
            <div class="px-7 ring-2 rounded shadow space-y-16 p-14 h-96">
                <div class="block h-5"> 
                    <label class="text-lg" @click="clickPractice_1">创一班</label>
                    <div class="border border-blue-500 mt-0.5 w-full" v-show="isPractice_1"></div>  
                </div>
                <div class="block h-5">
                    <label class="text-lg" @click="clickPractice_2">创二班</label>
                    <div class="border border-blue-500 mt-0.5 w-full" v-show="isPractice_2"></div>  
                </div>
                <div class="block h-5">
                    <label class="text-lg" @click="clickPractice_3">创三班</label>
                    <div class="border border-blue-500 mt-0.5 w-full" v-show="isPractice_3"></div>
                </div>
                <div class="block h-5">
                    <label class="text-lg" @click="clickPractice_4">创四班</label>
                    <div class="border border-blue-500 mt-0.5 w-full" v-show="isPractice_4"></div>
                </div>
            </div>
            <!-- 右侧班级列表 -->
            <div class="w-10/12 ml-8 relative">
                <div class="flex flex-col" >
                    <div v-for="(item,index) in classList" :key="index">
                        <!-- 假定以2021开头的id为创一班 -->
                        <div class="flex flex-row ring-1 rounded shadow p-4 mb-4" v-if="item.id.startsWith('2021')" v-show="isPractice_1"> 
                            <img src="../assets/head.jpg" alt="head" class="ring-1 ring-gray-300 shadow w-16 h-16 rounded overflow-hidden">
                            <div class="flex flex-col ml-4 self-center">
                                <div class="flex flex-row">
                                    <p class="text-base self-center font-bold">{{item.id}}班</p>
                                    <div class="flex flex-row self-center absolute right-8">
                                        <p class="text-sm">知识库地址：&nbsp;</p>
                                        <p class="text-sm text-blue-500 italic underline">{{item.yq_url}}</p>
                                    </div>
                                </div>
                                <p class="text-sm self-center mt-2 text-gray-600">{{item.intro}}</p>             
                            </div>  
                        </div>
                        <div class="flex flex-row ring-1 rounded shadow p-4 mb-4" v-if="item.id.startsWith('2022')" v-show="isPractice_2"> 
                            <img src="../assets/head.jpg" alt="head" class="ring-1 ring-gray-300 shadow w-16 h-16 rounded overflow-hidden">
                            <div class="flex flex-col ml-4 self-center">
                                <div class="flex flex-row">
                                    <p class="text-base self-center font-bold">{{item.id}}班</p>
                                    <div class="flex flex-row self-center absolute right-8">
                                        <p class="text-sm">知识库地址：&nbsp;</p>
                                        <p class="text-sm text-blue-500 italic underline">{{item.yq_url}}</p>
                                    </div>
                                </div>
                                <p class="text-sm self-center mt-2 text-gray-600">{{item.intro}}</p>             
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
        return {
            isPractice_1:true,
            isPractice_2:false,
            isPractice_3:false,
            isPractice_4:false,
            classList:[{id:"20210414",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20210415",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20210416",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20220417",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20220418",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20220419",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"}]
        }
    },
    methods:{
        clickPractice_1:function(){
            this.isPractice_1=true;
            this.isPractice_2=false;
            this.isPractice_3=false;
            this.isPractice_4=false;
        },
        clickPractice_2:function(){
            this.isPractice_1=false;
            this.isPractice_2=true;
            this.isPractice_3=false;
            this.isPractice_4=false;
        },
        clickPractice_3:function(){
            this.isPractice_1=false;
            this.isPractice_2=false;
            this.isPractice_3=true;
            this.isPractice_4=false;
        },
        clickPractice_4:function(){
            this.isPractice_1=false;
            this.isPractice_2=false;
            this.isPractice_3=false;
            this.isPractice_4=true;
        }
    }
}
</script>