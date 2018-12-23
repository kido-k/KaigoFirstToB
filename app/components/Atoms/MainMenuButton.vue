<template>
  <div class = "menuBtn">
    <button
      class="btn btn-outline-secondary non-border"
      type="button"
    >
      <v-icon large>menu</v-icon>
      <br>
      <p class="text">メニュー</p>
    </button>
  </div>
</template>

<style>
.menuBtn {
  display: inline-block;
  padding: 0;
  margin: 0;
}
.non-border {
  border-style: none;
  padding: 0 5px;
}
.text {
  font-size: 10px;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.login-panel {
  display: inline-block;
  width: 100%;
  padding: 16px;
  margin: 0;
}
.title {
  padding: 0;
  margin: 40px 0 0 0;
  text-align: center;
}
.chk-box {
  margin: 24px 0 0 0;
}
.login-btn {
  margin: 24px 0 0 0;
}
.forget-btn {
  margin: 24px 0 0 0;
}
.button {
  text-align: center;
  display: block;
}
.button > button {
  width: 210px;
  height: 64px;
  font-size: 18px;
}
</style>
