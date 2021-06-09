<template>
  <div class="h-screen mt-4 mx-4">
    <div class="flex flex-row relative">
      <!-- 左侧标签页 -->
      <label-page
        :practice="practice"
        @whichPractice="whichPractice"
      ></label-page>
      <!-- 右侧班级列表 -->
      <div class="w-full ml-6 relative flex flex-col">
        <class-card
          :classList="classList"
          v-show="isPractice == 1"
        ></class-card>
        <class-card
          :classList="classList"
          v-show="isPractice == 2"
        ></class-card>
        <class-card
          :classList="classList"
          v-show="isPractice == 3"
        ></class-card>
        <class-card
          :classList="classList"
          v-show="isPractice == 4"
        ></class-card>
      </div>
    </div>
  </div>
</template>

<script>
import ClassCard from "../components/class/classCard.vue";
import labelPage from "../components/labelPage.vue";
export default {
  components: { labelPage, ClassCard },
  data() {
    return {
      isPractice: "",
      practice: [
        { practiceNum: 1, practiceName: "创一班" },
        { practiceNum: 2, practiceName: "创二班" },
        { practiceNum: 3, practiceName: "创三班" },
        { practiceNum: 4, practiceName: "创四班" },
      ],
      classList: [],
    };
  },
  needSerialize: true,
  async created() {
    if (this.$api.classList.getClassList()) {
      this.classList = (await this.$api.classList.getClassList()).data.data;
      console.log(this.classList);
    }
  },
  mounted() {},
  methods: {
    whichPractice: function(e) {
      this.isPractice = e;
    },
  },
};
</script>
