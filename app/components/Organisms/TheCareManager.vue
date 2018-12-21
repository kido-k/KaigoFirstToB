<template>
  <div class="care-manager-list">
    <div class="list-group">
      <ul>
        <li
          v-for="caremana in caremanalist"
          :key="caremana.name">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start qa-list">
            <div class="d-flex">
              <div class="panel-innersub main-font-color">
                <img
                  src="../../assets/caremana-image/caremana1.png"
                  alt= "">
              </div>
              <div class="panel-innermain">
                <h3>{{ caremana.name }}</h3>
                <small class="sub-label">{{ caremana.name }}</small>
                <small class="sub-label">{{ caremana.gender }}</small>
                <p class="panel-contents">{{ caremana.comment }}</p>
                <p class="qa-footer-l main-font-color">{{ caremana.major }}</p>
                <a
                  class="qa-footer-r"
                  href="#">{{ caremana.area }}</a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.care-manager-list {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 40%;
}
.qa-list {
  padding: 20px;
  margin: 24px 0 0 0;
}

.panel-innersub {
  float: left;
  margin-right: 10px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 2.625rem;
  line-height: 1;
}
.subTitle {
  display: block;
  padding: 0;
  margin: 0;
}
.panel-innermain {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 0.875rem;
}
.sub-label {
  color: #b4b4b4;
  font-weight: bold;
  line-height: 1.3;
}
.panel-contents {
  height: 88px;
  margin: 10px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.qa-footer-l {
  margin: 10px 0 0 0;
  float: left;
  font-weight: bold;
}
.qa-footer-r {
  margin: 10px 0 0 0;
  float: right;
  color: #b4b4b4;
  font-weight: bold;
  line-height: 1.3;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({ caremanalist: 'caremanager/getCaremanagers' })
  }
}
</script>
