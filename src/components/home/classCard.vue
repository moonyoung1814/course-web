<template>
    <div>
        <div v-for="(item,index) in classList" :key="index">
            <div class="flex flex-row ring-1 rounded shadow p-4 mb-4" v-if="item.id.startsWith(number)"> 
                <img src="../../assets/head.jpg" alt="head" class="ring-1 ring-gray-300 shadow w-16 h-16 rounded overflow-hidden">
                <div class="flex flex-col ml-4 self-center">
                    <div class="flex flex-row">
                        <p class="text-base self-center font-bold">{{item.id}}班</p>
                        <div class="flex flex-row self-center absolute right-8">
                            <p class="text-sm">知识库地址：&nbsp;</p>
                            <p class="text-sm text-blue-500 italic underline">{{item.yq_url}}</p>
                        </div>
                    </div>
                    <p class="text-sm self-center mt-2 text-gray-600">{{item.intro}}</p>             
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'classList',
        'number'
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
