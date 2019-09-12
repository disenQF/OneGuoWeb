<template>
    <div class="home">
        <p class="first-screen-top">
            <span class="city">西安&nbsp;v</span>
        </p>
        <div class="content">
            <div class="content-a1">
                <swiper></swiper>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Swiper from '@/components/Swiper.vue'

    export default {
        name: 'home',
        components: {
            Swiper
        }
    }
</script>

<style>

    .first-screen-top {
        text-align: left;
        font-size: 20px;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding: 10px;
        background: linear-gradient(90deg,#39da85,#01b27a);
    }
    .city{
        font-size:1.2rem;
        color: white;
        line-height:40px;
    }

    .content{
        padding: 5px;
        margin-top: 50px;
        height: 80%;
        width: 100%;
        overflow: scroll;
    }

    .content-a1{
        height: 1000px;
    }
</style>
