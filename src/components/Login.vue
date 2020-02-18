<template>
  <div class="mian-contain">
    <div class="container">

      <!-- CONTAIN START ptb-95-->
      <section class="checkout-section ptb-95 ptb-sm-60 ptb-xs-30">
        <div class="row">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-lg-6 col-md-8 col-sm-8 col-lg-offset-3 col-sm-offset-2">
                <form action="post" class="main-form full">
                  <div class="row">
                    <div class="col-xs-12 mb-20">
                      <div class="heading-part heading-bg">
                        <h2 class="heading"><i class="fa fa-clock-o" aria-hidden="true"></i>Customer Login</h2>
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="input-box">
                        <label for="login-email">Email address</label>
                        <input id="login-email" type="email" required="" placeholder="Email Address">
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="input-box">
                        <label for="login-pass">Password</label>
                        <input id="login-pass" type="password" required="" placeholder="Enter your Password">
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="check-box left-side"> <span>
                        <input type="checkbox" name="remember_me" id="remember_me" class="checkbox">
                        </span>
                        <label for="remember_me">Remember Me</label>
                      </div>
                      <button name="submit" type="submit" class="btn-color right-side">Log In</button>
                    </div>
                    <div class="col-xs-12"><a title="Forgot Password" class="forgot-password mtb-20" href="#">Forgot
                      your password?</a>
                      <hr>
                    </div>
                    <div class="col-xs-12">
                      <div class="new-account align-center mt-20"><span>New to Gecko?</span> <a class="link"
                                                                                                title="Register with Gecko"
                                                                                                href="register.html">Create
                        New Account</a></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- CONTAINER END -->
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
