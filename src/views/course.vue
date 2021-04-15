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
            <!-- 右侧课程部分 -->
            <div class="ring-2 rounded shadow w-10/12 ml-8 px-16 py-8 relative grid grid-cols-2 gap-4">
                <div v-for="(item,index) in course" :key="index">
                    <div class="flex flex-col">
                        <label class="text-base font-bold">{{item.title}}</label>
                        <div class="flex flex-row mt-4">
                            <img src="../assets/head.jpg" alt="head" class="ring-1 shadow w-8 h-8 rounded-full overflow-hidden">
                            <p class="text-sm ml-4 self-center">{{item.teacher}}</p>
                        </div>
                        <!-- 学期卡片 -->
                        <div class="flex flex-row mt-4">
                            <div class="ring-1 rounded p-2 flex flex-row">
                                <p class="text-xs">第</p>
                                <p class="font-bold text-xs ml-1">{{item.semeter}}</p>
                                <p class="text-xs ml-1">学年</p>
                                <p class="text-xs ml-1">第</p>
                                <p class="font-bold text-xs ml-1">2</p>
                                <p class="text-xs ml-1">学期</p>
                            </div>
                        </div>
                        <!-- 课时卡片 -->
                        <div class="flex flex-row mt-4">
                            <div class="ring-1 rounded p-2">
                                <p class="text-xs">{{item.weekday}}</p>
                            </div>
                            <div class="ring-1 rounded p-2 ml-3">
                                <p class="text-xs">{{item.startTime}}&nbsp;-&nbsp;{{item.endTime}}</p>
                            </div>
                        </div>
                        <!-- 书籍卡片 -->
                        <div class="flex flex-row mt-4">
                           <div class="flex flex-col ring-1 rounded shadow-md p-4">
                               <p class="text-sm">课程教材</p>
                               <p class="text-xs mt-2 text-gray-700">{{item.book}}</p>
                               <p class="text-sm mt-3">参考书目</p>
                               <p class="text-xs mt-2 text-gray-700">{{item.resource}}</p>
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
            isPractice_1:true,
            isPractice_2:false,
            isPractice_3:false,
            isPractice_4:false,
            course:[{title:"创新实践一",teacher:"杭电教师",semeter:"2021",book:"《数据结构》",resource:"《数据结构》、《数据结构程序设计》",weekday:"周四",startTime:"15:15",endTime:"16:50"},
            {title:"创新实践一",teacher:"杭电教师",semeter:"2021",book:"《数据结构》",resource:"《数据结构》、《数据结构程序设计》",weekday:"周四",startTime:"15:15",endTime:"16:50"}]
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
