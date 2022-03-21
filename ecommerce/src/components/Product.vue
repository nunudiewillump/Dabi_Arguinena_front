<template>
  <div style="width:60%;display:inline-flex;margin-top:4em;flex-wrap:wrap">
    <b-card-group deck v-for="item in $store.state.products" :key="item.id">
      <b-card
        :title="item.name"
        :img-src="item.mainImage"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;margin:2em;min-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ item.price }}
        </b-card-text>
        <b-card-text>
          {{ item.short }}
        </b-card-text>
        <b-button @click="addProductToCart(item.id)">Add</b-button>
        <router-link :to="{name: 'Detail', params: {id:item.id}}"><b-button>Detail</b-button></router-link>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Product",
  components: {},
  methods: {

    addProductToCart(id){
     fetch('http://localhost:3000/products/'+id)
    .then((response)=>response.json())
    .then((response)=>{
      this.$store.commit("addToCart", response)
    })
    }
}
};
</script>
