<template>
    <div class="w-10/12 ml-8 px-8 relative" v-show="isClick == 1">
        <create-notice @whichHover="whichHover"></create-notice> 
        <div class="grid grid-cols-3 gap-x-8 gap-y-4">
            <div v-for="(item,index) in project" :key="index" class="relative p-4 ring-1 ring-gray-300 rounded-md shadow-md items-center flex flex-col " @click="skipToProject(item)">
                <img src="../../assets/chalkboard.png" alt="项目封面">
                <p class="text-base font-bold">{{item.projectName}}</p>
            </div> 
        </div>
    </div>
</template>

<script>
import createNotice from './createNotice.vue';
export default {
  components: { createNotice },
    props:[
        'isClick',
        'project'
    ],
    data(){
        return{
           isHover:false,
        }
    },
    methods:{
        // 动态路由
        skipToProject:function(project){
            this.$router.push({name:'project',params:{id:project.projectId,project:project}});
        },
        whichHover:function(e){
            this.isHover = e
        }
    },
   
}

</script>
