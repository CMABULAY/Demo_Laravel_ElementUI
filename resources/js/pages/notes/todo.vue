<template>
  <v-container fluid>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="#f8f2e0"
        large
        @click="addData"
        style="text-transform: none; color: #ce6666"
        ><v-icon>mdi-plus</v-icon> New note</v-btn
      >
    </v-card-actions>
    <v-data-table
      :loading="progressbar"
      height="400"
      :headers="headers"
      :items="table"
    >
      <template v-slot:[`item.id`]="{ item }">
        <v-hover v-slot="{ hover }">
          <v-btn
            class="px-1"
            :class="
              hover ? 'btn btn-primary text-white' : 'btn btn-link text-primary'
            "
            text
            small
            @click="editData(item)"
          >
            <small>
              <v-icon size="15"> mdi-pencil </v-icon>
              Edit
            </small>
          </v-btn>
        </v-hover>
          <v-hover v-slot="{ hover }">
          <v-btn
            class="px-1"
            :class="
              hover ? 'btn btn-danger text-white' : 'btn btn-link text-danger'
            "
            text
            small
            @click="deleteData(item)"
          >
            <small>
              <v-icon size="15"> mdi-delete </v-icon>
              Delete
            </small>
          </v-btn>
        </v-hover>
      </template>
    </v-data-table>

    <v-dialog
      id="dialog1"
      v-model="dialog"
      persistent
      elevation="0"
      width="600"
      height="700"
    >
      <v-img src="/img/login.png" style="height: 600px; padding: 85px">
        <br />
        <v-card height="320" width="530" flat class="transparent mx-auto">
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Title"
                    outlined
                    :rules="rules"
                    dense
                    hide-details=""
                    v-model="form.title"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    rows="4"
                    label="Description"
                    outlined
                    v-model="form.description"
                    dense
                    hide-details=""
                  >
                  </v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :rules="rules"
                    :close-on-content-click="false"
                    :return-value.sync="form.remind_date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.remind_date"
                        label="Remind me at"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.remind_date"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(form.remind_date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
        <v-card-actions>
          <v-btn class="orange" dark @click="saveData" v-if="!form.id"
            >Save</v-btn
          >
          <v-btn class="orange" dark @click="updateData" v-else>Update</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="white" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-img>
    </v-dialog>
  </v-container>
</template>
<style >
.v-dialog {
  box-shadow: none;
}
</style>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      rules: [(v) => !!v || "This is required"],
      dialog: false,
      table: [],
      progressbar: false,
      menu: null,
      form: {
        id: null,
        title: null,
        description: null,
        remind_date: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
      },
      headers: [
        { width: "200", text: "Title", value: "title" },
        { width: "200", text: "Description", value: "description" },
        { width: "100", text: "Action", value: "id" },
      ],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    //   get data list
    async getData() {
      this.progressbar = true;
      await axios.get("/api/note/get").then((result) => {
        this.table = result.data;
        this.progressbar = false;
      });
    },
    //  validate and submit
    async saveData() {
      if (this.$refs.form.validate()) {
        await Swal.fire({
          title: "Do you want to save this data?",
          type: "question",
          showCancelButton: true,
          confirmButtonColor: "#ce6666",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/note/save", this.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              type: "success",
              title: "The data has been successfully saved.",
              html: "",
            });
            this.getData();
          }
        });
      }
    },
    //  validate and submit
    async updateData() {
      if (this.$refs.form.validate()) {
        await Swal.fire({
          title: "Do you want to update this data?",
          type: "question",
          showCancelButton: true,
          confirmButtonColor: "#ce6666",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/note/update", this.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              type: "success",
              title: "The data has been successfully updated.",
              html: "",
            });
            this.getData();
          }
        });
      }
    },
    //  clear and open dialog
    addData() {
      this.form = {
        id: null,
        title: null,
        description: null,
        remind_date: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
      };
      this.dialog = true;
    },
    //  get the row data and open dialog
    editData(row) {
      console.log(row);
      this.form = row;
      this.form.remind_date = this.dateFormat(row.remind_date, "YYYY-MM-DD");
      this.dialog = true;
    },

    // delete data
    async deleteData(row) { 
        await Swal.fire({
          title: "Do you want to delete this data?",
          type: "question",
          showCancelButton: true,
          confirmButtonColor: "#ce6666",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/note/delete", row );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => { 
          if (result.value) {
            Swal.fire({
              type: "success",
              title: "The data has been successfully deleted.",
              html: "",
            });
            this.getData();
          }
        }); 
    },

    // format date
    dateFormat(e, format) {
      //date formatter using moment
      const date = moment(e);
      return date.format(format);
    },
  },
};
</script>