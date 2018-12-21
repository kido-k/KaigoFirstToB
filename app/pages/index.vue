<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <div class="feature-consult">
        <CareManager/>
      </div>
      <div class="">
        <Footer/>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import CareManager from '~/components/Organisms/TheCareManager.vue'
import Footer from '~/components/Organisms/TheFooter.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Header,
    CareManager,
    Footer
  },

  async asyncData({ store }) {
    await store.dispatch('qalist/fetchQAList')
  }
}
</script>

<style>
.container {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.middlecontent {
  background-color: #e2eff8;
  margin: 40px 0 0 0;
  padding: 40px 0;
}
.pdca {
  margin: 40px 0 0 0;
}
.feature-word {
  padding: 30px 0 0 0;
  margin: 0 0 0 0;
}
.feature-consult {
  padding: 30px 0 0 0;
  margin: 0 0 0 0;
}
.ask-category {
  margin: 0px;
  padding: 0px;
}
</style>
