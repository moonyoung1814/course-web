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
            <head-enter @whichEnter="whichEnter"></head-enter>
            <p class="text-xs text-gray-500">已加入该项目</p>
            <menu-card :projectDocx="projectDocx" :docxTime="docxTime"></menu-card>
        </div>
    </div>
</template>

<script>
import headEnter from '../components/headEnter.vue'
import MenuCard from './menuCard.vue';
export default {
  components: { headEnter, MenuCard },
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
        whichEnter:function(e){
            this.isEnter=e;
        }
    }
}
</script>