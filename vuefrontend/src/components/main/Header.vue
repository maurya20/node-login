<template>
    <div class="header">
        <div class="nav-menu">LOGO</div>
        <div class="nav-menu"></div>
        <div class="nav-menu">Home</div>
        <div class="nav-menu">About</div>
        <div class="nav-menu">Products</div>
        <a class="nav-menu" @click="switchComponent('Login')">Login/Register</a>
    </div>
</template>

<script>
import { bus } from '@/main.js';

export default {
    props: {
        currentComp: {
            type: String,
            required: true
        }
    },

    methods: {
        switchComponent(comp) {
            bus.$emit('switchComp', comp);
        }
    }
}
</script>

<style>
    .header {
        width: 100%;
        height: 70px;
        background-color: #262d35;
    }
    .nav-menu {
        display: inline-block;
        width: 16%;
        padding-top: 23px;
        color: white;
        font-weight: bold;
    }
</style>
