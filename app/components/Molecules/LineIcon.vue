<template>
  <section>
    <div class="icon-component">
      <LineIconImage class="image"/>
      <LineIconTitle class="title"/>
      <LineIconLabel class="label"/>
    </div>
  </section>
</template>

<style scoped>
.icon-component {
  display: inline-block;
  background-repeat: no-repeat;
}
.image {
  padding: 21px 0 0 0;
  margin: 0;
}
.title {
  padding: 0;
  margin: 15px 0 0 0;
}
.label {
  padding: 0;
  margin: 15px 0 0 0;
}
</style>


<script>
import LineIconImage from '~/components/Atoms/LineIconImage.vue'
import LineIconTitle from '~/components/Atoms/LineIconTitle.vue'
import LineIconLabel from '~/components/Atoms/LineIconLabel.vue'

export default {
  components: {
    LineIconImage,
    LineIconTitle,
    LineIconLabel
  }
}
</script>
