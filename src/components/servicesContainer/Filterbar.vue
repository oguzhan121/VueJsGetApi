<template>
  <div class="shorting mb-30">
      <div class="row">
          <div class="col-md-6">
              <div class="view">
                  <div class="list-types grid active ">
                    <a href="shop.html">
                        <div class="grid-icon list-types-icon"></div>
                    </a>
                  </div>
                  <div class="list-types list">
                    <a href="shop-list.html">
                        <div class="list-icon list-types-icon"></div>
                    </a>
                  </div>
              </div>
              <div class="short-by float-right-sm"><span>Sort By</span>
                  <div class="select-item">
                      <select>
                          <option value="" selected="selected">Name (A to Z)</option>
                          <option value="">Name(Z - A)</option>
                          <option value="">price(low&gt;high)</option>
                          <option value="">price(high &gt; low)</option>
                          <option value="">rating(highest)</option>
                          <option value="">rating(lowest)</option>
                      </select>
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="show-item right-side float-left-sm"><span>Show</span>
                  <div class="select-item">
                      <select>
                          <option value="" selected="selected">24</option>
                          <option value="">12</option>
                          <option value="">6</option>
                      </select>
                  </div>
                  <span>Per Page</span>
                  <div class="compare float-right-sm">
                    <a href="#" class="btn btn-color">Compare (0)</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Filterbar"
    }
</script>

<style scoped>

</style>
