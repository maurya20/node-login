<template>
  <v-app>
  <v-main>
      <Header/>
      <component :is="currentComp"></component>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import Login from "./components/user/Login";
import { bus } from '@/main.js';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Home,
    Login

  },

    data() {
    return {
      currentComp: 'Home'
    };
  },

  created() {
      bus.$on('switchComp', comp => {
           this.currentComp = comp;
      })
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
  * {
    margin: 0;
    padding: 0;
  }
</style>

