<template>
  <div
    style="display:inline-block;background-color:lightgrey;padding: 1em;border-radius: 2em 2em;margin-top: 4em;position: fixed"
  >
    <div>CARRITO</div>
    <div v-for="item in $store.state.cart" :key="item.id">

      {{ item.name }} - {{ item.price }}

    </div>
    <div>TOTAL</div>
    <div>{{ $store.getters.totalCart }}</div>
    <b-button style="margin-left: 1em"><router-link to="/checkout" style="decoration-text:none;  color: white; ">Checkout</router-link></b-button>

    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Cart",
  components: {},
  methods: {
    productsInCart(id){
       fetch('http://localhost:3000/products/'+id)
    .then((response)=>response.json())
    .then((response)=>{
      this.$store.commit("addToCart", response)
    })
    
    // let prodInCart = [] 
    // this.$store.state.getCart.forEach(element => {
      
    //   prodInCart :
    //   [
    //     [
    //       element.id,
    //       element.name,
    //       quantity = 1
    //     ]
    //   ]
    // });
    
  }
}
}
</script>
