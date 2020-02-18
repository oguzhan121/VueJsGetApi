<template>
  <header class="navbar navbar-custom" id="header">
    <HeaderTop></HeaderTop>
    <HeaderBottom></HeaderBottom>
  </header>
</template>

<script>
    import HeaderTop from "./HeaderTop";
    import HeaderBottom from "./HeaderBottom";
    export default {
        name: 'header',
        components: {HeaderBottom, HeaderTop},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>

</style>
