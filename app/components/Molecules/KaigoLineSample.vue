<template>
  <section>
    <div class="middle-title">
      <KaigoLineTitle/>
      <KaigoLineLabel class="label"/>
      <KaigoLinePicture/>
    </div>
  </section>
</template>

<style scoped>
.middle-title {
  display: inline-block;
  background-repeat: no-repeat;
}
.label {
  margin: 20px 0 0 0;
}
</style>


<script>
import KaigoLineTitle from '~/components/Atoms/KaigoLineTitle.vue'
import KaigoLineLabel from '~/components/Atoms/KaigoLineLabel.vue'
import KaigoLinePicture from '~/components/Atoms/KaigoLinePicture.vue'

export default {
  components: {
    KaigoLineTitle,
    KaigoLineLabel,
    KaigoLinePicture
  }
}
</script>
