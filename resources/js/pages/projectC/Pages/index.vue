
<template>
  <div>
    <section class="base">
      <video src="/img/vid.mp4" muted autoplay loop></video>
    </section>
    <navy />
    <v-card flat class="transparent" height="480">
      <v-row>
        <v-col cols="5">
          <v-container>
            <v-card flat class="mx-auto transparent" width="480" height="120">
              <strong style="font-size: 45px">Projects </strong>
              <br />
              Some pages may not be shown; security and privacy terms.
            </v-card>
          </v-container>
        </v-col>
        <v-col cols="7">
          <v-card-text>
            <v-card class="transparent">
              <v-carousel
                hide-delimiter-background 
                class="elevation-2"
                height="400"
              >
                <v-carousel-item v-for="(v, k) in selected.image" :key="k">
                  <v-img class="mx-auto"  :src="v" eager >
                    <v-card class="image-card" flat height="420">
                      <v-card width="710" class="transparent" flat dark>
                          <v-card flat min-height="270" class="transparent">
                            <h4>{{ selected.title }}</h4><hr class="white">
                        <h6 v-html="selected.description"></h6> 
                         </v-card>
                        <h6>Completed since: {{ selected.year }}</h6> 
                        <h6> {{ selected.type }}</h6>
                        <h6 v-if="selected.url[0] == 0">Link: {{ selected.url[1] }}</h6>
                        <h6 v-else>Link:  <a :href="selected.url[1]" target="_blank">{{ selected.url[1] }}</a></h6> 
                      </v-card>
                    </v-card>
                  </v-img>
                </v-carousel-item> </v-carousel
            ></v-card>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-card-text>
      <v-card flat height="335" style="width: 100%; overflow-y: auto" class="transparent card1 p-4">
         <div v-for="(val, k) in data" :key="k"  >
   
            <v-card @click="selects(val)" class="px-3" height="270" width="300">
              <v-row no-gutters>
                <v-col cols="12" sm="12">
                  <v-card class="transparent" height="70" flat>
                    <br />
                    <h6>
                      <b>{{ val.title }}</b>
                    </h6></v-card
                  >

                  <v-carousel :show-arrows="false" class="py-4" height="150">
                    <v-carousel-item v-for="(v, k) in val.image" :key="k">
                      <v-img class="mx-auto" :src="v" eager contain></v-img>
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-card-actions v-if="val.status != 1" class="text-success">
                    <v-spacer></v-spacer>

                    Completed - {{ val.year }}
                  </v-card-actions>
                  <v-card-actions v-if="val.status == 1" class="text-danger">
                    <v-spacer></v-spacer>
                    <v-icon color="danger"
                      >mdi-checkbox-multiple-blank-circle-outline</v-icon
                    >
                    In-progress
                  </v-card-actions>
                </v-col>
              </v-row>
              <br />
            </v-card>
          </div> 
      </v-card>
    </v-card-text>
  </div>
</template> 
   <style scoped>
   
.card1 {
	background: #CCC;
 
	columns: 300px auto;
    
    -webkit-column-fill: auto;
    -moz-column-fill: auto;
    column-fill: auto;
    
	-webkit-column-gap: 0;
	-moz-column-gap: 0;
	column-gap: 0;
}

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
  top: 0;
  left: 0;
  width: 100%;
  height: 75%;
  object-fit: cover;
}

.image-card {
  position: absolute;
  padding: 20px;
  background: linear-gradient(to right, rgb(80, 23, 23), transparent 100%);
  font: 18px Arial, sans-serif;
}
</style> 
<script>
import navy from "../Components/nav.vue";
export default {
  data: () => ({
    data: [],
    selected: [],
  }),
  mounted() {
    this.get();
    this.selected = this.data[0];
  },
  metaInfo() {
    return { title: "Projects" };
  },
  components: {
    navy,
  },
  methods: {
    selects(val) {
        this.selected = val
    },

    get() {
      this.data = [];

      this.data.push({
        title: "RAERENZ CATERING AND PARTY NEEDS",
        description:  "Dynamic design and reservation setup, created from the <br> scratch, can email send, book reservation, <br>create account as client and more...",
        year: "August 2022",
        type: 'Developed by Project C',
        url: [0,"No available for now"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/3ac6f9d2519df36c8b6f0a4362179f57f360f1ea/res0.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/3ac6f9d2519df36c8b6f0a4362179f57f360f1ea/res1.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/3ac6f9d2519df36c8b6f0a4362179f57f360f1ea/res2.png?raw=true",
        ], 
      });
      
      this.data.push({
        title: "Provincial Vetirinary Clinic ",
        description: "Provincial Veterinary Clinic of Batangas City, <br> develop from the scratch, ideas of the client and applied <br> same as wireframe and system flow, Made out of <br> Laravel/vueJs and Mysql database. ",
        year: "June 2022",
        type: 'Developed by Project C',
        url: [1,"https://bit.ly/3RxovTm"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet1.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet2.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/vet3.png?raw=true",
        ], 
      });

      this.data.push({
        title: "Web based agriculture information system",
        description:
          "Isabela State University, Enhanced RPDD Project for students",
           year: "May 2022",
        type: 'Developed by Project C',
        url: [0,"No available link, Locally deployed system"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/agri1.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/agri2.png?raw=true",
        ], 
      });
      this.data.push({
        title: "RPDD Project Proposal Database",
        description:  "A project of a government institution for monitoring projects  <br> status, budget and alocation. ",
        year: "Feb 2022",
        type: 'Developed by Project C',
        url: [0,"No available link, Locally deployed system"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdds.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdd1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdd2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/rpdd3s.png?raw=true",
        ], 
      });

      this.data.push({
        title: "PROVIDER",
        description:  "Created clients inquiries, users managements , roles and <br>permission, and custom chat bot using native js.",
        year: "May 2022",
        type: 'Enhanced and Contributed by Project C',
        url: [0,"No available link, Locally deployed system"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prvs.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prv1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/prv2s.png?raw=true",
        ], 
      });

      this.data.push({
        title: "C.A. Ordinanza Glass Aluminum and Supplies",
        description:
          "Created new middlewares for 2 involve users, 1 admin and <br> cashiers, created roles  and permissions and add prediction <br> of sales for their report requirements,",
        year: "May 2022",
        type: 'Enhanced and Contributed by Project C',
        url: [0,"No available link, Locally deployed system"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/invss.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/inv1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/inv2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/inv3s.png?raw=true",
        ], 
      });

      this.data.push({
        title: "Web based test bank and formulator system",
        description:
          "3 involve users, 1 coordinator, 1 teacher and multiple <br> students, coordinator set exams, teacher prepare <br>questions and students take exams and more..",
         year: "Feb 2022",
        type: 'Enhanced and Contributed by Project C',
        url: [0,"No available link, Locally deployed system"],
         image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmuns.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmun1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/plmun2s.png?raw=true",
        ], 
      });

      this.data.push({
        title: "Inventory and Sales Monitoring System",
        description: "For security reasons, no information disclosure. ",  
        year: "Aug 2022",
        type: 'Enhanced and Contributed by Project C',
        url: [1,"https://bit.ly/3cKgLPf"],
        image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/invent.png?raw=true",
        ],
      
      });

      this.data.push({
        title: "Risk Information System",
        description:
          "System to get accumulation of the specific clients for propery insurance, <br> summaries and graphings all the information, <br>and pinned all the client locations.",
       
        year: "July 2021",
        type: 'Developed by Project C',
        url: [1,"https://bit.ly/3TAfNpc"],
         image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ris1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/riss.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/ris3s.png?raw=true",
        ], 
      });

      this.data.push({
        title: "Employee Portal Revamp",
        description:
          "A Revamp of previews employee portal, Created portal for the employees,<br> timelogs monitoring, filing leave / official business and overtimes, <br> service request ticketing and some additinal micro modules for hris.",
       
        year: "Aug 2022",
        type: 'Developed by Project C',
        url: [1,"https://bit.ly/3KNQ1K1"],
         image: [
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr4s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr1s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr2s.png?raw=true",
          "https://github.com/CMABULAY/Image-bank/blob/4d67dcebdc9008c3f86889c3a7cd2a8e7f0b775e/epr3s.png?raw=true",
        ],
        icon: "mdi-account-multiple",
        icon_details: "Lead developer and 1 participant",
      });

      this.data.push({
        title: "Employee Portal",
        description:
          "Created portal for the employees, timelogs monitoring, filing leave / official business and overtimes, service request ticketing and some additinal micro modules for hris.",
        
        year: "feb 2021",
        type: 'Developed by Project C',
        url: [0,"Link removed."]
        
        ,image: [
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
  },
};
</script>
