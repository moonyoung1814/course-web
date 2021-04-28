<template>
    <div>
        <div class="w-36 h-72 flex flex-col items-center">
        <div :class="['border','border-'+bgColor+'-300','bg-'+bgColor+'-400','w-32','h-64','rounded','flex','items-center','flex-col','py-12','shadow-md']">
          <div class="w-16 h-32">
            <img :src="imageUrl" alt="book">
          </div>
          <label class="text-base text-white">当前课程</label>
        </div>
        <label :class="['text-sm','text-'+textColor+'-500','tracking-wide','mt-6']">点击查看更多></label>
      </div>
    </div>
</template>

<script>
export default {
    props:[
        'imageUrl',
        'bgColor',
        'textColor'
    ],
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>