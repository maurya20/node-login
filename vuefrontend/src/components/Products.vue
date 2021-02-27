<template>
    <div class="products">
            <div v-for="item in x" v-bind:key="item.id" class="block">
                <p>Title:{{item.title}}</p>
                <p>Category:{{item.category}}</p>
                <img v-bind:src="(item.image)" alt="image" width="200" height="200">
                <p>Price:{{item.price}}</p>
            </div>
        </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    Vue.use(VueAxios,axios);

    export default {
        data()
        {
            return{x:undefined}
        },
        mounted() {
            Vue.axios.get('https://fakestoreapi.com/products')
            .then((resp)=>{
                this.x=resp.data;

                console.warn(resp.data)
            })
        }
    }
</script>

<style>
    .products {
        width: 100%;
        margin-top: 50px;
    }
    .block {
        width: 23%;
        height: 350px;
        display: inline-block;
        border: 1px solid black;
        margin: 5px;
    }
</style>