<template>
  <div>
    <!-- <v-app-bar flat dense dark  class=" darken-2" app>
            <v-row>
                <v-col>Cyrus Mabulay</v-col>
            </v-row> 
        </v-app-bar> -->
    <!--     
        <svg xmlns="http://www.w3.org/2000/svg"   style="position: absolute" viewBox="0 0 1140 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,197.3C672,213,768,203,864,176C960,149,1056,107,1152,112C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg> -->
 
      <card  :style="$vuetify.breakpoint.mobile?'width: 100%;':'width: 1150px;'" class="mx-auto transparent">
        <v-row>
          <v-col cols="12" md="4" sm="12">
            <v-card  width="400" class="py-4">
              <v-img eager
                contain
                :aspect-ratio="11 / ($vuetify.breakpoint.mobile?7:12)"
                class="mx-auto"
                src="https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/Cyrus.jpg?raw=true"
              ></v-img>
              
              <v-card-text>
                
            <v-row no-gutters>
              <v-col  style="font-family: 'Lucida Console'; text-align: center;">
                <h4  >
                  Cyrus Mabulay 
                </h4>
                <v-spacer></v-spacer>
                <small>Software Engineer</small>
              </v-col> 
            </v-row>
            <hr>
                <b>About me</b>
                <v-row no-gutters>
                  <v-col>
                    <small>
                      Working as a developer in a corporate insurance company
                      here in the Philippines, create / develop multiple
                      applications for productions such as client informations,
                      renewal insurance systems policies information entry and
                      more..
                    </small>
                  </v-col>
                </v-row>
                <br />
                <b>Dev</b>
                <v-row>
                  <v-col>
                    <img eager
                      :width="$vuetify.breakpoint.mobile?220:320"
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=CMABULAY&layout=compact"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <img eager
                      :width="$vuetify.breakpoint.mobile?220:320"
                      src="https://github-readme-stats.vercel.app/api?username=CMABULAY&theme=vue&show_icons=true&hide_border=false&count_private=true"
                    />
                  </v-col>
                </v-row>
                <br />
                <b>Connects</b>
                <v-row>
                  <v-col>
                   <a href="https://www.facebook.com/cymabulay/" target="_new"> <v-icon color="blue" >mdi-facebook-box</v-icon></a>  
                   <a href="https://github.com/CMABULAY/" target="_new">  <v-icon color="black">mdi-github-box</v-icon> </a>
                   <a href="mailto:cyrusmabulay@email.com" target="_new">    <v-icon color="red">mdi-gmail</v-icon></a>
                   <a href="viber://chat?number=09070867749" target="_new">    <v-icon color="blue">mdi-cellphone-android</v-icon></a>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" class="text-dark">
            <hr class="m-1" />
            <v-row>
              <v-col>
                <v-btn
                  small
                  style="text-transform: none"
                  color="info"
                  href="https://m.me/cymabulay" target="_new"
                  dark
                  ><v-icon size="13">mdi-comment</v-icon> Send Message</v-btn
                >
                <v-btn
                  small
                  style="text-transform: none"
                  color="info"
                  href="https://m.me/ProjectC.systems"  target="_new"
                  dark
                  ><v-icon size="13">mdi-facebook-box</v-icon> Facebook
                  page</v-btn
                >  <v-btn
                  small
                  style="text-transform: none"
                  color="warning"
                  href="viber://chat?number=09070867749" target="_new"
                  dark
                  ><v-icon size="13">mdi-phone</v-icon>  Viber </v-btn
                > 
              </v-col>
            </v-row>
            <br />

            <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel>
                    <v-expansion-panel-header>Bio</v-expansion-panel-header>
                    <v-expansion-panel-content> 
                        <table>
                        <tr>
                            <td style="width: 50%">Age:</td>
                            <td>{{ age }} - Single</td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td>English / Filipino</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>Sta Ana, Manila / Lucena, Quezon</td>
                        </tr>
                        <tr>
                            <td>Viber #: </td>
                            <td>09070867749</td>
                        </tr>  
                        <tr>
                            <td>Email:  </td>
                            <td>cyrusmabulay@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Religion:  </td>
                            <td>Born Again Christian</td>
                        </tr>
                        </table> 
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Projects</v-expansion-panel-header>
                    <v-expansion-panel-content> 
                    <v-tabs small
                        color="deep-purple accent-4 "
                        style="height: 637px; overflow-y: auto;"
                        right
                    >
                        <v-tab @click="get">Work Projects</v-tab>
                        <v-tab @click="get1">Freelance Projects</v-tab>

                        <v-tab-item style="background-color: lightgrey;">
                        <br />
                        <v-container >
                            <v-row v-for="(val, key) in data" :key="key">
                            <v-col>
                                <v-card class="px-4">
                                <v-row>
                                    <v-col cols="12" sm="8">
                                    <h4>{{ val.title }}</h4>
                                    <small
                                        ><v-icon>{{ val.icon }}</v-icon>
                                        {{ val.icon_details }}</small
                                    >
                                    <v-carousel
                                        hide-delimiters
                                        class="border elevation-2 py-4"
                                        height="200"
                                    >
                                        <v-carousel-item
                                        v-for="(v, k) in val.image"
                                        :key="k"
                                        >
                                        <v-img
                                            class="mx-auto"
                                            :src="v" eager
                                            contain
                                        ></v-img>
                                        </v-carousel-item>
                                    </v-carousel>
                                    </v-col>
                                    <v-col cols="12" sm="4">
                                    <v-card-actions
                                        v-if="val.status != 1"
                                        class="text-success"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-icon color="success"
                                        >mdi-checkbox-marked-circle-outline</v-icon
                                        >
                                        Completed
                                    </v-card-actions>
                                    <v-card-actions
                                        v-if="val.status == 1"
                                        class="text-danger"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-icon color="danger"
                                        >mdi-checkbox-multiple-blank-circle-outline</v-icon
                                        >
                                        In-progress
                                    </v-card-actions>
                                    <p>{{ val.description }}</p>
                                    </v-col>
                                </v-row>
                                <br />
                                </v-card>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-tab-item>
                        <v-tab-item style="background-color: lightgrey;">
                        <br />
                        <v-container>
                            <v-row v-for="(val, key) in data" :key="key">
                            <v-col>
                                <v-card class="px-4">
                                <v-row>
                                    <v-col cols="12" sm="8">
                                    <h4>{{ val.title }}</h4>
                                    <small
                                        ><v-icon>{{ val.icon }}</v-icon>
                                        {{ val.icon_details }}</small
                                    >
                                    <v-carousel
                                        hide-delimiters
                                        class="border elevation-2 py-4"
                                        height="200"
                                    >
                                        <v-carousel-item
                                        v-for="(v, k) in val.image"
                                        :key="k"
                                        >
                                        <v-img
                                            class="mx-auto"
                                            :src="v" eager
                                            contain
                                        ></v-img>
                                        </v-carousel-item>
                                    </v-carousel>
                                    </v-col>
                                    <v-col cols="12" sm="4">
                                    <v-card-actions
                                        v-if="val.status != 1"
                                        class="text-success"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-icon color="success"
                                        >mdi-checkbox-marked-circle-outline</v-icon
                                        >
                                        Completed
                                    </v-card-actions>
                                    <v-card-actions
                                        v-if="val.status == 1"
                                        class="text-danger"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-icon color="danger"
                                        >mdi-checkbox-multiple-blank-circle-outline</v-icon
                                        >
                                        In-progress
                                    </v-card-actions>
                                    <p>{{ val.description }}</p>
                                    </v-col>
                                </v-row>
                                <br />
                                </v-card>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-tab-item>
                    </v-tabs>
                    </v-expansion-panel-content>
                </v-expansion-panel>
 
            </v-expansion-panels>
          </v-col>
        </v-row>
      </card> 
  </div>
</template>
   
   
<script>
export default {
  data: () => ({
    data: [],
    panel: [0],
    age: "",
    
  }),
   computed: {
      sizer () {
        switch (this.$vuetify.breakpoint.name) { 
          case 'sm': return 250
          case 'md': return 220
          case 'lg': return 220
          case 'xl': return 220
        }
      },
    },
  created() {
    this.get();
    this.countAge();
  },

  methods: {
    countAge() {
      var today = new Date();
      var birthDate = new Date("01-23-1995");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    },
    get() {
      this.data = [];

      this.data.push({
        title: "Geographic Information System (GIS)",
        description:
          "System to get accumulation of the specific clients for propery insurance, summaries and graphings all the information, and pinned all the client locations.",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/riss.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/riss.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ris3s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ris1s.png?raw=true",
        ],
        icon: "mdi-account",
        icon_details: "Only me in this project.",
      });

      this.data.push({
        title: "Employee Portal Revamp",
        description:
          "A Revamp of previews employee portal, Created portal for the employees, timelogs monitoring, filing leave / official business and overtimes, service request ticketing and some additinal micro modules for hris.",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr3s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr4s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "Im the lead developer and 1 participant",
      });

      this.data.push({
        title: "Employee Portal",
        description:
          "Created portal for the employees, timelogs monitoring, filing leave / official business and overtimes, service request ticketing and some additinal micro modules for hris.",
        image: ["https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ep1s.png?raw=true", "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ep2s.png?raw=true", "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ep3s.png?raw=true"],
        icon: "mdi-account-multiple",
        icon_details: "Im the lead developer and 1 participant",
      });

      this.data.push({
        title: "PGAS System",
        description:
          "Created Multiple micro application for company productions such as Call Centers data storage, Medical Insurance Information systems, Human resources information systems, and insurance policy listings and more.",
        image: ["https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vb.png?raw=true"],
        icon: "mdi-account-multiple",
        icon_details: "We are 2 in this, im the Front-end.",
      });
      this.data.push({
        title: "MS Access projects",
        description:
          "Created Multiple micro application for company productions such as Call Centers data storage, Medical Insurance Information systems, Human resources information systems, and insurance policy listings and more.",
        image: ["https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/access.png?raw=true"],
        icon: "mdi-account",
        icon_details: "Only me in this project.",
      });
    },
    get1() {
      this.data = [];
      this.data.push({
        title: "Web based agriculture information system",
        description:
          "Isabela State University, Enhanced RPDD Project for students",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/agri1.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/agri2.png?raw=true", 
        ],
        icon: "mdi-account-multiple",
        icon_details: "Only me in this project.", 
      });
           this.data.push({
        title: "Provincial Vetirinary Clinic ",
        description:
          "Provincial Veterinary Clinic of Batangas City",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet1.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet2.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet3.png?raw=true",  
        ],
        icon: "mdi-account-multiple",
        icon_details: "Only me in this project.", 
      });
      this.data.push({
        title: "RPDD Project Proposal Database",
        description:
          "A personal information system / monitoring etc..  (privacy concern)",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdds.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdd1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdd2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdd3s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "Only me in this project.", 
      });
      this.data.push({
        title: "PROVIDER",
        description:
          "Created clients inquiries, users managements and roles, and custom chat bot using native js.",
        image: ["https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prvs.png?raw=true",
         "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prv1s.png?raw=true", 
         "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prv2s.png?raw=true"],
        icon: "mdi-account-multiple",
        icon_details: "I Participated to this project.",
      });
      this.data.push({
        title: "C.A. Ordinanza Glass Aluminum and Supplies",
        description:
          "2 involve users, 1 admin and cashiers, created roles and permissions and add prediction of sales for their report requirements,",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/invss.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/inv1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/inv2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/inv3s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "I Participated to this project.",
      });
      this.data.push({
        title: "Web based test bank and formulator system",
        description:
          "3 involve users, 1 coordinator, 1 teacher and multiple students, coordinator set exams, teacher prepare questions and students take exams and more..",
        image: ["https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmuns.png?raw=true", "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmun1s.png?raw=true", "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmun2s.png?raw=true"],
        icon: "mdi-account-multiple",
        icon_details: "I Participated to this project.",
      });
        this.data.push({
        title: "Inventory and Sales Monitoring System",
        description:
          "For security reasons, no information disclosure. ",
        image: ["https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/invent.png?raw=true"],
        icon: "mdi-account-multiple",
        icon_details: "I Colaborate to this project.",
      });
    },
  },
};
</script>