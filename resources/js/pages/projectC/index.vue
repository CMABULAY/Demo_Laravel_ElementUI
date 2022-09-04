
<template>
  <div>
    <section class="base">
      <video src="/img/vid.mp4" muted autoplay loop></video>
    </section>
    <navy />
    <v-card flat class="transparent" height="1600">
      <v-row>
        <v-col cols="6">
          <v-container>
            <v-card flat class="mx-auto transparent" width="480" height="530">
              <h4 class="caption"><b> We Provide </b></h4>
              <strong style="font-size: 45px"
                >Website Application Development Services</strong
              >
              <br />
              for Start-ups & Mid-sized companies <br /><br />
              <v-btn :to="{ name: 'projects'}" style="text-transform: none" outlined width="150"
                >Learn more</v-btn
              >
              <v-btn href="#contact" style="text-transform: none" dark color="red" width="150"
                >Get in touch</v-btn
              >
            </v-card>
          </v-container>
        </v-col>
      </v-row>
      <v-card flat>
      <v-card flat height="110" color=" grey lighten-2" class="p-4">
        <v-card flat class="transparent text-center">
          <strong style="font-size: 25px">Our Services</strong></v-card
        >
      </v-card>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-row no-gutters class="text-right">
              <v-col cols="6">
                <v-img height="450" contain src="/img/service3.gif"></v-img
              ></v-col>
              <v-col cols="6">
                <div class="text-subtitle-1">
                  <strong
                    >Develop Dynamic Website
                    <v-icon color="red" right>mdi-microsoft</v-icon></strong
                  >
                </div>
                <h6 class="">
                  A dynamic website or dynamic web page contains information
                  that changes, depending on the viewer, data or other factors.
                  <br />
                </h6>
                <v-card-text>
                  Created from the scratch.
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  ><br />
                  Latest Version of Libraries.
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  ><br />
                  Based in your (wire frame, charts, diagrams, etc...).
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  ><br />
                  Secured and accurate, Functionality wise.
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  ><br />
                  Compatible in any server side databases.
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  ><br />
                  Chat support.
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  ><br />
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="6">
            <v-row>
              <v-col cols="6">
                <div class="text-subtitle-1">
                  <strong>
                    <v-icon color="red" left>mdi-code-braces</v-icon> Customize
                    your exsiting project</strong
                  >
                </div>
                <h6 class="">
                  We customize your exsiting websit outside of the terms and
                  condition of your exsiting providers.
                  <br />
                </h6>
                <v-card-text>
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  >Design, Responsiveness, scriptings.<br />
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon
                  >Functions, API and other responses.<br />
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon>Based
                  Backend queries connections, database setups. <br />
                  <v-icon size="10" left>mdi-checkbox-blank-circle</v-icon>Chat
                  Support.<br />
                </v-card-text>
              </v-col>
              <v-col cols="6">
                <v-img height="350" contain src="/img/service1.gif"></v-img
              ></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card flat height="90" color=" grey lighten-2" class="p-4">
        <v-card flat class="transparent text-center">
          <strong style="font-size: 25px">Get In touch</strong></v-card
        >
      </v-card>

      <v-card-text id="contact">
        <v-row >
          <v-col cols="6">
            <v-card class="image-card" flat height="320">
              <v-card width="710" class="transparent" flat dark>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-card-actions>
                    <v-icon size="30" left>mdi-google-maps</v-icon>
                    <h6>
                      <b> Address: </b><br />
                      1683, Brgy. San Isidro, Dian Street, Makati, Metro Manila.
                    </h6></v-card-actions></v-col
                  >
                  <v-col cols="12">
                            <v-card-actions>
                    <v-icon size="30" left>mdi-google-maps</v-icon>
                    <h6>
                      <b> Address: </b><br />
                      1263 Eco road, Brgy. Isabang, Lucena City
                    </h6></v-card-actions>
                    </v-col
                  >
                </v-row>
                <v-row>
                   <v-col cols="12"><hr class="m-0 white">
                    <v-card-actions>
                    <v-icon size="30" left>mdi-cellphone-wireless</v-icon>
                    <h6>
                      <b> Viber / Phone #: </b><br />
                     09070867749
                    </h6></v-card-actions></v-col
                  >
                </v-row>
                <v-row>
                   <v-col cols="12"> <hr class="m-0 white">
                    <v-card-actions>
                    <v-icon size="30" left>mdi-email-variant</v-icon>
                    <h6>
                      <b> Email Address: </b><br />
                      (upon request)
                    </h6></v-card-actions></v-col
                  >
                </v-row>
              </v-card>
            </v-card>

            <iframe
              width="100% "
              height="320"
              src="https://maps.google.com/maps?q=Dian%201638&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            >
            </iframe>
          </v-col> 
          <v-col>
            <span><h4>Message Us</h4></span>
            <v-btn fab  small    style="text-transform: none; text-decoration: none;" target="_blank" href="https://www.facebook.com/ProjectC.systems"> <v-icon   color="blue"  >mdi-facebook</v-icon> </v-btn>   Facebook<br> <br>
             <v-btn fab  small style="text-transform: none; text-decoration: none;" target="_blank" href="viber://chat?number=09070867749">   <v-icon color="blue" >mdi-phone</v-icon> </v-btn>  Viber <br>
        </v-col>
          
          </v-row
      ></v-card-text></v-card>
    </v-card>
  </div>
</template> 
   <style scoped>
.base {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 105vh;
  padding: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.base video {
  position: absolute;
  top: -120;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-card {
  position: absolute;
  padding: 20px;
  background: linear-gradient(to right, rgb(7, 7, 7), transparent 100%);
  font: 18px Arial, sans-serif;
}
</style> 
<script>
import navy from "./Components/nav.vue";
export default {
  mounted() {
    var x = document.getElementById("myAudio");
    x.volume = 0.2;
  },
  metaInfo() {
    return { title: "Home" };
  },
  components: {
    navy, 
  },
};
</script>
