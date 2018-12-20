<template>
  <div>
    <div class="pdca d-flex bd-highlight">
      <LineIcon class="line p-2 flex-fill bd-highlight"/>
      <PhoneIcon class="phone p-2 flex-fill bd-highlight"/>
      <LisenceIcon class="lisence p-2 flex-fill bd-highlight"/>
    </div>
    <div>
      <SignUpButton class="signup-btn"/>
    </div>
  </div>
</template>

<script>
import LineIcon from '../Molecules/LineIcon.vue'
import PhoneIcon from '../Molecules/PhoneIcon.vue'
import LisenceIcon from '../Molecules/LisenceIcon.vue'
import SignUpButton from '../Atoms/SignUpButton.vue'

export default {
  components: {
    LineIcon,
    PhoneIcon,
    LisenceIcon,
    SignUpButton
  }
}
</script>

<style scoped>
.pdca {
  margin: 0 auto;
  box-sizing: inherit;
  background-repeat: no-repeat;
}
.signup-btn {
  margin: 40px 0 0 0;
}
</style>
