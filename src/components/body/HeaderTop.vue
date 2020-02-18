<template>
    <div class="header-top">
      <div class="container">
        <div class="header-inner">
          <div class="row">
            <div class="col-md-4">
              <div class="top-link top-link-left visible-lg visible-md">
                <fieldset>
                  <span class="ui-selectmenu-button ui-widget ui-state-default ui-corner-all" tabindex="0"
                        id="country-button" role="combobox" aria-expanded="false" aria-autocomplete="list"
                        aria-owns="country-menu" aria-haspopup="true" style="width: 81px;">
                    <span class="ui-icon ui-icon-triangle-1-s"></span>
                    <span class="ui-selectmenu-text">English</span>
                  </span>
                </fieldset>
              </div>
            </div>

            <Logo></Logo>

            <div class="col-md-4 col-sm-6 col-xs-6">
              <div class="right-side float-none-sm position-r">
                <button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button"><i
                  class="fa fa-bars"></i>
                </button>
                <div class="right-side float-left-xs header-right-link">
                  <ul>
                    <li class="main-search">
                      <div class="header_search_toggle desktop-view">
                        <form>
                          <div class="search-box">
                            <input class="input-text" type="text" placeholder="Search entire store here...">
                            <button class="search-btn"></button>
                          </div>
                        </form>
                      </div>
                    </li>

                    <li class="account-icon"><a href="#"><span></span></a>
                      <div class="header-link-dropdown account-link-dropdown">
                        <ul class="link-dropdown-list">
                          <li><span class="dropdown-title">Default welcome msg!</span>
                            <ul>
                              <li><a href="login.html">Sign In</a></li>
                              <li><a href="register.html">Create an Account</a></li>
                            </ul>
                          </li>
                          <li><span class="dropdown-title">Language :</span>
                            <ul>
                              <li><a class="active" href="#">English</a></li>
                              <li><a href="#">French</a></li>
                              <li><a href="#">German</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <Wishlist></Wishlist>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Logo from "./Logo";
    import Wishlist from "./Wishlist";
    export default {
        name: "HeaderTop",
        components: {Wishlist, Logo}
    }
</script>

<style scoped>

</style>
