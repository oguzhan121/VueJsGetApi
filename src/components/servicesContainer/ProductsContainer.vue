<template>
  <div class="product-listing">
    <Products></Products>
    <Readmore></Readmore>
  </div>
</template>

<script>
    import Readmore from "./Readmore";
    import Products from "./Products";
    export default {
        name: "ProductsContainer",
        components: {Products, Readmore}
    }
</script>

<style scoped>

</style>
