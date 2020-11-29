<template>
  <div id="nav">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

export default {
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style></style>
