<template>
  <div class="rounded-md shadow-md space-y-10 py-12 h-full bg-white border-0">
    <ul
      :class="[
        'flex flex-none border-l-2 border-blue-500 border-r-0 transition duration-500 ease-in-out pl-4 pr-8 py-2 list-none',
        isPractice == item.practiceNum
          ? 'border-opacity-100 bg-gray-100 font-bold'
          : 'border-opacity-0 bg-white ',
      ]"
      v-for="(item, index) in practice"
      :key="index"
    >
      <li
        class="text-xs cursor-pointer flex flex-none tracking-wider"
        @click="clickPractice(item.practiceNum)"
      >
        {{ item.practiceName }}
      </li>
    </ul>
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
