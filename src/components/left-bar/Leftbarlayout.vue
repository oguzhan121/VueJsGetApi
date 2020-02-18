<template>
    <div class="col-md-3 col-sm-4 mb-xs-30">
        <div class="sidebar-block">
            <div class="sidebar-box listing-box mb-40"><span class="opener plus"></span>
                <div class="sidebar-title">
                  <h3>Categories</h3>
                </div>
                <CategoriList></CategoriList>
            </div>
            <div class="sidebar-box gray-box mb-40"><span class="opener plus"></span>
                <div class="sidebar-title">
                  <h3>Shop by</h3>
                </div>
                <Shopby></Shopby>
            </div>
            <div class="sidebar-box mb-40 visible-sm visible-md visible-lg">
                <a>
                  <img src="images/left-banner.jpg">
                </a>
            </div>
            <div class="sidebar-box sidebar-item"><span class="opener plus"></span>
                <div class="sidebar-title">
                  <h3>Best Seller</h3>
                </div>
                <BestSeller></BestSeller>
             </div>
        </div>
    </div>
</template>

<script>
    import CategoriList from "./CategoriList";
    import Shopby from "./Shopby";
    import BestSeller from "./BestSeller";

    export default {
        name: "Leftbarlayout",
        components: {BestSeller, Shopby, CategoriList}
    }
</script>

<style scoped>

</style>
