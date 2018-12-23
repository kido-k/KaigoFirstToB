<template>
  <div class="main">
    <div class="header">
      <Header/>
    </div>
    <div class="login-form">
      <div class="login-panel">
        <div class="email-input form-group">
          <label for="exampleInputId">ログインID</label>
          <input
            v-model="formData.id"
            type="text"
            class="form-control input"
            placeholder="sample">
        </div>
        <div class="email-input form-group">
          <label
            class="label"
            for="exampleInputPassword">パスワード</label>
          <input
            v-model="formData.password"
            type="password"
            class="form-control"
            placeholder="*******">
        </div>
        <div>
          <div
            v-show="alert"
            class="alert alert-danger"
            role="alert">
            ログインIDが不正か、パスワードが間違っています
          </div>
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
        <div>
          <ForgetPasswordLink class="forget-btn"/>
        </div>
      </div>
    </div>
    <div class="">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Organisms/TheHeader.vue'
import Footer from '~/components/Organisms/TheFooter.vue'
import AutoLoginCheck from '~/components/Molecules/AutoLoginCheck.vue'
import ForgetPasswordLink from '~/components/Atoms/ForgetPasswordLink.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ redirect, store }) {
    const user = store.getters['user']
    if (user) {
      redirect(`/users/${user.id}`)
    }
    return {
      alert: false,
      formData: {
        id: '',
        password: ''
      }
    }
  },
  components: {
    Header,
    AutoLoginCheck,
    ForgetPasswordLink,
    Footer
  },
  methods: {
    async handleClickSubmit({ redirect, store }) {
      await this.login({ ...this.formData })
      if (this.isLoggedIn) {
        redirect(`/users/${user.id}`)
      }
      this.alert = true
    },
    ...mapActions(['login', 'register'])
  }
}
</script>

<style scoped>
.main {
  margin: auto;
  justify-content: center;
}
.login-form {
  width: 50%;
  margin: 40px 0 0 25%;
  padding: 0px;
}
</style>
