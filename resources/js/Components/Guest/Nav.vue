<template>
        <v-app-bar  class=""  dark dense  fixed   flat     > 
      
      <v-spacer></v-spacer> 
      <v-app-bar-nav-icon
        color="black"
        v-if="user"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon> 
        
  <v-card flat class="transparent  text-right"  >
      <v-btn small text style="text-transform: none;" href="#home" > Home</v-btn>
      <v-btn small text style="text-transform: none;" href="#portfolio"> Portfolio</v-btn>
      <v-btn small text style="text-transform: none;"> Project C</v-btn>
      <v-btn small text style="text-transform: none;"> Contact </v-btn>
  </v-card>
    </v-app-bar>
    
</template>
