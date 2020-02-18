<template>
  <div class="sidebar-contant">
    <div class="price-range mb-30">
      <div class="inner-title">Price range</div>
      <input class="price-txt" type="text" id="amount">
      <div id="slider-range"
           class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
        <div class="ui-slider-range ui-widget-header ui-corner-all"
             style="left: 9.375%; width: 53.125%;"></div>
        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
              style="left: 9.375%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all"
                                                 tabindex="0" style="left: 62.5%;"></span></div>
    </div>
    <div class="mb-20">
      <div class="inner-title">Category</div>
      <ul>
        <li><a>Bags 2 <span>(0)</span></a></li>
        <li><a>Clothing x2 2 <span>(05)</span></a></li>
        <li><a>Lingerie 2 <span>(10)</span></a></li>
      </ul>
    </div>
    <div class="mb-20">
      <div class="inner-title">Color</div>
      <ul>
        <li><a>Black <span>(0)</span></a></li>
        <li><a>Blue <span>(05)</span></a></li>
        <li><a>Brown <span>(10)</span></a></li>
      </ul>
    </div>
    <div class="mb-20">
      <div class="inner-title">Manufacture</div>
      <ul>
        <li><a>Augue congue <span>(0)</span></a></li>
        <li><a>Eu magna <span>(05)</span></a></li>
        <li><a>Ipsum sit <span>(10)</span></a></li>
      </ul>
    </div>
    <a class="btn btn-color">Refine</a></div>
</template>

<script>
    export default {
        name: "Shopby"
    }
</script>

<style scoped>

</style>
