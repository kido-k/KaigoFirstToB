<template>
  <section>
    <a
      class="card category-component"
      href="/">
      <CategorySampleImage class="card-img-top image"/>
      <div class="card-body subtitle">
        <CategorySampleTitle class="title"/>
        <CategorySampleLabel class="label"/>
      </div>
    </a>
  </section>
</template>

<style scoped>
.category-component {
  display: inline-block;
  background-repeat: no-repeat;
}
.image {
  padding: 0;
  margin: 0;
}
.title {
  padding: 0;
  margin: 0;
}
.label {
  padding: 0;
  margin: 4px 0 5px 0;
}
.subtitle {
  padding: 10px 20px;
  margin: 0;
}
</style>


<script>
import CategorySampleImage from '~/components/Atoms/CategorySampleImage.vue'
import CategorySampleTitle from '~/components/Atoms/CategorySampleTitle.vue'
import CategorySampleLabel from '~/components/Atoms/CategorySampleLabel.vue'

export default {
  components: {
    CategorySampleImage,
    CategorySampleTitle,
    CategorySampleLabel
  }
}
</script>
