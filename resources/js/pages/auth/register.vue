<template>
    <v-card class="mx-auto" width="400">
   <v-overlay :value="overlay">
        <v-progress-circular
          size="55"
          color="red darken-2"
          indeterminate
        ></v-progress-circular>
      </v-overlay>


            <v-form
              ref="form" 
            >
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
                    <v-btn 
                      dark
                      block 
                      color="red darken-2"
                      @click="register"
                      :loading="form.busy" 
                      style="text-transform: none; font-size: 20px"
                      >OK</v-btn
                    >
                  </v-col>
                </v-row>
                 <v-row>
                  <v-col cols="12">
                  
                    <v-btn small color="info"  to="/login">Back to Login</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
          </v-card> 
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
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
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
        await axios
          .post("/api/register", this.form)
          .then((result) => {
        
              Swal.fire(result.data.message,
                          'Email has been sent.',
                          'info'); 
              this.form.reset();
                this.overlay = false;
          }) ;
      }
    },
  },
};
</script>