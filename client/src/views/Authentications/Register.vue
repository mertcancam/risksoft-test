<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="email" type="text" class="form-control" placeholder="Email" autocomplete="email" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="password" type="password" class="form-control" placeholder="Password" autocomplete="new-password" />
                </b-input-group>

                <b-button variant="success" @click="register" block>Create Account</b-button>
                <b-button variant="info" @click="clear" block>Clear</b-button>
                <div class="danger-alert" v-html="error" />
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.userId);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(err);
        
      }
    },
    clear() {
      (this.email = ""), (this.password = "");
    }
  }
}
</script>
