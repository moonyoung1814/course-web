<template>
  <div class="flex flex-col ml-8 w-full">
    <right-rank-label
      :label="rankLabel"
      @whichClick="whichClick"
    ></right-rank-label>
    <right-rank-card
      :rank="projectRank"
      :class="[isClick == 1 ? '' : 'hidden']"
    ></right-rank-card>
    <right-rank-card
      :rank="docxRank"
      :class="[isClick == 2 ? '' : 'hidden']"
    ></right-rank-card>
    <right-rank-card
      :rank="docxRank"
      :class="[isClick == 3 ? '' : 'hidden']"
    ></right-rank-card>
  </div>
</template>

<script>
import RightRankLabel from "../rightRank/rightRankLabel.vue";
import RightRankCard from "../rightRank/rightRankCard.vue";
export default {
  props: ["projectRank", "docxRank"],
  components: {
    RightRankLabel,
    RightRankCard,
  },
  data() {
    return {
      isClick: "",
      rankLabel: [
        { labelNum: "1", labelName: "最热项目" },
        { labelNum: "2", labelName: "最新文档" },
        { labelNum: "3", labelName: "活跃成员" },
      ],
    };
  },
  methods: {
    whichClick: function(e) {
      this.isClick = e;
    },
  },
};
</script>
