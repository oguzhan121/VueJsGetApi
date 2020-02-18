<template>
  <div class="sidebar-contant">
    <ul>
      <li v-for="categorys in $store.state.a.categorylist">
        <a @click="dataiall(categorys.id)">{{categorys.username}} <span>({{categorys.id}})</span> </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "CategoriList",
        data:function(){
            return{
              id:''
            }
        },
        mounted(){
          this.api_get();
        },
        methods: {
            api_get () {
              axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => (this.$store.state.a.categorylist = response.data))
                .catch(error => console.log(error))
            },
            dataiall(e){
                this.id=e;
            }
        }
    }
</script>

<style scoped>

</style>
