<template>
    <div class="max-w-full overflow-hidden">
        <div class="ring-2 rounded-md shadow-lg m-2 py-4 px-8" v-show="isClick == 1">
            <div class="flex flex-col mb-3" v-for="(item,index) in projectRank" :key="'a'+index">
                <div :class="['flex flex-row mt-2 items-center transition duration-500 ease-in-out']" >
                <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6" v-if="index+1 <= 3">{{index+1}}</p>
                <p class="text-base text-black text-center w-6 h-6" v-else-if="index+1 > 3">{{index+1}}</p>
                <p class="text-sm ml-8 tracking-widest">{{item.projectName}}</p>
                <p class="text-sm mx-2">----------------</p>
                <p class="text-sm tracking-widest">{{item.studentName}}</p>
                </div> 
            </div>
        </div>
        <div class="ring-2 rounded-md shadow-lg m-2 py-4 px-8" v-show="isClick == 2">
            <div class="flex flex-col mb-3" v-for="(item,index) in docxRank" :key="'b'+index">
                <div class="flex flex-row mt-2 items-center">
                    <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6" v-if="index+1 <= 3">{{index+1}}</p>
                    <p class="text-base text-black text-center w-6 h-6" v-else-if="index+1 > 3">{{index+1}}</p>
                    <p class="text-sm ml-8 tracking-widest">{{item.docxName}}</p>
                    <p class="text-sm mx-2">----------------</p>
                    <p class="text-sm tracking-widest">{{item.projectName}}</p>
                </div> 
            </div>
        </div>
        <div class="ring-2 rounded-md shadow-lg m-2 py-4 px-8" v-show="isClick == 3">
            <div class="flex flex-col mb-3" v-for="(item,index) in projectRank" :key="'c'+index">
                <div class="flex flex-row mt-2 items-center">
                    <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6" v-if="index+1 <= 3">{{index+1}}</p>
                    <p class="text-base text-black text-center w-6 h-6" v-else-if="index+1 > 3">{{index+1}}</p>
                    <p class="text-sm ml-8 tracking-widest">{{item.docxName}}</p>
                    <p class="text-sm mx-2">----------------</p>
                    <p class="text-sm tracking-widest">{{item.projectName}}</p>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "isClick",
        "projectRank",
        "docxRank"
    ],
    data(){
        return{
            
        }
    },
    methods:{
        
    },
    mounted:function(){
      
    }
}
</script>