<template>
    <div class="flex flex-col">
        <div class="relative inline-block px-7 py-12 ring-2 rounded shadow w-32 h-80">
            <div class="space-y-16">
                <div class="h-5"> 
                    <label class="text-lg" @click="clickClassProjects">班级项目</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out', isClick == '1' ? 'opacity-100' : 'opacity-0']"></div>  
                </div>
                <div class="h-5">
                    <label class="text-lg" @click="clickClassMembers">班级成员</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out', isClick == '2' ? 'opacity-100' : 'opacity-0']"></div>  
                </div>
                <div class="h-5">
                    <label class="text-lg" @click="clickShareData">共享资料</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out', isClick == '3' ? 'opacity-100' : 'opacity-0']"></div>
                </div>
            </div>
        </div>
        <label class="text-sm text-blue-500 tracking-wide mt-8" @click="skipToClassList">>点击进入其他班级</label>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data(){
        return{
            isClick:"1"
        }
    },
    methods:{
        clickClassProjects:function(){
            this.isClick="1"
            var isClick_ = this.isClick
            this.$emit('whichClick',isClick_)
        },
        clickClassMembers:function(){
            this.isClick="2"
            var isClick_ = this.isClick
            this.$emit('whichClick',isClick_)
        },
        clickShareData:function(){
            this.isClick="3"
            var isClick_ = this.isClick
            this.$emit('whichClick',isClick_)
        },
        skipToClassList:function(){
            this.$router.push('/classList');
        },
        skipToProject:function(){
            this.$router.push('/project');
        }
    },
    //初始值,子传父
    mounted:function(){
        var isClick_ = this.isClick
        this.$emit('whichClick',isClick_)
    }
}

</script>
