<template>
  <div>
    <BannerSlider></BannerSlider>
    <div class="mian-contain">
      <div class="container">

        <!-- CONTAIN START -->
        <section class="ptb-95 ptb-sm-60 ptb-xs-30">
          <div class="row">
          <Leftbarlayout></Leftbarlayout>
            <div class="col-md-9 col-sm-8">
              <Filterbar></Filterbar>
              <ProductsContainer></ProductsContainer>
            </div>
          </div>
        </section>
        <!-- CONTAINER END -->
      </div>
    </div>
  </div>
</template>

<script>
    import BannerSlider from "./BannerSlider";
    import Leftbarlayout from "./left-bar/Leftbarlayout";
    import Filterbar from "./servicesContainer/Filterbar";
    import ProductsContainer from "./servicesContainer/ProductsContainer";

    export default {
        name: "MainContent",
        components: {ProductsContainer, Filterbar, Leftbarlayout, BannerSlider}
    }
</script>

<style scoped>

</style>
