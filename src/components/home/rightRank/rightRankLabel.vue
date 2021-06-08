<template>
  <div
    class="flex flex-row font-bold items-center w-full border-b-2 border-gray-200 px-16 justify-between"
  >
    <div
      :class="[
        'text-lg mx-2 border-b-2 border-red-500 px-2 transition duration-500 ease-in-out flex flex-none cursor-pointer',
        isClick == item.labelNum ? 'border-opacity-100' : 'border-opacity-0',
      ]"
      v-for="(item, index) in label"
      :key="index"
      @click="whichClick(item.labelNum)"
    >
      {{ item.labelName }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["label"],
  data() {
    return {
      isClick: "1",
    };
  },
  methods: {
    whichClick: function(e) {
      this.isClick = e;
      this.$emit("whichClick", this.isClick);
    },
  },
  mounted: function() {
    this.$emit("whichClick", this.isClick);
  },
};
</script>
