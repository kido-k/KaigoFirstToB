<template>
  <div class="middle">
    <KaigoLineSample class="left-component"/>
    <KaigoAnswerSample class="right-component"/>
  </div>
</template>

<script>
import KaigoLineSample from '../Molecules/KaigoLineSample.vue'
import KaigoAnswerSample from '../Molecules/KaigoAnswerSample.vue'

export default {
  components: {
    KaigoLineSample,
    KaigoAnswerSample
  }
}
</script>

<style>
.middle {
  display: flex;
  margin: 0 auto;
  box-sizing: inherit;
  background-repeat: no-repeat;
}
.left-component {
  text-align: center;
  width: 40%;
  margin: 0 2% 0 10%;
}
.right-component {
  text-align: center;
  width: 40%;
  margin: 0;
}
</style>
