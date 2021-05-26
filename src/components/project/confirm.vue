<template>
    <!-- 动画 -->
    <div :class="['transition duration-500 ease-in-out', isShowConfirm ? 'opacity-100 scale-100' : 'opacity-0 scale-0']">
        <!-- fixed相对浏览器居中 -->
        <div v-if="isShowConfirm" class="border-2 border-gray-100 rounded-md shadow-md w-3/12 h-32 z-10 fixed inset-0 m-auto flex bg-gray-50" >
            <div class="flex flex-col justify-center px-4 w-full">
                <p class="text-base font-bold self-center">{{ content }}</p>
                <div class="text-sm text-black border-t-2 mt-4 w-full">
                    <div class="flex flex-row mt-4 justify-center space-x-16">
                        <label class="transition duration-500 ease-in-out hover:text-blue-500" @click="clickFun('clickCancel')">{{ cancelText }}</label>
                        <label class="transition duration-500 ease-in-out hover:text-blue-500" @click="clickFun('clickConfirm')">{{ confirmText }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShowConfirm: false, // 用于控制整个窗口的显示/隐藏
      content: '确认加入该项目？', // 提示框的内容
      cancelText: '取消', // 取消按钮的文字
      confirmText: '确认', // 确认按钮的文字
      type: 'confirm', // 表明弹框的类型：confirm - 确认弹窗（有取消按钮）；alert - 通知弹框（没有取消按钮）
      outerData: null // 用于记录外部传进来的数据，也可以给外部监听userBehavior
    }
  },
  methods: {
    show (content, config) {
      this.content = content  

      if (Object.prototype.toString.call(config) === '[object Object]') {
        // 确保用户传递的是一个对象
        this.cancelText = config.cancelText 
        this.confirmText = config.confirmText 
        this.type = config.type 
        this.outerData = config.data
      }

      this.isShowConfirm = true
    },
    hidden () {
      this.isShowConfirm = false
      this.cancelText = '取消'
      this.confirmText = '确认'
      this.type = 'confirm'
      this.outerData = null
    },
    clickFun (type) {
      this.$emit('userBehavior', type, this.outerData)
      this.hidden()
    }
  }
}
</script>

