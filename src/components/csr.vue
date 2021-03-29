<template>
  <div>
    {{customer[0]}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'csr',
  data() {
    return {
      customer: []
    }
  },

  async created() {
    let customer = (await axios.get('http://47.94.168.183:7001/api/customer')).data.data
    console.log(customer)
    this.customer = customer
  } 
}
</script>

<style>

</style>