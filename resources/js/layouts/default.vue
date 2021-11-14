<template>
  <div >
    <navbar />
    <v-img :aspect-ratio=" 22/11.6  " :max-width="$vuetify.breakpoint.xs?'400':null"     src="/img/bg.jpg">
      <div class="">
        <child />
      </div>
    </v-img>
  </div>
</template> 
<script>
import Navbar from '../Components/Nav.vue'; 
export default {
  middleware: "auth",
  name: "MainLayout", 
  components: {
    Navbar,
  },
};
</script>
