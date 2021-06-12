<template>
  <div class="min-h-screen mt-4 mx-4">
    <div class="flex flex-row relative">
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
import CourseList from "../components/course/courseList.vue";
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
        { practiceNum: 1, practiceName: "创新实践一" },
        { practiceNum: 2, practiceName: "创新实践二" },
        { practiceNum: 3, practiceName: "创新实践三" },
        { practiceNum: 4, practiceName: "创新实践四" },
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
