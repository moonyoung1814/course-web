<template>
  <div>
    <!-- 当前课程 -->
    <div class="mt-8 mx-6 flex flex-row">
      <left-label
        :iconName="courseIcon"
        :color="courseColor"
        :labelName="labelName[0]"
      ></left-label>
      <right-course :course="course"></right-course>
    </div>
    <div class="border border-gray-300 mt-6"></div>

    <!-- 排行榜 -->
    <div class="mt-8 mx-6 flex flex-row">
      <left-label
        :iconName="rankIcon"
        :color="rankColor"
        :labelName="labelName[1]"
      ></left-label>
      <right-rank :projectRank="projectRank" :docxRank="docxRank"></right-rank>
    </div>
    <div class="border border-gray-200 mt-6"></div>

    <!-- 问答区 -->
    <div class="mt-8 mx-6 flex flex-row max-w-full">
      <left-label
        :iconName="questionIcon"
        :color="questionColor"
        :labelName="labelName[2]"
      ></left-label>
      <right-question></right-question>
    </div>
  </div>
</template>

<script>
import leftLabel from "../components/home/leftLabel.vue";
import RightCourse from "../components/home/rightCourse.vue";
import RightRank from "../components/home/rightRank/rightRank.vue";
import RightQuestion from "../components/home/rightQuestion/rightQuestion.vue";
export default {
  components: {
    leftLabel,
    RightCourse,
    RightRank,
    RightQuestion,
  },
  data() {
    return {
      name: "123",
      isClick: "",
      courseIcon: "thin-_book_writi",
      courseColor: "blue",
      rankIcon: "trophy",
      rankColor: "red",
      questionIcon: "yiwen",
      questionColor: "purple",
      course: [],
      labelName: ["课程区", "排行榜", "问答区"],
      projectRank: [
        {
          projectRank: "1",
          title: "创新实践课程系统",
          subhead: "某同学",
        },
        {
          projectRank: "2",
          title: "创新实践课程系统统",
          subhead: "某同学",
        },
        {
          projectRank: "3",
          title: "创新实践课程系统统统",
          subhead: "某同",
        },
        {
          projectRank: "4",
          title: "创新实践课程系统",
          subhead: "某同学",
        },
        {
          projectRank: "5",
          title: "创新实践课程系统",
          subhead: "某同学",
        },
      ],
      docxRank: [
        {
          docxRank: "1",
          title: "项目概述",
          subhead: "创新实践课程系统统",
        },
        { docxRank: "2", title: "TodoList", subhead: "创新实践课程系" },
        {
          docxRank: "3",
          title: "changLog",
          subhead: "创新实践课程系统统统",
        },
        { docxRank: "4", title: "Api文档", subhead: "创新实践课程系统" },
        {
          docxRank: "5",
          title: "学生表Student",
          subhead: "创新实践课程系统",
        },
      ],
    };
  },
  needSerialize: true,
  async created() {
    if (this.$api.course.getCourseList()) {
      let course = (await this.$api.course.getCourseList()).data.data;
      this.course = course;
      console.log(this.course);
    }
  },
  methods: {
    whichClick: function(e) {
      this.isClick = e;
    },
  },
};
</script>

<style></style>
