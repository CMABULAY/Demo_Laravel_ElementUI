<template>
  <div>
    <v-overlay :value="overlay">
      <v-progress-circular
        size="55"
        color="red darken-2"
        indeterminate
      ></v-progress-circular>
    </v-overlay>

    <template v-if="token == ''">
      <v-row>
        <v-col xl="2" cols="5">
          <v-img src="/img/logo2.png"> </v-img>
        </v-col>
        <v-col xl="4"> </v-col>
        <v-col xl="6" cols="12">
          <v-card
            class="transparent mx-auto text-white skewed"
            flat
            width="450"
          >
            <v-img src="/img/login.png">
              <br /><br /><br />
              <br />
              <v-card width="370" flat class="transparent mx-auto">
                <v-container>
                  <v-form
                    ref="form"
                    @submit.prevent="login"
                    @keydown="form.onKeydown($event)"
                  >
                    <v-row>
                      <v-col cols="12">
                        <h3
                          style="
                            color: #616161;
                            font-size: 20px;
                            text-align: center;
                          "
                        >
                          Login
                        </h3>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="12" class="py-1">
                        <v-text-field
                          :rules="rules.formRules"
                          label="Email"
                          hide-details=""
                          outlined
                          dense
                          persistent-placeholder
                          v-model="form.email"
                          :error-messages="
                            form.errors.has('email')
                              ? form.errors.errors.email[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" class="py-1">
                        <v-text-field
                          label="Password"
                          outlined
                          small
                          :rules="rules.passwordRules"
                          dense
                          hide-details=""
                          v-model="form.password"
                          :error-messages="
                            form.errors.has('password')
                              ? form.errors.errors.password[0]
                              : ''
                          "
                          :append-icon="!value ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="() => (value = !value)"
                          :type="!value ? 'password' : 'text'"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12">
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            dark
                            depressed
                            color="yellow darken-2"
                            :loading="form.busy"
                            @click="login"
                            style="text-decoration: none"
                            >Ok</v-btn
                          >
                        </v-card-actions>
                        <v-card-actions>
                          <v-btn
                            link
                            depressed
                            plain
                            style="text-decoration: none; text-transform: none"
                            text
                            to="info"
                          >
                            <v-icon size="70" color="brown lighten-2"
                              >mdi-face</v-icon
                            >
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            dark
                            text
                            color="warning"
                            :loading="form.busy"
                            :to="'/register'"
                            style="text-decoration: none; text-transform: none"
                            >Register</v-btn
                          >
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img class="float-right" src="/img/other1.png" width="300"> </v-img>
        </v-col>
      </v-row>
    </template>
    <v-snackbar
      bottom
      v-model="snackbar.status"
      min-width="auto"
      color="brown lighten-2"
      class="text-center"
      :vertical="$vuetify.breakpoint.xsOnly"
      timeout="2500"
      ><span
        ><v-icon :color="snackbar.iconColor">{{
          `mdi-${snackbar.iconText}`
        }}</v-icon></span
      >{{ snackbar.message
      }}<template v-slot:action="{ attrs }">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-bind="attrs"
          color="info"
          text
          @click="snackbar.active = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </template></v-snackbar
    >
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
export default {
  middleware: "guest",

  metaInfo() {
    return { title: "Login" };
  },
  data: () => ({
    user: true,
    drawer: null,
    appName: window.config.appName,
    notif: 1,
    overlay: false,
    snackbar: { status: false, message: "" },
    token: "",
    value: false,
    rules: {
      formRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "This is required",
        (v) => (v && v.length <= 10) || "Password must be 10 characters",
      ],
    },
    form: new Form({
      email: "",
      password: "",
    }),
    remember: false,
  }),

  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        this.overlay = true;
        // Submit the form.
        await axios
          .post("/api/login", this.form)
          .then((result) => {
            // Save the token.
            this.user = false;
            this.$store
              .dispatch("auth/saveToken", {
                token: result.data.token,
                remember: this.remember,
              })
              .then((res) => {
                this.snackbar.status = true;
                this.snackbar.iconText = "check";
                this.snackbar.iconColor = "primary";
                this.snackbar.message = "Login Successful.";
                this.$store.dispatch("auth/fetchUser");
                this.$router.push({ name: "dashboard" }).catch((errr) => {});
              });
          })
          .catch((result) => {
            this.overlay = false;
            this.snackbar.status = true;
            this.snackbar.iconText = "alert";
            this.snackbar.iconColor = "error";
            this.snackbar.message = "Invalid Email or Password.";
          });
      }
    },
  },
};
</script>