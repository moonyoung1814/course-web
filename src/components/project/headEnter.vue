<template>
    <div class="flex flex-row justify-center space-x-4">
        <div>
            <img src="../../assets/head.jpg" alt="head" class="ring-1 shadow w-8 h-8 rounded-full overflow-hidden" 
            @mouseenter="onEnterTd(e)" @mouseleave="onLeaveTd(e)">
            <div class="ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white flex flex-row
                z-10 absolute items-center px-4 py-4 mt-2" v-show="isEnter">
                <img src="../../assets/head.jpg" alt="头像" class="ring-1 shadow w-10 h-10 rounded-full overflow-hidden">
                <div class="flex flex-col ml-4">
                    <label class="text-xs text-black">张同学</label>
                    <label class="text-xs text-gray-700">20210415班</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[],
    data(){
        return{
            isEnter:false
        }
    },
    methods:{
         onEnterTd:function(){
            this.isEnter=true;
            var isEnter_=this.isEnter;
            this.$emit('whichEnter',isEnter_)
        },
        onLeaveTd:function(){
            this.isEnter=false;
            var isEnter_=this.isEnter;
            this.$emit('whichEnter',isEnter_)
        }
    },
    //初始值,子传父
    mounted:function(){
        var isEnter_=this.isEnter;
        this.$emit('whichEnter',isEnter_)
    }
}

</script>
