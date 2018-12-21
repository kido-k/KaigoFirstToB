<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <div class="search-bar">
        <SearchCareMana/>
      </div>
      <div class="caremana-list">
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
import SearchCareMana from '~/components/Organisms/TheSearchCareMana.vue'
import CareManager from '~/components/Organisms/TheCareManager.vue'
import Footer from '~/components/Organisms/TheFooter.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Header,
    SearchCareMana,
    CareManager,
    Footer
  },

  async asyncData({ store }) {
    await store.dispatch('caremanager/fetchCaremanaList')
    await store.dispatch('fetchCategoryList')
  }
}
</script>

<style>
.container {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.search-bar {
  margin: 40px 0 0 0;
}
.caremana-list {
  margin: 40px 0 0 0;
}
</style>
