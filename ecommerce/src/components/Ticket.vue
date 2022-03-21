<template>
  <div>
      <div>
  <b-card title="CART">
    <b-card-text>
      <div v-for="item in $store.state.cart" :key="item.id" style="width-min: 30em,margin: auto">

      {{ item.name }}

    </div><br>
    </b-card-text>

    <b-card-text>
    <div>{{ $store.getters.totalCart }} $</div></b-card-text>
<div>
    <b-button variant="danger" style="margin: 1em" @click="$store.commit('cleanCart')">Clean</b-button>
    <b-button variant="success" style="margin: 1em" @click="checkoutCart()">Buy</b-button>
</div>
  </b-card>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ticket",
  components: {},
  methods: {
    checkoutCart(){
      
        fetch(`http://localhost:3000/cart/`, {
          method: 'POST',
          body: JSON.stringify(this.$store.state.cart),
          headers: {
           Accept: "application/json",
          "Content-Type": "application/json"
          },
        })
        .then(() => {
          this.$store.commit("checkout")
        })
        .catch((error) => {
          console.error('Error', error)
          return false
        })
      }
    
    }
};
</script>
