<template>
    <div>
        <div class="flex flex-row mx-8 mt-8 relative">
            <!-- 左侧标签页 -->
            <!-- 子组件向父组件传值 -->
            <label-page @whichPractice="whichPractice"></label-page>
            <!-- 右侧课程部分 -->
            <!-- 父组件向子组件传值 -->
            <course-list :course="course" :isPractice="isPractice"></course-list>
        </div>
    </div>
</template>

<script>
// 组件化
import LabelPage from '../components/labelPage.vue'
import CourseList from '../components/courseList.vue'
import {getListAPI} from '../utils/request'
export default {
    components:{
        LabelPage,
        CourseList
    },
    data(){
        return{
            course : [],
            teacher : [],
            isPractice:""
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
        //父组件收到子组件传的值  
        whichPractice:function(e){
            this.isPractice=e;
            //console.log(this.isPractice)
        }
    }
}
</script>
