<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="l in slides">{{ l }}</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    let data = {

    };
    export default {
        name: 'Swiper',
        data: ()=>{
            return {
                slides: ['A', 'B', 'C', 'D']
            }
        },
        mounted:()=>{
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
            });


        }
    }

</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 200px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>