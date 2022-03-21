<template>
  <div class="product">
    <Navbar></Navbar>
    <Detail></Detail>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Detail from '../components/Detail.vue'
export default {
  name: 'Product',
  components: {
    Navbar,
    Detail
  }
}
</script>
