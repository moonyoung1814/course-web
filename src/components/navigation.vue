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

        <div class="flex space-x-14">
          <!-- inline-block 内联块级元素 -->
          <div class="relative inline-block" @click="clickHead">
            <!-- 鼠标悬停过渡+变换 -->
            <div class="border border-gray-50 rounded-full h-10 w-10 overflow-hidden 
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125" >
              <img :src="person.detail.image" alt="head" v-if="isImage == true">
              <img src="../assets/head.jpg" alt="head" v-else-if="isImage == false">
            </div>
            <div class="ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white w-28 h-28 flex flex-col
            justify-center z-10 absolute origin-top-right right-0 mt-1 divide-y divide-gray-100" v-show="isHeadOver">
              <div class="flex flex-row self-center">
                <img src="../assets/人.svg" alt="icon_person" class="w-5">
                <label class="ml-1 py-2 text-sm text-gray-700" @click="skipToPerson">我的空间</label>
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
          w-56 h-8 text-center text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow" placeholder="搜索">
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
            person:[],
            isImage:false
          }
        },
        methods:{
          clickHead:function(){
            this.isHeadOver=!this.isHeadOver;
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
