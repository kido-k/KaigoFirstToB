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
</style>
