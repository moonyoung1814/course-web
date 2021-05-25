<template>
    <div class="ring-2 shadow-md rounded-md flex flex-col items-center py-4 px-16 w-full">
        <ul class="list-disc text-sm text-gray-700 space-y-2 tracking-wider">
            <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
            <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
            <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
            <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
            <li>{{projectDocx}}&nbsp;&nbsp;........................&nbsp;&nbsp;{{docxTime}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:[
        'projectDocx',
        'docxTime'
    ],
    data(){
        return{
            
        }
    },
    methods:{
         
    },
}

</script>
