<template>
  <v-card-text>
    <v-row>
      <v-col xl="2" cols="12">  
         
            <v-btn
              color="#f8f2e0"
              large class="m-1"
              style="text-transform: none; color: #ce6666" @click="otherPage"
              ><v-icon size="15">mdi-account</v-icon> My Profile</v-btn
            >    <v-btn
              color="#f8f2e0"
              large  class="m-1"
              style="text-transform: none; color: #ce6666" @click="otherPage"
              ><v-icon size="15">mdi-hexagon</v-icon> Others</v-btn
            >  <v-btn
              color="#f8f2e0"
              large  class="m-1"
              style="text-transform: none; color: #ce6666" @click="otherPage"
              ><v-icon size="15">mdi-hexagon</v-icon> Others</v-btn
            >
      </v-col>
      <v-col xl="10" cols="12">
        <notelist/>
      </v-col> 
    </v-row> 
        <v-card class=" d-none transparent mx-auto text-white skewed pt-0" flat   width="450">
          <v-img src="/img/login.png" style="  height: 400px; padding: 80px;"> 
            <v-card height="200" width="430" flat class="transparent mx-auto">
              <v-container>
                <h4 class="text-dark">Hi {{ user.name }},</h4>
                <span class="caption h4">
                  You don't have any todo list for today
                </span>
              </v-container>
            </v-card> 
             <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>ok</v-btn>
            </v-card-actions>
          </v-img>  
       
        </v-card>

  </v-card-text>  
</template>

<script>
import { mapGetters } from "vuex";
import notelist from './notes/todo.vue'
import Swal from "sweetalert2";
export default {
  
  metaInfo() {
    return { title: "Dashboard" };
  },
  components: {
    notelist
  },
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data: () => ({
    data: "",
  }),
  created() {
    if (this.user) {
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
  methods:{
    otherPage(){
       Swal.fire({
         title: 'Sorry, this page is unable for now.',
         html: 'You can only access dashboard :)'
       }); 
    }, 
    
  }
};
</script>