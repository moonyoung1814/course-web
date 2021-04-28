<template>
    <div>
        <div class="ring-2 rounded shadow w-10/12 ml-12 px-16 py-8 relative">
                <div v-for="(item,index) in course" :key="index"> 
                    <div class="flex flex-col" v-if="item.name == '创新实践' + isPractice">
                        <label class="text-2xl font-bold self-center">{{item.name}}</label>
                        <div class="flex flex-row mt-4">
                            <img :src="item.teacher.image" alt="head" class="ring-1 shadow w-8 h-8 rounded-full overflow-hidden">
                            <p class="text-sm ml-4 self-center">{{item.teacher.name}}</p>
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
                           <div class="flex flex-col ring-1 rounded shadow-md p-4 w-80">
                               <p class="text-sm">课程教材</p>
                               <ol class="text-xs mt-2 text-gray-700 list-decimal list-inside">
                                   <li v-for="(item_,index_) in changeLine(item.book)" :key="index_">{{item_}}</li>
                               </ol>
                               <p class="text-sm mt-3">参考书目</p>
                               <!-- vue 中 用 {{}} 进行数据绑定的时候，字符串换行是不生效的。解决办法:不用上边的方式进行数据绑定，用v-html标签代替{{}} -->
                               <ol class="text-xs mt-2 text-gray-700 list-decimal list-inside" >
                                   <li v-for="(item_,index_) in changeLine(item.resource)" :key="index_">{{item_}}</li>
                               </ol>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    //父向子传递数据
    props:[
        'course',
        'isPractice'
    ],
    data(){
        return{
            
        }
    },
    methods:{
        changeLine:function (str) {
            if(str != null)
                // return str.replace(/\n/g,'<br>') 把/n替换成<br>
                // split按条件分割字符串
                return str.split("\r\n")
        }
    }
}
</script>
