<template>
  <div class="checkout">
    <Navbar></Navbar>
    <Ticket></Ticket>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Ticket from '../components/Ticket'
export default {
  name: 'Checkout',
  components: {
    Navbar,
    Ticket
  }
}
</script>
