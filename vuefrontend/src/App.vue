<template>
  <v-app>
  <v-main>
      <Header/>
      <Home/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Home

  },

  data: () => ({
    //
  }),
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

