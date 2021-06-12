<template>
  <div class="flex flex-col items-center">
    <div
      :class="[
        'border',
        'border-' + color + '-300',
        'bg-' + color + '-400',
        'rounded flex items-center flex-col py-12 shadow-md px-8',
      ]"
    >
      <span
        :class="[
          'icon-' + iconName,
          'text-' + color + '-600',
          'iconfont text-6xl',
        ]"
        alt="book"
      ></span>
      <label class="text-base text-white mt-16">{{ labelName }}</label>
    </div>
    <label
      :class="['text-sm', 'text-' + color + '-500', 'tracking-wide', 'mt-6']"
      >点击查看更多></label
    >
  </div>
</template>

<script>
export default {
  props: ["iconName", "color", "labelName"],
  data() {
    return {};
  },
  methods: {},
};
</script>
