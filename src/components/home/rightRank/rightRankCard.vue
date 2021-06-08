<template>
  <div
    class="ring-2 rounded-md shadow-lg mt-4 mx-2 py-6 px-8 flex flex-row max-w-full"
  >
    <!-- 项目活跃度 -->
    <div class="w-full relative flex flex-row flex-wrap">
      <!-- 列表展示 -->
      <div class="flex flex-col space-y-4 w-8/12">
        <div
          class="flex flex-row items-center w-full relative"
          v-for="(item, index) in rank"
          :key="'a' + index"
        >
          <div class="flex-shrink-0 w-auto">
            <p
              class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6"
              v-if="index + 1 <= 3"
            >
              {{ index + 1 }}
            </p>
            <p
              class="text-base text-black text-center w-6 h-6"
              v-else-if="index + 1 > 3"
            >
              {{ index + 1 }}
            </p>
          </div>
          <div class="w-auto ml-4 flex-shrink-0">
            <p class="text-sm tracking-widest">{{ item.title }}</p>
          </div>
          <div class="border-dashed border mx-2 w-full"></div>
          <div class="w-auto flex-shrink-0 mr-2">
            <p class="text-sm tracking-widest">{{ item.subhead }}</p>
          </div>
        </div>
      </div>
      <!-- 图表 -->
      <div class="flex w-4/12">
        <!-- 要设置足够的宽度长度，否则不显示 -->
        <div class="w-56 h-48" id="chartPie"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["isClick", "rank"],
  data() {
    return {
      chartPie: null,
    };
  },
  methods: {
    drawPieChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chartPie = echarts.init(document.getElementById("chartPie"));
      // 生成图标
      this.chartPie.setOption({
        // 标题组件
        title: {
          text: "项目活跃度",
          //subtext: '', 副标题
          x: "center",
        },
        // 提示框组件
        tooltip: {
          // 触发类型
          trigger: "item",
          // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // 图例组件
        legend: {
          orient: "vertical",
          right: "right",
          data: ["重度", "中度", "轻度", "静默"],
        },
        // 系列
        series: [
          {
            name: "访问来源",
            //饼状图
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "重度" },
              { value: 310, name: "中度" },
              { value: 234, name: "轻度" },
              { value: 135, name: "静默" },
            ],
            //鼠标 hover 时候的高亮样式
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    drawCharts() {
      this.drawPieChart();
    },
  },
  mounted: function() {
    this.drawCharts();
  },
};
</script>
