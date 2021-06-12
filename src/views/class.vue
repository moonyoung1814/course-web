<template>
  <div class="h-screen mt-4 mx-4">
    <!-- 右侧标签页 -->
    <div class="flex flex-row">
      <label-page
        @whichPractice="whichClick"
        :practice="label"
        class="flex-none"
      ></label-page>
      <!-- 项目卡片 -->
      <project-card :isClick="isClick" :project="project"></project-card>
      <!-- 成员卡片 -->
      <members-card
        :isClick="isClick"
        :student="student"
        :teacher="teacher"
      ></members-card>
    </div>
  </div>
</template>

<script>
import LabelPage from "../components/labelPage.vue";
import MembersCard from "../components/class/membersCard.vue";
import ProjectCard from "../components/class/projectCard.vue";
export default {
  components: {
    ProjectCard,
    MembersCard,
    LabelPage,
  },

  data() {
    return {
      isClick: "",
      c: "123",
      project: [],
      members: [],
      student: [],
      teacher: [],
      label: [
        {
          practiceNum: 1,
          practiceName: "班级项目",
        },
        {
          practiceNum: 2,
          practiceName: "班级成员",
        },
        {
          practiceNum: 3,
          practiceName: "共享资料",
        },
      ],
    };
  },
  needSerialize: true,
  async created() {
    if (this.$api.program.getProjectList()) {
      this.project = (await this.$api.program.getProjectList()).data.data;
      console.log(this.project);
    }
    if (this.$api.program.getMembers()) {
      let members = (await this.$api.program.getMembers()).data.data;
      this.student = members[0].student;
      this.teacher = members[0].teacher;
    }
  },
  mounted() {},
  methods: {
    whichClick: function(e) {
      this.isClick = e;
      console.log(this.isClick);
    },
    async getProjectList() {},
    async getMembers() {
      if (this.$api.member.getMembers()) {
        let members = (await this.$api.member.getMembers()).data.data;
        this.student = members[0].student;
        this.teacher = members[0].teacher;
      }
    },
  },
};
</script>

<style></style>
