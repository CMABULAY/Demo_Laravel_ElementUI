<template>
  <div style="min-width: 280px">
    <template v-if="user"> 
      <v-app-bar dense dark class="red darken-2" app>
        <template class="d-none">
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.xsOnly"
            @click.stop="
              mini = false;
              drawer = !drawer;
            "
          ></v-app-bar-nav-icon>
          <v-app-bar-nav-icon
            v-else
            @click.stop="mini = !mini"
          ></v-app-bar-nav-icon>
        </template>
        <v-list-item-title class="font-weight-bold hidden-sm-and-down">
          My Single Page Application Template</v-list-item-title
        >

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              text
              v-bind="attrs"
              v-on="on"
              style="text-transform: none"
              :small="$vuetify.breakpoint.smAndDown"
            >
              <v-icon class="round">mdi-account</v-icon
              ><span>{{ user.name }}</span>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              :to="{ name: 'password' }"
              style="text-decoration: none"
            >
              <v-list-item-title style="cursor: pointer"
                >Password</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="logout" style="cursor: pointer"
                >Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer
        height="100%"
        app
        v-model="drawer"
        :permanent="$vuetify.breakpoint.smAndUp"
        :mini-variant.sync="mini"
        dark
        class="danger darken-2"
      >
        <template v-slot:prepend>
          <v-list expand>
            <v-list-item style="text-decoration: none"> </v-list-item>

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
              :to="{ name: 'products' }"
              style="text-decoration: none"
            >
              <v-list-item-icon>
                <v-icon color="">mdi-tag-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Product </v-list-item-title>
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
                <v-list-item-title> Order </v-list-item-title>
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
      mini: false,
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