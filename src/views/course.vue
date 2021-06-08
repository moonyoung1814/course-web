<template>
  <div>
    <div class="flex flex-row mx-8 mt-8 relative">
      <!-- 左侧标签页 -->
      <!-- 子组件向父组件传值 -->
      <label-page
        :practice="practice"
        @whichPractice="whichPractice"
      ></label-page>
      <!-- 右侧课程部分 -->
      <!-- 父组件向子组件传值 -->
      <course-list :course="course" :isPractice="isPractice"></course-list>
    </div>
  </div>
</template>

<script>
// 组件化
import LabelPage from "../components/labelPage.vue";
import CourseList from "../components/courseList.vue";
export default {
  components: {
    LabelPage,
    CourseList,
  },
  data() {
    return {
      course: [],
      teacher: [],
      isPractice: "",
      practice: [
        { practiceNum: 1, practiceName: "创一班" },
        { practiceNum: 2, practiceName: "创二班" },
        { practiceNum: 3, practiceName: "创三班" },
        { practiceNum: 4, practiceName: "创四班" },
      ],
    };
  },
  needSerialize: true,
  async created() {
    if (this.$api.course.getCourseList()) {
      this.course = (await this.$api.course.getCourseList()).data.data;
    }
  },
  methods: {
    //父组件收到子组件传的值
    whichPractice: function(e) {
      this.isPractice = e;
    },
  },
};
</script>
