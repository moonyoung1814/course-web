<template>
    <div class="flex flex-col items-center w-2/12">
        <div class="relative px-7 py-12 ring-2 rounded shadow w-full">
            <div class="space-y-16">
                <span :class="['h-5 border-b-2 border-blue-500 w-full transition duration-500 ease-in-out',isClick == '1' ? 'border-opacity-100' : 'border-opacity-0']"> 
                    <label class="text-lg" @click="clickClassProjects">班级项目</label> 
                </span>
                <span :class="['h-5 border-b-2 border-blue-500 w-full transition duration-500 ease-in-out',isClick == '2' ? 'border-opacity-100' : 'border-opacity-0']"> 
                    <label class="text-lg" @click="clickClassMembers">班级成员</label>
                </span>
                <span :class="['h-5 border-b-2 border-blue-500 w-full transition duration-500 ease-in-out',isClick == '3' ? 'border-opacity-100' : 'border-opacity-0']"> 
                    <label class="text-lg" @click="clickShareData">共享资料</label>
                </span>
            </div>
        </div>
        <label class="text-sm text-blue-500 tracking-wide mt-8" @click="skipToClassList">>返回所有班级</label>
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
            this.$router.go(-1);
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
