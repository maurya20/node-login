<template>
    <div class="header">
        <div class="nav-menu text-left"><h1>LOGO</h1></div>
        <div class="nav-menu"></div>
        <a class="nav-menu" @click="switchComponent('Home')" :disabled="currentComp === 'Home'">Home</a>
        <div class="nav-menu">About</div>
        <a class="nav-menu" @click="switchComponent('Products')" :disabled="currentComp === 'Products'">Products</a>
        <a class="nav-menu" @click="switchComponent('Login')" :disabled="currentComp === 'Login'">Login/Register</a>
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
        padding-top: 8px;
        color: white;
        font-weight: bold;
    }
</style>
