<template>
        <v-app-bar  class="transparent"  height="120"  dense        flat     >  
             <v-avatar class="mx-12" size="70"> <v-img src="/img/project_c.png"></v-img></v-avatar>
      <v-spacer></v-spacer>  
            <v-card flat class="transparent  text-right"  >
                <v-btn class="text-danger" active-class="danger" :to="{ name: 'home' }"  text style="text-transform: none; text-decoration: none;"   > <b><h6>Home</h6></b> </v-btn>
                <v-btn class="text-danger" active-class="danger" :to="{ name: 'projects' }"  text  style="text-transform: none; text-decoration: none;"> <b><h6>Projects</h6></b></v-btn> 
                <!-- <v-btn class="text-danger" active-class="danger" :to="{ name: 'contact' }"  text  style="text-transform: none; text-decoration: none;"> <b><h6>Contact Us</h6></b> </v-btn> -->
            </v-card>
    </v-app-bar>
    
</template>
