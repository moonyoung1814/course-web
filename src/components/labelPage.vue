<template>
  <div class="px-6 ring-2 rounded-md shadow-md space-y-16 py-14">
    <div
      :class="[
        'flex flex-none border-b-2 border-blue-500 transition duration-500 ease-in-out px-1',
        isPractice == item.practiceNum
          ? 'border-opacity-100'
          : 'border-opacity-0',
      ]"
      v-for="(item, index) in practice"
      :key="index"
    >
      <span
        class="text-lg cursor-pointer flex flex-none"
        @click="clickPractice(item.practiceNum)"
        >{{ item.practiceName }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["practice"],
  data() {
    return {
      isPractice: "1",
    };
  },
  methods: {
    clickPractice: function(e) {
      switch (e) {
        case 1: {
          this.isPractice = "1";
          this.$emit("whichPractice", "1");
          break;
        }
        case 2: {
          this.isPractice = "2";
          this.$emit("whichPractice", "2");
          break;
        }
        case 3: {
          this.isPractice = "3";
          this.$emit("whichPractice", "3");
          break;
        }
        default: {
          this.isPractice = "4";
          this.$emit("whichPractice", "4");
        }
      }
    },
  },
  //   初始值,子传父
  mounted: function() {
    this.$emit("whichPractice", this.isPractice);
  },
};
</script>
