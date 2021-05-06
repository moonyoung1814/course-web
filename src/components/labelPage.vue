<template>
    <div>
        <div class="px-7 ring-2 rounded shadow space-y-16 p-14 h-96">
                <div class="block h-5"> 
                    <label class="text-lg" @click="clickPractice_1">创一班</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out',isPractice == '1' ? 'opacity-100' : 'opacity-0']"></div>  
                </div>
                <div class="block h-5">
                    <label class="text-lg" @click="clickPractice_2">创二班</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out',isPractice == '2' ? 'opacity-100' : 'opacity-0']"></div>  
                </div>
                <div class="block h-5">
                    <label class="text-lg" @click="clickPractice_3">创三班</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out',isPractice == '3' ? 'opacity-100' : 'opacity-0']"></div>  
                </div>
                <div class="block h-5">
                    <label class="text-lg" @click="clickPractice_4">创四班</label>
                    <div :class="['border border-blue-500 w-full transition duration-500 ease-in-out',isPractice == '4' ? 'opacity-100' : 'opacity-0']"></div>  
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data(){
        return{
            isPractice:"1"
        }
    },
    methods:{
        clickPractice_1:function(e){
            this.isPractice="1"
            e=this.isPractice
            this.$emit('whichPractice',e)
        },
        clickPractice_2:function(e){
            this.isPractice="2"
            e=this.isPractice
            this.$emit('whichPractice',e)
        },
        clickPractice_3:function(e){
            this.isPractice="3"
            e=this.isPractice
            this.$emit('whichPractice',e)
        },
        clickPractice_4:function(e){
            this.isPractice="4"
            e=this.isPractice
            this.$emit('whichPractice',e)
            
        }
    },
    //初始值,子传父
    mounted:function(e){
        e=this.isPractice
        this.$emit('whichPractice',e)
    }
}

</script>
