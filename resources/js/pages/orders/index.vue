<template>
  <div>
    <v-row>
      <v-col xl="6" cols="12">
        <v-card class="p-4" >
            <v-card-actions>
              <h4 class="text-dark">Products List</h4>
              <v-spacer></v-spacer> 
            </v-card-actions>
              <v-text-field
                v-model="search"
                label="Product Name"
                single-line
                dense
                clearable
              ></v-text-field>
            
            <v-data-table
              :loading="progressBar"
              :search="search"
              height="400"
              :headers="headers"
              :items-per-page="10"
              dense
              :items="table"
            >
              <!-- loading  -->
              <v-progress-linear
                v-show="progressBar"
                slot="progress"
                color="green"
                indeterminate
              ></v-progress-linear>
      

              <template v-slot:[`item.id`]="{ item }">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    class="px-1"
                    :class="
                      hover
                        ? 'btn btn-primary text-white'
                        : 'btn btn-link text-primary'
                    "
                    text
                    small
                    @click="edit_item(item)"
                  >
                    <small>
                      <v-icon size="15"> mdi-basket </v-icon>
                      Order
                    </small>
                  </v-btn>
                </v-hover>
              </template>
            </v-data-table>
          </v-card>
      </v-col>
      <v-col xl="6" cols="12">
        <v-card class="p-4" >
            <v-card-actions>
              <h4 class="text-dark">Ordered List</h4>
              <v-spacer></v-spacer> 
            </v-card-actions> 
            
            <v-data-table
              :loading="progressBar"
              :search="search1"
              height="447"
              :headers="headers1"
              :items-per-page="10"
              dense
              :items="table1"
            >
              <!-- loading  -->
              <v-progress-linear
                v-show="progressBar"
                slot="progress"
                color="green"
                indeterminate
              ></v-progress-linear>
       
            </v-data-table>
          </v-card>
      </v-col>
    </v-row>
  

    <v-dialog
      transition="dialog-top-transition"
      max-width="500"
      v-model="dialog"
    >
      <v-toolbar color="danger" dark>
        Order
        <v-spacer></v-spacer>
        <v-icon class="float-right" text @click="dialog = false"
          >mdi-close
        </v-icon>
      </v-toolbar>
      <v-form ref="form">
        <v-card flat>
          <v-card flat class="border p-4">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  hide-details="auto"
                  :rules="rules"
                  v-model="form.product_name"
                  dense
                  label="Product"
                >
                  <template slot="label">
                    <div style="font-size: 14px; color: red">
                      Product name *
                    </div>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.quantity"
                  dense
                  :rules="number_rules"
                  hide-details="auto"
                >
                  <template slot="label">
                    <div style="font-size: 14px; color: red">Quantity *</div>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#00794b"
              depressed
              small
              dark
              :loading="progressBar"
              @click="store_order"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data: () => ({
    data: "",
    dialog: "",
    rules: [(v) => !!v || "This is required"],
    number_rules: [
      (v) => {
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999) return true;
        return "This is required";
      },
    ],
    form: {
      product_id: "",
      product_name: "",
      quantity: "",
    },
    table: [],
    table1: [],
    search: "",
    search1: "",
    headers: [ 
      { text: "Product name", value: "product_name" },
      { text: "Stock on hand", value: "quantity_diff" }, 
      { text: "Actions", value: "id", sortable: false },
    ],
    headers1: [ 
      { text: "Product name", value: "product_id.product_name" },
      { text: "Ordered by", value: "employee.name" }, 
      { text: "Quantity", value: "quantity" },  
    ],
    progressBar: false,
  }),
  created() {
    this.get_product();
    this.get_order();
  },
  methods: {
    getFormatDate(e, format) {
      const date = moment(e);
      return date.format(format);
    },

    add_new() {
      this.clear_form();
      this.dialog = true;
    },
    clear_form() {
      this.form.product_name = "";
      this.form.quantity = "";
      this.form.product_id = "";
    },
    edit_item(item) {
      this.form.product_name = item.product_name; 
      this.form.product_id = item.id;
      this.dialog = true;
    },

    async get_product() {
      this.progressBar = true
      await axios.get("/api/products/get").then((result) => {
        this.table = result.data;
        this.progressBar = false
      });
    },
    async get_order() {
      await axios.get("/api/order/get").then((result) => {
        this.table1 = result.data;
      });
    },
    async store_order() {
      if (this.$refs.form.validate()) {
        await axios.post("/api/order/store", this.form).then((result) => {
          console.log(result.data)
          this.clear_form();
          this.get_order();
          this.get_product();
          this.dialog = false;
          Swal.fire(result.data.message, "", "");
        });
      }
    },
  },
};
</script>