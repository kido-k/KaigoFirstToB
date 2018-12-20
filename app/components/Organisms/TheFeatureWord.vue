<template>
  <div>
    <div class="feature-search">
      <FeatureSearchTitle class="title"/>
      <div class="d-flex">
        <FeatureSearchWord class="btn"/>
        <FeatureSearchWord class="btn"/>
        <FeatureSearchWord class="btn"/>
        <FeatureSearchWord class="btn"/>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureSearchTitle from '../Atoms/FeatureSearchTitle.vue'
import FeatureSearchWord from '../Atoms/FeatureSearchWord.vue'

export default {
  components: {
    FeatureSearchTitle,
    FeatureSearchWord
  }
}
</script>

<style scoped>
.feature-search {
  margin: 0;
}
.title {
  margin: 40px 0 0 0;
}
.btn {
  margin: 40px 0 0 0;
}
</style>
