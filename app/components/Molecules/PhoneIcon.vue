<template>
  <section>
    <div class="icon-component">
      <PhoneIconImage class="imgage"/>
      <PhoneIconTitle class="title"/>
      <PhoneIconLabel class="label"/>
    </div>
  </section>
</template>

<style scoped>
.icon-component {
  display: inline-block;
  background-repeat: no-repeat;
}
.imgage {
  padding: 27px 0 0 0;
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
import PhoneIconImage from '~/components/Atoms/PhoneIconImage.vue'
import PhoneIconTitle from '~/components/Atoms/PhoneIconTitle.vue'
import PhoneIconLabel from '~/components/Atoms/PhoneIconLabel.vue'

export default {
  components: {
    PhoneIconImage,
    PhoneIconTitle,
    PhoneIconLabel
  }
}
</script>
