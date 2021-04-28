<template>
    <div class="border border-gray-300 rounded shadow max-w-full mt-1 py-4 px-8">
        <!-- 并行v-for key值要不同 -->
        <div v-for="(item,index) in projectRank" :key="'a'+index" class="flex flex-col mb-3" v-show="isClick == 1">
            <div class="flex flex-row mt-2 items-center">
              <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6">{{item.projectRank}}</p>
              <p class="text-sm ml-8 tracking-widest">{{item.projectName}}</p>
              <p class="text-sm mx-2">----------------</p>
              <p class="text-sm tracking-widest">{{item.studentName}}</p>
            </div> 
        </div>
        <div v-for="(item,index) in docxRank" :key="'b'+index" class="flex flex-col mb-3" v-show="isClick == 2">
            <div class="flex flex-row mt-2 items-center">
                <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6">{{item.docxRank}}</p>
                <p class="text-sm ml-8 tracking-widest">{{item.docxName}}</p>
                <p class="text-sm mx-2">----------------</p>
                <p class="text-sm tracking-widest">{{item.projectName}}</p>
            </div> 
        </div>
        <div v-for="(item,index) in docxRank" :key="'c'+index" class="flex flex-col mb-3" v-show="isClick == 3">
            <div class="flex flex-row mt-2 items-center">
                <p class="text-base text-white text-center border-red-500 rounded bg-red-500 w-6 h-6">{{item.docxRank}}</p>
                <p class="text-sm ml-8 tracking-widest">{{item.docxName}}</p>
                <p class="text-sm mx-2">----------------</p>
                <p class="text-sm tracking-widest">{{item.projectName}}</p>
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