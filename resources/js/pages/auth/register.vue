<template>
  <div>
    <v-overlay :value="overlay">
      <v-progress-circular
        size="55"
        color="red darken-2"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-row>
      <v-col xl="2" cols="5">
        <v-img src="/img/logo2.png"> </v-img>
      </v-col>
      <v-col xl="8" cols="12">
        <v-card class="transparent mx-auto text-white skewed" flat width="550">
          <v-img src="/img/login.png">
            <br /><br />
            <br />

            <v-card width="430" flat class="transparent mx-auto">
              <v-container>
                <v-form ref="form">
                  <v-card-text class="pa-4 pa-xl-7 pa-lg-7 pa-md-5 pa-sm-5">
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <h3 class="font-weight-bold" style="color: #616161">
                          Registration
                        </h3>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="12" class="py-1">
                        <v-text-field
                          :rules="rules.nameRules"
                          label="Name"
                          outlined
                          hide-details=""
                          dense
                          persistent-placeholder
                          v-model="form.name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="12" class="py-1">
                        <v-text-field
                          :rules="rules.formRules"
                          label="Email"
                          outlined
                          hide-details=""
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
                          persistent-placeholder
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
                            @click="register"
                            style="text-decoration: none; text-transform: none"
                            :loading="form.busy"
                            >Ok</v-btn
                          >
                        </v-card-actions>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="warning"
                            style="text-decoration: none; text-transform: none"
                            to="/login"
                            >Back to Login</v-btn
                          >
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-form>
              </v-container>
            </v-card>
          </v-img>
        </v-card>
      </v-col>
      <v-col xl="2"> </v-col>
    </v-row>

    <v-row class="d-none">
      <v-col>
        <v-img class="float-right" src="/img/other1.png" width="300"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Form from "vform";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  middleware: "guest",
  metaInfo() {
    return { title: "Registration" };
  },
  data: () => ({
    user: true,
    appName: window.config.appName,
    overlay: false,
    snackbar: { status: false, message: "" },
    value: false,
    rules: {
      formRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [(v) => !!v || "This is required"],
      passwordRules: [
        (v) => !!v || "This is required",
        (v) => (v && v.length <= 10) || "Password must be 10 characters",
      ],
    },
    form: new Form({
      name: "",
      email: "",
      password: "",
    }),
    remember: false,
  }),

  methods: {
    async register() {
      if (this.$refs.form.validate()) {
        this.overlay = true;
        // Submit the form.
        await axios.post("/api/register", this.form).then((result) => {
          Swal.fire(result.data.message);
          this.form.reset();
          this.overlay = false;
        });
      }
    },
  },
};
</script>