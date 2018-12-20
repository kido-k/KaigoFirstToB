<template>
  <section>
    <div class="middle-title">
      <KaigoAnswerTitle/>
      <KaigoAnswerLabel class="label"/>
      <KaigoAnswerPicture class="picture"/>
    </div>
  </section>
</template>

<style scoped>
.middle-title {
  display: inline-block;
  margin: 0;
  padding: 0;
}
.label {
  margin: 20px 0 0 0;
}
.picture {
  margin: 40px 0 0 0;
}
</style>


<script>
import KaigoAnswerTitle from '~/components/Atoms/KaigoAnswerTitle.vue'
import KaigoAnswerLabel from '~/components/Atoms/KaigoAnswerLabel.vue'
import KaigoAnswerPicture from '~/components/Atoms/KaigoAnswerPicture.vue'

export default {
  components: {
    KaigoAnswerTitle,
    KaigoAnswerLabel,
    KaigoAnswerPicture
  }
}
</script>
