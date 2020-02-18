<template>
  <div id="app">
    <Header></Header>
      <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/body/Header";
import Footer from "./components/Footer";
export default {
  name: 'App',
    components: {Footer, Header}
}
</script>

<style>

</style>
