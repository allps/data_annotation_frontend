<template>
  <div class="container">

      <div v-for="(item, index) in images"  v-bind:key="item" >

          <img id= "item" class="image-class" :src="getImageUrl(item)"  @click="hideImage(item, index)">

      </div>


  </div>
</template>

<script>

import axios from "axios";
export default {
  name: 'HelloWorld',

  data(){
    return{
          images: [],
    }
  },

  mounted() {
    this.axiosInstance = axios.create({
      timeout: 50000,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });

    this.getImages();
  },

  methods:{
      getImages(){
          let pageNumber = window.location.href.split('/').slice(-1)[0];
        this.axiosInstance.post('/images/' + pageNumber )
        .then(response =>{
          this.$data.images = response.data;
        }).catch(error=>{
          console.log(error.response.data)
        })
      },

      getImageUrl(item){
          return 'http://127.0.0.1:4000/'+item;
      },
      hideImage(item, i){
          let data = {
              'bad_image': item
          };
          console.log(data);
          document.getElementsByTagName('img')[i].style.display = 'none';
          this.axiosInstance.post('/bad-image', data)
          .then(response=>{
              console.log(response.data);
          }).catch(error=>{
              console.log(error.response.data);
          })
      },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.image-class{
    border: black;
    width:300px;
    height:200px;
    float: left;
}
.container{
    padding: 0rem 3rem 0rem 5rem;
}
</style>
