<template>
  <div class="care-manager-list">
    <v-container
      grid-list-md
      text-xs-center
      class="list">
      <v-layout
        row
        wrap>
        <v-flex
          v-for="caremana in caremanalist"
          :key="caremana.name"
          xs5
          class="list-margin">
          <a
            href="#"
            class="list-group-item list-group-item-action care-list">
            <div class="d-flex">
              <div class="panel-innersub main-font-color">
                <img
                  src="../../assets/caremana-image/caremana1.png"
                  alt= ""
                  class="image">
              </div>
              <div class="panel-innermain">
                <div class="list">
                  <h3>{{ caremana.name }}</h3>
                  <h3 class="gender">&nbsp;&nbsp;&nbsp;{{ caremana.gender }}</h3>
                </div>
                <p class="panel-contents">{{ caremana.comment }}</p>
                <p class="footer-left main-font-color">{{ caremana.major }}</p>
                <a
                  class="footer-right"
                  href="#">{{ caremana.area }}</a>
              </div>
            </div>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.care-manager-list {
  display: inline-block;
}
.care-list {
  padding: 5px 10px;
  margin: 0 0 0 9%;
}
.image {
  max-width: 120px;
  max-height: 120px;
}
.list-margin {
  margin: auto;
  margin: 2%;
}
.panel-innersub {
  float: left;
  margin-right: 10px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 2.625rem;
  line-height: 1;
}
.panel-innermain {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 0.875rem;
}
.gender {
  margin: 4px 0 0 0;
  font-size: 16px;
  color: #b4b4b4;
  font-weight: bold;
}
.panel-contents {
  height: 88px;
  margin: 10px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list {
  display: flex;
}
.footer-left {
  margin: 10px 0 0 0;
  float: left;
  font-weight: bold;
}
.footer-right {
  margin: 10px 0 0 0;
  float: right;
  color: #b4b4b4;
  font-weight: bold;
  line-height: 1.3;
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ caremanalist: 'caremanager/getCaremanagers' })
  }
}
</script>
