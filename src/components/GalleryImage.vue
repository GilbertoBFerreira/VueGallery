<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  import axios from 'axios'
  
  export default {
    data: function () {
      return {
        images: null,
        index: null
      };
    },

    methods:{
      fetchData: function() {
        var self = this

        axios.get('http://webcode.me').then(resp => {
          console.log(resp)

          // aqui é onde tens que atribuir o resultado ao array images
          self.images = [ 
                          'https://i.picsum.photos/id/107/200/200.jpg?hmac=bWV6B7Av2dY7XMiQYnj-0VMJT_fmwttT1Fumzc4Ct7g',
                          'https://i.picsum.photos/id/107/200/200.jpg?hmac=bWV6B7Av2dY7XMiQYnj-0VMJT_fmwttT1Fumzc4Ct7g',
                          'https://i.picsum.photos/id/30/200/300.jpg?hmac=qOyV_daSIK2KgaEj7CZYTR3n4xgqMNwskTxH7QMVGfg'
                        ]
        });
      }
    },

    beforeMount() {
      this.fetchData()
    },
    components: {
      'gallery': VueGallery
    },
  }
</script> 

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>