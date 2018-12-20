<template>
  <section>
    <div class="midle-title">
      <LisenceIconImage class="imgage"/>
      <LisenceIconTitle class="title"/>
      <LisenceIconLabel class="label"/>
    </div>
  </section>
</template>

<style scoped>
.midle-title {
  display: inline-block;
  background-repeat: no-repeat;
}
.imgage {
  padding: 0;
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
import LisenceIconImage from '~/components/Atoms/LisenceIconImage.vue'
import LisenceIconTitle from '~/components/Atoms/LisenceIconTitle.vue'
import LisenceIconLabel from '~/components/Atoms/LisenceIconLabel.vue'

export default {
  components: {
    LisenceIconImage,
    LisenceIconTitle,
    LisenceIconLabel
  }
}
</script>
