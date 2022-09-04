<template>
  <div style="min-width: 280px">
    <template v-if="user">
      <v-app-bar height="90" dense dark color="#ce6666" class=" darken-2" app>
        <template class="d-none">
          <!-- <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.xsOnly"
            @click.stop="
              mini = false;
              drawer = !drawer;
            "
          >
          </v-app-bar-nav-icon> -->
          <!-- <v-app-bar-nav-icon 
            v-else
            @click.stop="mini = !mini"
          >
          </v-app-bar-nav-icon> -->
        </template>
        <v-row>
          <v-col cols="2">
            <v-img src="img/logo2.png" width="100"></v-img>
          </v-col> 
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card-actions>
              <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                depressed
                  dark 
                  color="#f8f2e0"
                  v-bind="attrs"
                  v-on="on"
                  style="text-transform: none; color: #ce6666;"
                  :small="$vuetify.breakpoint.smAndDown"
                >
                  <v-icon>mdi-settings</v-icon>
                </v-btn>
              </template>
              <v-list width="200">
                <v-list-item @click="logout">
                  <v-list-item-title  style="cursor: pointer"
                    ><v-icon>mdi-account</v-icon> {{ user.name }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title  style="cursor: pointer"
                    ><v-icon>mdi-logout</v-icon> Logout
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-app-bar>
      
      <v-navigation-drawer
        height="100%"  
        app
        v-model="drawer"
        :permanent="$vuetify.breakpoint.smAndUp"
        :mini-variant.sync="mini"
        dark
        class=" danger darken-2"
      >
        <template v-slot:prepend>
          <v-list expand>
            <v-list-item style="text-decoration: none">
               </v-list-item>

            <v-list-item
              link
              :to="{ name: 'home' }"
              style="text-decoration: none"
            >
              <v-list-item-icon>
                <v-icon color="">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Home </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          

             <v-list-item
              link
              :to="{ name: 'orders' }"
              style="text-decoration: none"
            >
              <v-list-item-icon>
                <v-icon color="">mdi-basket</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Account </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>
    </template>
  </div>
</template> 

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    },
  },
};
</script>