<template>
    <div class="flex flex-col">
        <div class="flex flex-row space-x-64 font-bold items-center max-w-full h-7 mx-16">
            <div>
                <label class="text-lg" @click="clickProject">项目</label>
                <div class="border border-red-500 mt-0.5 max-w-full" v-show="isClick == 1"></div>  
            </div>
            <div>
                <label class="text-lg" @click="clickDocx">文档</label>
                <div class="border border-red-500 mt-0.5 max-w-full" v-show="isClick == 2"></div>  
            </div>
            <div>
                <label class="text-lg" @click="clickPerson">成员</label>
                <div class="border border-red-500 mt-0.5 max-w-full" v-show="isClick == 3"></div>
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