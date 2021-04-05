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
          <div class="relative inline-block" @click="clickHead">
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
    
    <!-- 当前课程 -->
    <div class="mt-8 mx-6 flex flex-row">
      <!-- 左侧标识 -->
      <div class="w-36 h-72 flex flex-col items-center">
        <div class="border border-blue-400 bg-blue-400 w-32 h-64 rounded flex items-center flex-col py-12">
          <div class="w-16 h-32">
            <img src="../assets/书.svg" alt="book">
          </div>
          <label class="text-base text-white">当前课程</label>
        </div>
        <label class="text-sm text-blue-500 tracking-wide mt-6">点击查看更多></label>
      </div>
      
      <!-- 右侧课程 -->
      <div class="grid grid-cols-4 gap-x-3 gap-y-2 ml-8 w-full">
        <div v-for="(item,index) in course" :key="index" class="flex flex-col items-center ">
          <!-- justify-center 整个flex项目沿容器居中-->
          <div class="w-48 h-32 flex justify-center" >
            <p class="text-xs text-white z-10 absolute tracking-widest self-center">{{item.name}}</p>
            <img class="w-48 h-32 z-0" src="../assets/chalkboard.png" alt="chalkboard"> 
          </div>  
          <p class="text-xs text-gray-900">课程负责人：{{item.teacher}}</p>
        </div>
      </div>
    </div>

    <div class="border border-gray-300 mt-6"></div>   

    <!-- 排行榜 -->
    <div class="mt-8 mx-6 flex flex-row">
      <!-- 左侧标识 -->
      <div class="w-36 h-72 flex flex-col items-center">
        <div class="border border-red-400 bg-red-400 w-32 h-64 rounded flex items-center flex-col py-12">
          <div class="w-16 h-32">
            <img src="../assets/奖杯.svg" alt="rank">
          </div>
          <label class="text-base text-white">排行榜</label>
        </div>
        <label class="text-sm text-red-500 tracking-wide mt-6">点击查看更多></label>
      </div>

      <!-- 右侧标签页 -->
      <div class="flex flex-col ml-16">
        <div class="flex flex-row space-x-64 font-bold items-center max-w-full">
          <div class="ml-16">
            <label class="text-lg" @click="clickProject">项目</label>
            <div class="border border-red-500 mt-0.5 max-w-full" v-show="isProject"></div>  
          </div>
          <div>
            <label class="text-lg" @click="clickDocx">文档</label>
            <div class="border border-red-500 mt-0.5 max-w-full" v-show="isDocx"></div>  
          </div>
          <div>
            <label class="text-lg mr-16" >文档</label>
            <!-- <div class="border border-red-500 mt-0.5 max-w-full" v-show="isDocx"></div>   -->
          </div>
        </div>
        <!-- 项目卡片 -->
        <div class="border border-gray-200 mt-1"></div>
        <div class="border border-gray-300 rounded shadow max-w-full mt-1 py-4 px-8" v-show="isProject">
          <div v-for="(item,index) in projectRank" :key="index" class="flex flex-col mb-3">
            <div class="flex flex-row mt-2 items-center">
              <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6">{{item.projectRank}}</p>
              <p class="text-sm ml-8 tracking-widest">{{item.projectName}}</p>
              <p class="text-sm mx-2">----------------</p>
              <p class="text-sm tracking-widest">{{item.studentName}}</p>
            </div> 
          </div>
        </div>
        <!-- 文档卡片 -->
        <div class="border border-gray-300 rounded shadow max-w-full mt-1 py-4 px-8" v-show="isDocx">
          <div v-for="(item,index) in docxRank" :key="index" class="flex flex-col mb-3">
            <div class="flex flex-row mt-2 items-center">
              <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6">{{item.docxRank}}</p>
              <p class="text-sm ml-8 tracking-widest">{{item.docxName}}</p>
              <p class="text-sm mx-2">----------------</p>
              <p class="text-sm tracking-widest">{{item.projectName}}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>

    <div class="border border-gray-200 mt-6"></div>

    <!-- 问答区 -->
    <div class="mt-8 mx-6 flex flex-row">
      <!-- 左侧标识 -->
      <div class="w-36 h-72 flex flex-col items-center">
        <div class="border border-purple-400 bg-purple-400 w-32 h-64 rounded flex items-center flex-col py-12">
          <div class="w-16 h-32">
            <img src="../assets/提问.svg" alt="question">
          </div>
          <label class="text-base text-white">问答区</label>
        </div>
        <label class="text-sm text-purple-500 tracking-wide mt-6">点击查看更多></label>
      </div>

      <!-- 右侧问答 -->
      <div class="grid grid-cols-1 gap-3 ml-8">
        <div v-for="(item,index) in comment" :key="index">
          <div class="flex flex-row">
            <div class="border border-gray-50 rounded-full h-10 w-10 overflow-hidden">
              <img src="../assets/head.jpg" alt="head">
            </div>
            <div class="ml-6 self-center flex flex-col space-y-1">
              <p class="text-sm text-black font-bold">{{item.name}}</p>
              <p class="text-sm text-gray-800">{{item.content}}</p>
              <div class="flex">
                <p class="text-xs text-gray-500">{{item.date}}&nbsp;{{item.time}}</p>
                <div class="flex" @click="Comment(item.id)">
                  <img src="../assets/回复.svg" alt="reponse" class="w-4 ml-3">
                  <label class="text-xs text-gray-500 ml-0.5 self-end">回复</label>
                </div>
              </div>
            </div> 
          </div>
          <div v-show="item.isResponse">
            <div class="flex flex-row ml-16 mt-6 items-center">
              <div class="border border-gray-50 rounded-full h-8 w-8 overflow-hidden">
                <img src="../assets/head.jpg" alt="head">
              </div>
              <div class="ml-6">
                <input type="text" class="border border-gray-300 placeholder-gray-300 rounded-sm text-black 
                w-96 h-16 text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow py-1 px-2" placeholder="输入回复">
              </div>
              <div class="ml-6">
                <button class="w-16 h-16 text-center bg-purple-500 text-white text-base border-1
                border-purple-500 rounded">发表</button>
              </div>
              
            </div>
          </div>

          <div class="border border-gray-200 mt-6 w-auto"></div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {
      customer: [],
      isProject:true,
      isDocx:false,
      isHeadOver:false,
      projectRank:[{projectRank:"1",projectName:"创新实践课程系统",studentName:"某同学"},
      {projectRank:"2",projectName:"创新实践课程系统",studentName:"某同学"},
      {projectRank:"3",projectName:"创新实践课程系统",studentName:"某同学"},
      {projectRank:"4",projectName:"创新实践课程系统",studentName:"某同学"},
      {projectRank:"5",projectName:"创新实践课程系统",studentName:"某同学"}],
      docxRank:[{docxRank:"1",docxName:"创新实践课程",projectName:"创新实践课程系统"},
      {docxRank:"2",docxName:"创新实践课程",projectName:"创新实践课程系统"},
      {docxRank:"3",docxName:"创新实践课程",projectName:"创新实践课程系统"},
      {docxRank:"4",docxName:"创新实践课程",projectName:"创新实践课程系统"},
      {docxRank:"5",docxName:"创新实践课程",projectName:"创新实践课程系统"}],
      course:[{name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"},
      {name:"创新实践(一)",teacher:"某教师"}
     ],
     comment:[{id:"0",name:"某同学",content:"今天是几月几日？",date:"2021.04.01",time:"12:00",isResponse:false},
     {id:"1",name:"某同学",content:"今天是几月几日？",date:"2021.04.01",time:"12:00",isResponse:false}]
    }
  },
  methods:{
    Comment:function(e){
      var _id= e;
      var _this=this.comment[_id];
      _this.isResponse=!_this.isResponse;
    },
    clickProject:function(){
      this.isProject=true;
      this.isDocx=!this.isProject;
    },
    clickDocx:function(){
      this.isDocx=true;
      this.isProject=!this.isDocx;
    },
    clickHead:function(){
      this.isHeadOver=!this.isHeadOver;
    }
  },

  async created() {
    let customer = (await axios.get('http://47.94.168.183:7001/api/customer')).data.data
    console.log(customer)
    this.customer = customer
  } 
}
</script>

<style>

</style>