<template  >
  <div>
    <navguest />
    <section class="base">
      <video src="/img/vids.mp4" muted autoplay loop></video>
    </section>
    <v-row>
      <v-col cols="5" v-if="!$vuetify.breakpoint.mobile">
        <v-avatar size="540" style="margin-top: 200px"
          ><v-img
            eager
            contain
            :aspect-ratio="13 / ($vuetify.breakpoint.mobile ? 32 : 25)"
            src="https://github.com/CMABULAY/Image-bank/blob/39762f4ced1a91d94ad85e39fa815dbe6ce46725/cyrus1.png?raw=true"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" lg="6">
        <v-container id="home">
          <v-card
            class="transparent"
            style="margin-top: 100px"
            :height="!$vuetify.breakpoint.mobile ? 520 : 270"
            dark
            flat
          >
            <div v-if="!$vuetify.breakpoint.mobile">
              <h1
                style="
                  padding-left: 0px;
                  margin: 0px;
                  font-size: 20px;
                  font-family: Garamond;
                "
              >
                PHP developer, Laravel, Vuejs and more...
              </h1>
              <h1
                style="
                  padding: 0px;
                  margin: 0px;
                  line-height: 70px;
                  font-size: 70px;
                  font-family: Franklin Gothic Medium;
                "
              >
                I am a Web Developer
              </h1>
              <h1 style="margin: 0px; font-size: 20px; font-family: Garamond">
                <small
                  >from Quezon Province and currently living in Makati City
                  (dian street), I enjoy building everything from capstone and
                  small business sites to rich dynamic SPA web applications, If
                  you are looking for a expiriences yet cheep developer you can
                  get in touch me here.
                </small>
              </h1>
            </div>
            <div v-else>
              <h1
                style="
                  padding-left: 0px;
                  margin: 0px;
                  font-size: 15px;
                  font-family: Garamond;
                "
              >
                PHP developer, Laravel, Vuejs and more...
              </h1>
              <h1
                style="
                  padding: 0px;
                  margin: 0px;
                  line-height: 20px;
                  font-size: 30px;
                  font-family: Franklin Gothic Medium;
                "
              >
                I am a Web Developer
              </h1>
              <h1 style="margin: 0px; font-size: 12px; font-family: Garamond">
                <small
                  >from Quezon Province and currently living in Makati City, I
                  enjoy building everything from capstone and small business
                  sites to rich dynamic SPA web applications, If you are looking
                  for a expirienced yet cheep website developer you can get in
                  touch me here.
                </small>
              </h1>
            </div>
            <hr />
            <v-row no-gutters>
              <v-col cols="12" class="text-right">
                <v-row no-gutters>
                  <v-col lg="4" cols="12">
                    <v-btn
                      href="mailto:cyrusmabulay@email.com"
                      style="text-transform: none"
                      ><v-icon size="15" class="pr-2">mdi-email</v-icon>
                      cyrusmabulay@gmail.com</v-btn
                    >
                  </v-col>
                  <v-col lg="3" cols="12">
                    <v-btn
                      href="https://www.facebook.com/cymabulay/"
                      style="text-transform: none"
                      ><v-icon size="15" class="pr-2">mdi-facebook</v-icon> Cy
                      Mabulay</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
    <div id="portfolio"></div></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="header">Portfolio</h1>
        <hr />
      </v-col>
    </v-row>
    <v-card flat>
      <v-row>
        <v-col cols="12">
          <v-container>
            <h2
              style="
                padding: 0px;
                margin: 0px;
                line-height: 20px;
                font-size: 20px;
                font-family: Franklin Gothic Medium;
              "
            >
              Corporate Projects
            </h2>
            <hr class="danger" />
            <v-row>
              <v-col lg="3" cols="12" v-for="(val, key) in data" :key="key">
                <v-card width="700" height="420" class="px-4">
                  <v-row no-gutters>
                    <v-col cols="12" sm="12">
                      <br />
                      <h6>
                        <b>{{ val.title }}</b>
                      </h6>
                      <small
                        ><v-icon>{{ val.icon }}</v-icon>
                        {{ val.icon_details }}</small
                      >
                      <v-carousel
                        hide-delimiters
                        class="border elevation-2 py-4"
                        height="200"
                      >
                        <v-carousel-item v-for="(v, k) in val.image" :key="k">
                          <v-img class="mx-auto" :src="v" eager contain></v-img>
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                    <v-col cols="12" sm="12">
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
                      <small>{{ val.description }}</small>
                    </v-col>
                  </v-row>
                  <br />
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-container>
            <h2
              style="
                padding: 0px;
                margin: 0px;
                line-height: 20px;
                font-size: 20px;
                font-family: Franklin Gothic Medium;
              "
            >
              Freelance / Part-time Projects
            </h2>
            <hr class="danger" />
            <v-row>
              <v-col lg="3" cols="12" v-for="(val, key) in data1" :key="key">
                <v-card width="700" height="420" class="px-4">
                  <v-row no-gutters>
                    <v-col cols="12" sm="12">
                      <br />
                      <h6>
                        <b>{{ val.title }}</b>
                      </h6>
                      <small
                        ><v-icon>{{ val.icon }}</v-icon>
                        {{ val.icon_details }}</small
                      >
                      <v-carousel
                        hide-delimiters
                        class="border elevation-2 py-4"
                        height="200"
                      >
                        <v-carousel-item v-for="(v, k) in val.image" :key="k">
                          <v-img class="mx-auto" :src="v" eager contain></v-img>
                        </v-carousel-item>
                      </v-carousel>
                    </v-col>
                    <v-col cols="12" sm="12">
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
                      <small>{{ val.description }}</small>
                    </v-col>
                  </v-row>
                  <br />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
    <hr />
    <v-container>
      <v-card flat class="transparent">
        <v-row>
          <v-col>
            <a href="https://m.me/ProjectC.systems"
              ><v-img contain width="400" src="/img/project_c.png"></v-img></a
          ></v-col>
        </v-row>
      </v-card>
    </v-container>
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
</style>

   
<script>
import navguest from "../../Components/Guest/Nav.vue";
export default {
  components: {
    navguest,
  },
  data: () => ({
    data: [],
    data1: [],
    panel: [0],
    age: "",
  }),
  computed: {
    sizer() {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return 250;
        case "md":
          return 220;
        case "lg":
          return 220;
        case "xl":
          return 220;
      }
    },
  },
  created() {
    this.get();
    this.get1();
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
        icon_details: "Lead developer and 1 participant",
      });

      this.data.push({
        title: "Employee Portal",
        description:
          "Created portal for the employees, timelogs monitoring, filing leave / official business and overtimes, service request ticketing and some additinal micro modules for hris.",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ep1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ep2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ep3s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "Lead developer and 1 participant",
      });

      this.data.push({
        title: "PGAS System",
        description:
          "Created Multiple micro application for company productions such as Call Centers data storage, Medical Insurance Info systems, Human resources Info systems, and insurance policy listings and more.",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vb.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "We are 2 in this, im the Front-end.",
      });
    },
    get1() {
      this.data1 = [];
      this.data1.push({
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
      this.data1.push({
        title: "Provincial Vetirinary Clinic ",
        description: "Provincial Veterinary Clinic of Batangas City",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet1.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet2.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet3.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "Only me in this project.",
      });
      this.data1.push({
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
      this.data1.push({
        title: "PROVIDER",
        description:
          "Created clients inquiries, users managements and roles, and custom chat bot using native js.",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prvs.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prv1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prv2s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "I Participated to this project.",
      });
      this.data1.push({
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
      this.data1.push({
        title: "Web based test bank and formulator system",
        description:
          "3 involve users, 1 coordinator, 1 teacher and multiple students, coordinator set exams, teacher prepare questions and students take exams and more..",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmuns.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmun1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmun2s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "I Participated to this project.",
      });
      this.data1.push({
        title: "Inventory and Sales Monitoring System",
        description: "For security reasons, no information disclosure. ",
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/invent.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "I Colaborate to this project.",
      });
    },
  },
};
</script>