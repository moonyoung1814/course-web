<template>
    <div class="flex flex-col">
        <div class="flex flex-row space-x-40 font-bold items-center max-w-full mx-20">
            <div>
                <label class="text-lg mx-2" @click="clickProject">活跃项目</label>
                <div :class="['border border-red-500 w-full transition duration-500 ease-in-out',isClick == '1' ? 'opacity-100' :'opacity-0']"></div>  
            </div>
            <div>
                <label class="text-lg mx-2" @click="clickDocx">最新文档</label>
                <div :class="['border border-red-500 w-full transition duration-500 ease-in-out',isClick == '2' ? 'opacity-100' :'opacity-0']"></div>  
            </div>
            <div>
                <label class="text-lg mx-2" @click="clickPerson">关注成员</label>
                <div :class="['border border-red-500 w-full transition duration-500 ease-in-out',isClick == '3' ? 'opacity-100' :'opacity-0']"></div>
            </div>
        </div>
        <div class="border border-gray-200 mt-1"></div>
    </div>
</template>

<script>
export default {
    props:[
        
    ],
    data(){
        return{
            isClick:"1"
        }
    },
    methods:{
        clickProject:function(){
            this.isClick="1";
            var isClick_=this.isClick;
            this.$emit("whichClick",isClick_)
        },
        clickDocx:function(){
            this.isClick="2";
            var isClick_=this.isClick;
            this.$emit("whichClick",isClick_)
        },
        clickPerson:function(){
            this.isClick="3";
            var isClick_=this.isClick;
            this.$emit("whichClick",isClick_)
        },
    },
    mounted:function(){
        var isClick_=this.isClick;
        this.$emit("whichClick",isClick_)
    }
}
</script>