<template>
  <!-- 右侧问答 -->
  <div class="relative inline-block ml-8 w-10/12">
    <div
      v-for="(item, index) in ask"
      :key="index"
      class="border-b-2 border-gray-200 py-8 px-8"
    >
      <right-question-ask
        :ask="item"
        @changeAnswer="changeAnswer"
      ></right-question-ask>
      <right-question-answer :isAnswer="item.isAnswer"></right-question-answer>
    </div>
  </div>
</template>

<script>
import RightQuestionAsk from "./rQAsk.vue";
import RightQuestionAnswer from "./rQAnswer.vue";
export default {
  props: [],
  components: {
    RightQuestionAsk,
    RightQuestionAnswer,
  },
  data() {
    return {
      isAnswer: "",
      ask: [
        {
          id: "0",
          name: "某同学",
          content: "今天是几月几日？",
          date: "2021.04.01",
          time: "12:00",
          isAnswer: false,
        },
        {
          id: "1",
          name: "某同学",
          content: "今天是几月几日？",
          date: "2021.04.01",
          time: "12:00",
          isAnswer: false,
        },
      ],
    };
  },
  methods: {
    changeAnswer: function(e) {
      this.ask[e].isAnswer = !this.ask[e].isAnswer;
    },
  },
};
</script>
