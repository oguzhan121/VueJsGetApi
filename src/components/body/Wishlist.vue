<template>
    <li class="cart-icon"><a href="#"> <span> <small class="cart-notification">2</small> </span> </a>
                      <div class="cart-dropdown header-link-dropdown">
                        <ul class="cart-list link-dropdown-list">
                          <li><a class="close-cart"><i class="fa fa-times-circle"></i></a>
                            <div class="media"><a class="pull-left">
                              <img alt="Onlineshop" src="static/images/1.jpg"></a>
                              <div class="media-body"><span><a>Women's bag</a></span>
                                <p class="cart-price">$14.99</p>
                                <div class="product-qty">
                                  <label>Qty:</label>
                                  <div class="custom-qty">
                                    <input type="number" name="qty" value="1" title="Qty" class="input-text qty">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li><a class="close-cart"><i class="fa fa-times-circle"></i></a>
                            <div class="media">
                              <a class="pull-left">
                                <img alt="Onlineshop" src="static/images/2.jpg">
                              </a>
                              <div class="media-body"><span><a>Women's bag</a></span>
                                <p class="cart-price">$14.99</p>
                                <div class="product-qty">
                                  <label>Qty:</label>
                                  <div class="custom-qty">
                                    <input type="number" name="qty" value="1" title="Qty" class="input-text qty">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <p class="cart-sub-totle">
                          <span class="pull-left">Cart Subtotal</span>
                          <span class="pull-right">
                            <strong class="price-box">$29.98</strong>
                          </span>
                        </p>
                        <div class="clearfix"></div>
                        <div class="mt-20">
                          <a href="#" class="btn-color btn">Cart</a>
                          <a href="#" class="btn-color btn right-side">Checkout</a>
                        </div>
                      </div>
                    </li>
</template>

<script>
    export default {
        name: "Wishlist"
    }
</script>

<style scoped>

</style>
