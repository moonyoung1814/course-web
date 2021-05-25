<template>
    <div>
        <div class="flex flex-row mx-8 mt-8 relative">
            <!-- 左侧标签页 -->
            <label-page @whichPractice="whichPractice"></label-page>
            <!-- 右侧班级列表 -->
            <div class="w-10/12 ml-8 relative flex flex-col">
                <class-card :classList="classList" :number="2021" v-show="isPractice == 1"></class-card>
                <class-card :classList="classList" :number="2022" v-show="isPractice == 2"></class-card>
                <class-card :classList="classList" :number="2023" v-show="isPractice == 3"></class-card>
                <class-card :classList="classList" :number="2024" v-show="isPractice == 4"></class-card>
            </div>
        </div>
        
    </div>
</template>

<script>
import ClassCard from '../components/home/classCard.vue';
import labelPage from '../components/labelPage.vue';
export default {
    components: { labelPage, ClassCard },
    data(){
        return {
            isPractice:"",
            classList:[{id:"20210414",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20210415",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20210416",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20220417",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20220418",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20220419",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20230419",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            {id:"20240419",image:"../assets/head.jpg",intro:"班级简介班级简介班级简介班级简介班级简介班级简介",yq_url:"www.yueque.com"},
            ]
        }
    },
    methods:{
        whichPractice:function(e){
            this.isPractice=e;
        }
    }
}
</script>