<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.mainImage"
      img-alt="30em"
      img-top
      tag="article"
      style="max-width: 40rem; margin: auto; min-width: 40rem"
      class="mb-2"
    >
      <b-card-text>
        {{ product.price }}
      </b-card-text>
      <b-card-text>
        {{ product.description }}
      </b-card-text>
        <b-button @click="addProductToCart(product.id)">Add</b-button>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Detail",

  components: {},
    data: function() {
    return {
      product : {},
    }
  },
  created() {
    this.fetchProductById()
  },
  methods: {
    fetchProductById(){
      fetch("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => response.json())
      .then((response) => {
        this.product = response;
      })
      },
      
    addProductToCart(id){
     fetch('http://localhost:3000/products/'+id)
    .then((response)=>response.json())
    .then((response)=>{
      this.$store.commit("addToCart", response)
    })
    }
  },
};
</script>
