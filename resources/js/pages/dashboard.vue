<template>
   <div>
     <v-card height="400" class=" p-4">
        <h4 class="text-dark">Welcome: {{ user.name }} </h4>
        <span class="caption"> Thank you for your spare time checking my hands-on.</span> 
       
     </v-card>
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
    data: () => ({
      data: '',
    }),
    created() {  
      if(this.user){ 
      }else{

         this.$router.push({ name: "login" }).catch((errr) => {});
      }
    },
};
</script>