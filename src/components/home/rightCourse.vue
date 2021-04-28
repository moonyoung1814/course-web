<template>
    <div>
       <div class="grid grid-cols-4 gap-x-1 gap-y-2 ml-8 w-full">
        <div v-for="(item,index) in course" :key="index" class="flex flex-col items-center ">
          <!-- justify-center 整个flex项目沿容器居中-->
          <div class="w-48 h-32 flex justify-center" >
            <p class="text-xs text-white z-10 absolute tracking-widest self-center">{{item.name}}</p>
            <img class="w-48 h-32 z-0" src="../../assets/chalkboard.png" alt="chalkboard"> 
          </div>  
          <p class="text-xs text-gray-900">课程负责人：{{item.teacher.name}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:[
        'course',
    ],
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>