<template>
  <div class="home d-block m-auto text-center">
    <div class="card c-xyz">
      <p class="text-primary">
        X, Y, 5, 9, 15, 23, Z
      </p>
      <p><strong>The answer:</strong> x = {{ ans.x }}, y = {{ ans.y }}, z = {{ ans.z }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async created() {
    await this.$store.dispatch('xyz/getResult', {
      lists: ['x', 'y', 5, 9, 15, 23, 'z']
    })
  },
  computed: {
    ...mapState({
      ans: (state) => state.xyz.ans
    })
  }
}
</script>

<style></style>
