<template>
    <div>
        <!-- 右侧标签页 -->
        <div class="flex flex-row mx-8 mt-8">
            <class-label @whichClick="whichClick"></class-label>
            <!-- 项目卡片 -->
            <project-card :isClick="isClick" :project="project"></project-card>
            <!-- 成员卡片 -->
            <members-card :isClick="isClick" :members="members"></members-card>
        </div>
    </div>
</template>

<script> 
import ClassLabel from '../components/class/classLabel.vue';
import MembersCard from '../components/class/membersCard.vue';
import ProjectCard from '../components/class/projectCard.vue';
export default {
    components:{
        ClassLabel,
        ProjectCard,
        MembersCard,
    },
    data(){
       return{
            isClick:"",
            c:"123",
            project:[{ projectId:1,projectName:"项目名1",projectIntro:"这是项目简介这是项目简介这是项目简介",
            projectDocx:["这是项目详细信息","这是项目详细信息","这是项目详细信息","这是项目详细信息","这是项目详细信息"]},{
            projectId:2,projectName:"项目名2",projectIntro:"这是项目简介这是项目简介这是项目简介",
            projectDocx:["这是项目详细信息","这是项目详细信息","这是项目详细信息","这是项目详细信息","这是项目详细信息"]},{
            projectId:3,projectName:"项目名3",projectIntro:"这是项目简介这是项目简介这是项目简介",
            projectDocx:["这是项目详细信息","这是项目详细信息","这是项目详细信息","这是项目详细信息","这是项目详细信息"]}],
            members:[{id:"1",name:"导师"},{id:"2",name:"管理员"},{id:"2",name:"管理员"},
            {id:"3",name:"成员"},{id:"3",name:"成员"},{id:"3",name:"成员"},{id:"3",name:"成员"},{id:"3",name:"成员"}]
       }
    },
    methods:{
        whichClick:function(e){
            this.isClick=e;
            console.log(this.isClick);
        }
    }
}
</script>

<style>

</style>
