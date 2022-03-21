<template>
  <div class="detail">
    <Navbar></Navbar>
    <DetailComponent></DetailComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailComponent from '../components/Detail'
import Navbar from '../components/Navbar'
export default {
  name: 'Detail',
  components: {
    Navbar,
    DetailComponent
  }
}
</script>
