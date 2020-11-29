<template>
  <div class="home d-block m-auto text-center">
    <div class="card c-xyz">
      <p class="text-primary">
        A = 21, A + B = 23, A + C = -21
      </p>
      <p><strong>The answer:</strong> B = {{ ans.b }}, C = {{ ans.c }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async created() {
    await this.$store.dispatch('bc/getResult', {
      a: 21,
      ans_b: 23,
      ans_c: -21
    })
  },
  computed: {
    ...mapState({
      ans: (state) => state.bc.ans
    })
  }
}
</script>

<style></style>
