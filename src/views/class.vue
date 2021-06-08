<template>
  <div>
    <!-- 右侧标签页 -->
    <div class="flex flex-row mx-8 mt-8">
      <label-page
        @whichPractice="whichClick"
        :practice="label"
        class="flex-none"
      ></label-page>
      <!-- 项目卡片 -->
      <project-card :isClick="isClick" :project="project"></project-card>
      <!-- 成员卡片 -->
      <members-card :isClick="isClick" :members="members"></members-card>
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
      members: [
        { id: "1", name: "导师" },
        { id: "2", name: "管理员" },
        { id: "2", name: "管理员" },
        { id: "3", name: "成员" },
        { id: "3", name: "成员" },
        { id: "3", name: "成员" },
        { id: "3", name: "成员" },
        { id: "3", name: "成员" },
      ],
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
    if (this.$api.projectList.getProjectList()) {
      this.project = (await this.$api.projectList.getProjectList()).data.data;
      console.log(this.project);
    }
  },
  mounted() {},
  methods: {
    whichClick: function(e) {
      this.isClick = e;
      console.log(this.isClick);
    },
    async function() {},
  },
};
</script>

<style></style>
