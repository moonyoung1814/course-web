<template>
  <div class="flex flex-row mx-8 mt-8 relative">
    <!-- <div class="absolute right-4 w-16 flex flex-col">
            <label :class="['iconfont icon-jiahao self-center',isCreate ? 'text-blue-900 text-4xl':'text-gray-500 text-3xl']" @click="createProject"></label>
        </div> -->
    <div class="flex flex-col w-3/12 items-center">
      <label class="text-2xl font-bold tracking-widest self-center">{{
        project.name
      }}</label>
      <div class="ring-1 rounded shadow px-8 py-4 mt-8">
        <p class="text-sm text-gray-700">{{ project.intro }}</p>
      </div>
      <button
        :class="[
          'mt-8 w-1/2 py-2 text-center  text-white text-sm ring-2  rounded-md shadow-md transition duration-300 ease-in-out',
          isJoin
            ? 'bg-gray-500 text-gray-700 ring-gray-300'
            : 'bg-blue-500 ring-blue-200',
        ]"
        @click="joinProject()"
      >
        {{ buttonText }}
      </button>
      <!-- ref获取子组件data confirm确认框-->
      <confirm ref="myConfirm" @userBehavior="userBehaviorFun"></confirm>
    </div>
    <div class="w-9/12 pl-6">
      <div class="ring-2 rounded-md shadow-lg px-8 py-4">
        <ul class="list-disc">
          <li class="text-sm text-gray-700 ">{{ project.detail }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from "../components/project/confirm.vue";
// import headEnter from '../components/project/headEnter.vue'
// import MenuCard from '../components/project/menuCard.vue';
export default {
  components: { Confirm },
  data() {
    return {
      project: [],
      docxTime: "2021.04.15",
      isEnter: false,
      isCreate: false,
      isJoin: false,
      buttonText: "",
      type: "",
      path: this.$route.params.id,
      outerData: null,
    };
  },
  // 在当前路由改变，但是该组件被复用时调用
  beforeRouteUpdate() {
    this.path = this.$route.params.id;
  },
  // 服务端渲染
  needSerialize: true,
  async created() {
    // if (this.$api.projectList.getProjectList()) {
    //   let projectList = (await this.$api.projectList.getProjectList()).data
    //     .data;
    //   // 遍历数组，返回符合条件的数组
    //   let whichProject = projectList.filter((value) => {
    //     return value.id == this.path;
    //   });
    //   if (whichProject) {
    //     this.project = whichProject[0];
    //     console.log(this.project);
    //   } else console.log("赋值失败");
    // } else console.log("error");
    this.project = (
      await this.$api.projectList.getProject(this.path)
    ).data.data;
    console.log(this.project);
  },
  methods: {
    joinProject: function() {
      if (this.isJoin == false) {
        // 点击按钮展示confirm提示框
        this.$refs.myConfirm.show(
          this.$refs.myConfirm.content,
          this.$refs.myConfirm.configObj
        );
      } else {
        this.isJoin = !this.isJoin;
      }
      this.assignButtonText();
    },
    assignButtonText: function() {
      if (this.isJoin == true) {
        this.buttonText = "已加入";
      } else {
        this.buttonText = "加入该项目";
      }
    },
    userBehaviorFun(type, outerData) {
      if (type == "clickConfirm") {
        this.isJoin = true;
      } else {
        this.isJoin = false;
      }
      this.outerData = outerData;
      this.assignButtonText();
    },
  },
  mounted() {
    this.assignButtonText();
  },
};
</script>
