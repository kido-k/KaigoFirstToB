<template>
  <div class="login-panel">
    <div class="email-input form-group">
      <label for="exampleInputId">ログインID</label>
      <input
        id="exampleInputId"
        type="email"
        class="form-control input"
        aria-describedby="idHelp"
        placeholder="sample">
    </div>
    <div class="email-input form-group">
      <label
        class="label"
        for="exampleInputPassword">パスワード</label>
      <input
        type="password"
        class="form-control"
        placeholder="*******">
    </div>
    <div>
      <AutoLoginCheck class="chk-box"/>
    </div>
    <div>
      <div class="button login-btn">
        <button
          type="submit"
          class="btn btn-primary"
          @click="handleClickSubmit">ログイン</button>
      </div>
    </div>
    <div class="forget-btn">
      <ForgetPasswordLink/>
    </div>
  </div>
</template>

<script>
import AutoLoginCheck from '../Molecules/AutoLoginCheck.vue'
import ForgetPasswordLink from '../Atoms/ForgetPasswordLink.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AutoLoginCheck,
    ForgetPasswordLink
  },
  methods: {
    async handleClickSubmit() {
      if (this.isCreateMode) {
        try {
          await this.register({ ...this.formData })
          this.$notify({
            type: 'success',
            title: 'アカウント作成完了',
            message: `${this.formData.id}として登録しました`,
            position: 'bottom-right',
            duration: 1000
          })
          this.$router.push('/posts/')
        } catch {
          this.$notify({
            title: 'アカウント作成失敗',
            message: `既に登録されているか、不正なユーザーIDです`,
            position: 'bottom-right',
            duration: 1000
          })
        }
      } else {
        try {
          await this.login({ ...this.formData })
          this.$notify({
            type: 'success',
            title: 'ログイン成功',
            message: `${this.formData.id}としてログインしました`,
            position: 'bottom-right',
            duration: 1000
          })
          this.$router.push('/posts/')
        } catch (e) {
          this.$notify.error({
            title: 'ログイン失敗',
            message: `不正なユーザーIDです`,
            position: 'bottom-right',
            duration: 1000
          })
        }
      }
    }
  },
  ...mapActions(['login', 'register'])
}
</script>

<style scoped>
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
