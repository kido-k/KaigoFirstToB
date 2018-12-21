<template>
  <div class="d-flex searchbar">
    <select
      class="custom-select category">
      <option selected>カテゴリで絞る</option>
      <option
        v-for="category in categorys"
        :key="category"
        :value="category">
        {{ category }}
      </option>
    </select>
    <select
      class="custom-select area">
      <option selected>地域で絞る</option>
      <option
        v-for="category in categorys"
        :key="category"
        :value="category">
        {{ category }}
      </option>
    </select>
    <select
      class="custom-select gender">
      <option selected>性別で絞る</option>
      <option
        v-for="category in categorys"
        :key="category"
        :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.searchbar {
  width: 88%;
  margin: auto;
}
.category {
  color: rgb(165, 164, 164);
  margin: 5px;
}
.area {
  color: rgb(165, 164, 164);
  margin: 5px;
}
.gender {
  color: rgb(165, 164, 164);
  margin: 5px;
}
.feature-consult {
  margin: 0;
}
.search-bar {
  margin: 20px;
}
</style>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({ categorys: 'getCategory' })
  }
}
</script>
