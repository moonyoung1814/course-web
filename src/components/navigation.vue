<template>
    <div>
      <nav>
      <div class="flex justify-between items-end">

        <p class="text-3xl font-bold tracking-wider">Course</p>

        <div class="flex space-x-14">
          <div>
            <label class="text-xl" @click="skipToIndex">首页</label>
          </div>
          <div>
            <label class="text-xl" @click="skipToCourse">课程</label>
          </div>
          <div>
            <label class="text-xl" @click="skipToClass">班级</label>
          </div>
        </div>

        <div class="flex space-x-14 items-end">
          <div class="flex flex-col items-center">
            <!-- 鼠标悬停过渡+变换 -->
            <div class="border border-gray-50 rounded-full h-10 w-10 overflow-hidden z-20
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125" @mouseover="overHead" @mouseout="outHead">
              <img :src="person.detail.image" alt="head" v-if="isImage == true">
              <img src="../assets/head.jpg" alt="head" v-else-if="isImage == false">
            </div>
            <!-- 头像卡片 -->
            <div :class="['ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white w-28 h-28 flex flex-col',
             'justify-center z-10 absolute mt-5 divide-y divide-gray-300 items-center transition duration-500 ease-in-out',
             isHeadOver == isCardOver == true?'opacity-0':'opacity-100']" @mouseover="overCard" @mouseout="outCard">
              <div class="flex flex-row items-center py-1">
                <label class="iconfont icon-ren text-gray-600 text-base font-bold"></label>
                <label class="ml-1 text-sm text-gray-700" @click="skipToPerson">我的空间</label>
              </div>
              <div class="flex flex-row items-center py-1">
                <label class="iconfont icon-tuichu text-gray-600 text-base font-bold"></label>
                <label class="ml-1 text-sm text-gray-700">退出登录</label>
              </div> 
            </div>
          </div>
          <!-- 关注图标 -->
          <div>
            <label class="iconfont icon-shoucang text-3xl"></label>
          </div>
        </div>

        <div class="w-56 h-8 flex items-center">
          <div class="flex items-center">
            <label class="iconfont icon-sousuo text-gray-700 text-base absolute font-bold origin-center mx-1"></label>
          </div>
          <input type="text" class="border border-gray-300 placeholder-gray-300 rounded-sm text-gray-700 
          w-56 h-8 text-center text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow px-4" placeholder="搜索">
        </div>
      </div> 

      <div class="border border-gray-300 mt-6"></div>   
    </nav>
    </div>
</template>

<script>
import axios from "axios"
    export default{
        props:{
        },
        data(){
          return{
            isHeadOver:false,
            isCardOver:false,
            person:[],
            isImage:false
          }
        },
        methods:{
          overHead:function(){
            this.isHeadOver=true;
          },
          outHead:function(){
            this.isHeadOver=false;
          },
          overCard:function(){
            this.isCardOver=true;
          },
          outCard:function(){
            this.isCardOver=false;
          },
          skipToClass:function(){
            this.$router.push('/class');
          },
          skipToIndex:function(){
            this.$router.push('/');
          },
          skipToCourse:function(){
            this.$router.push('/course');
          },
          //跳转到外部链接
          skipToPerson:function(){
             window.location.href = 'http://home.moonyoung.top';
          }
        },
        mounted:function(){
          console.log(this.isHeadOver)
          console.log(this.isCardOver)
        },
        async created() {
          //let person = (await axios.get('http://api.moonyoung.top/api/admin/account'))
          //console.log(person)
          //this.person = person
          var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoi5a-85biIIiwidXNlcm5hbWUiOiJ0ZWFjaGVyIiwiaWQiOjEwLCJpYXQiOjE2MTk2MjA4MzksImV4cCI6MTYxOTg4MDAzOX0.ZaAOBzCdt65dguQQKY7Ynvex-XTi5NXLn4nvMUOFwVQ';
          axios.get(
          'http://api.moonyoung.top/api/admin/account',
          {
            headers:{
              'Authorization' :'Bearer ' + token
            }
          })
          .then(res => {
            console.log(res.data.data);
            this.person = res.data.data;
            this.isImage = true;
          })
          .catch(res =>{
            console.log(res);
          })
  } 
    }
</script>

<style>

</style>
