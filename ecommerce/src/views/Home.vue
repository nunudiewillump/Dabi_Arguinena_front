<template>
  <div class="home">
    <Navbar></Navbar>
    <Product></Product>
    <Cart></Cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Cart from '../components/Cart'
export default {
  name: 'Home',
  components: {
    Navbar,
    Product,
    Cart
  }
}
</script>
