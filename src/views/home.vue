<template>
  <div>
    <!-- 当前课程 -->
    <div class="mt-8 mx-6 flex flex-row">
      <left-label :imageUrl="courseImageUrl" :bgColor="courseColor" :textColor="courseColor"></left-label>
      <right-course :course="course"></right-course>
    </div>
    <div class="border border-gray-300 mt-6"></div>  

    <!-- 排行榜 -->
    <div class="mt-8 mx-6 flex flex-row">
      <left-label :imageUrl="rankImageUrl" :bgColor="rankColor" :textColor="rankColor"></left-label>
      <div class="flex flex-col ml-16">
        <right-rank-label @whichClick="whichClick"></right-rank-label>
        <right-rank-card :isClick="isClick" :projectRank="projectRank" :docxRank="docxRank"></right-rank-card>
      </div>
    </div>
    <div class="border border-gray-200 mt-6"></div>

    <!-- 问答区 -->
    <div class="mt-8 mx-6 flex flex-row max-w-full">
      <left-label :imageUrl="questionImageUrl" :bgColor="questionColor" :textColor="questionColor"></left-label>
      <right-question :comment="comment"></right-question>
    </div>
  </div>
</template>

<script>
import leftLabel from '../components/home/leftLabel.vue'
import RightCourse from '../components/home/rightCourse.vue'
import RightRankLabel from '../components/home/rightRankLabel.vue'
import RightRankCard from '../components/home/rightRankCard.vue'
import RightQuestion from '../components/home/rightQuestion.vue'
import {getListAPI} from '../utils/request'
export default {
  components: { 
    leftLabel,
    RightCourse,
    RightRankLabel,
    RightRankCard,
    RightQuestion
  },
  data() {
    return {
      name:"123",
      isClick:"",
      courseImageUrl:require("../assets/书.svg"),
      courseColor:"blue",
      rankImageUrl:require("../assets/奖杯.svg"),
      rankColor:"red",
      questionImageUrl:require("../assets/提问.svg"),
      questionColor:"purple",
      course:[],
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
      comment:[{id:"0",name:"某同学",content:"今天是几月几日？",date:"2021.04.01",time:"12:00",isResponse:false},
      {id:"1",name:"某同学",content:"今天是几月几日？",date:"2021.04.01",time:"12:00",isResponse:false}]
    }
  },
  created() {
    getListAPI().then(res => {
        this.course = res.data.data
        console.log(this.course)
      })
      .catch(err => {
        console.log(err)
      })
        
  },
  methods:{
    whichClick:function(e){
      this.isClick=e;
    }
  }
}
</script>

<style>

</style>