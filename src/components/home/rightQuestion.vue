<template>
    <!-- 右侧问答 -->
    <div class="relative inline-block ml-8 w-10/12">
        <div v-for="(item,index) in comment" :key="index" class="mt-8">
            <div class="flex flex-row">
                <!-- 头像 -->
                <div class="border border-gray-50 rounded-full h-10 w-10 overflow-hidden">
                    <img src="../../assets/head.jpg" alt="head">
                </div>
                <!-- 头像右侧区域 -->
                <div class="ml-6 self-center flex flex-col space-y-1">
                    <p class="text-sm text-black font-bold">{{item.name}}</p>
                    <p class="text-sm text-gray-800">{{item.content}}</p>
                    <div class="flex flex-row items-center">
                        <p class="text-xs text-gray-500">{{item.date}}&nbsp;{{item.time}}</p>
                        <div class="flex flex-row items-center ml-4" @click="Comment(item.id)">
                            <label class="iconfont icon-huifu text-gray-600 text-base"></label>
                            <label class="text-xs text-gray-500 ml-0.5">回复</label>
                        </div>
                    </div>
                </div> 
            </div>
            <!-- 回复区 -->
            <div v-show="item.isResponse">
                <div class="flex flex-row ml-16 mt-6 items-center">
                    <div class="border border-gray-50 rounded-full h-8 w-8 overflow-hidden">
                        <img src="../../assets/head.jpg" alt="head">
                    </div>
                    <div class="ml-6 w-9/12">
                        <input type="text" class="border border-gray-300 placeholder-gray-300 rounded-sm text-black 
                        w-full h-16 text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow py-1 px-2" placeholder="输入回复">
                    </div>
                    <div class="ml-6">
                        <button class="w-16 h-16 text-center bg-purple-500 text-white text-base border-1
                        border-purple-500 rounded">发表</button>
                    </div>
                </div>
            </div>
            <div class="border border-gray-200 mt-8 w-auto"></div> 
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'comment',
    ],
    data(){
        return{
        }
    },
    methods:{
        Comment:function(e){
            var _id= e;
            var _this=this.comment[_id];
            _this.isResponse=!_this.isResponse;
        }
    }
}
</script>