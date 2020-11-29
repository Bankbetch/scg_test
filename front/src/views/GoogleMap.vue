<template>
  <div class="map-body d-block text-center">
    <p><strong>From:</strong> {{ getPoint.origin }}</p>
    <p><strong>To:</strong> {{ getPoint.destination }}</p>
    <div v-if="results.point" class="mb-3">
      <img :src="`http://maps.googleapis.com/maps/api/staticmap?size=600x400&path=${results.point}&key=${key}`" alt="googlemap" />
    </div>
    <p><strong>distance:</strong> {{ results.distance.text }}</p>
    <p><strong>duration:</strong> {{ results.duration.text }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      key: process.env.VUE_APP_ENV_GOOGLEMAP_KEY,
      getPoint: {
        origin: 'SCG สำนักงานใหญ่ บางซื่อ',
        destination: 'เซ็นทรัลเวิลด์'
      }
    }
  },
  async created() {
    await this.$store.dispatch('mapApi/getResult', this.getPoint)
  },
  computed: {
    ...mapState({
      results: (state) => state.mapApi.results
    })
  }
}
</script>

<style></style>
