<template>
  <v-card class="p-4">
    <span>Sample table</span>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn small class="mx-1" color="#0000" :to="'/screen1'">
        back to screen1
      </v-btn>
      <v-btn small class="mx-1" dark color="#cc0022" @click="store">
        import sample
      </v-btn>
    </v-card-actions>

    <v-card-text>
      <v-data-table
        :headers="table.header"
        :items="table.dataitems"
        hide-default-footer
        :sort-by="['created_at', true]"
        :sort-desc="[table.sorting, false]"
        dense
        :items-per-page="5"
        class="elevation-2"
      >
        <template v-slot:[`item.id`]="{ item }">
          <v-card-actions>
            <v-btn x-small text @click="actionsOnclick(1, item)"> TOP </v-btn>
            <v-btn x-small text @click="actionsOnclick1(1, item)"> UP </v-btn>
            <v-btn x-small text @click="actionsOnclick1(2, item)"> DOWN </v-btn>
            <v-btn x-small text @click="actionsOnclick(2, item)">
              BOTTOM
            </v-btn>
          </v-card-actions>
        </template>

        <template v-slot:[`item.tempid`]="{ item }" class="d-none">
          {{ item.tempid }}
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      table: {
        header: [
          { text: "Level", value: "level" },
          { text: "Name", value: "name" },
          { text: "Actions", value: "id" },
          { text: "temp", class: " d-none", value: "tempid" },
        ],
        dataitems: [],
        sorting: true,
      },
    };
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      await axios.get("api/get").then((result) => {
        this.table.dataitems = result.data;
      });
    },
    async store() {
      await axios.post("api/store").then((result) => {
        this.get();
        alert(result.data);
      });
    },
    async actionsOnclick(btn, data) {
      switch (btn) {
        case 1:
          await axios.post("api/actions", data).then((result) => {
            this.get();
          });
          this.sorting = true;
          break;
        case 2:
          await axios.post("api/actions", data).then((result) => {
            this.get();
          });
          this.sorting = false;
          break;
        default:
          break;
      }
    },
   async actionsOnclick1(btn, data) {
   
      switch (btn) {
        case 1:
            var dt0 = this.table.dataitems[this.table.dataitems.indexOf(data)]
            var dt1 = this.table.dataitems[this.table.dataitems.indexOf(data)+1] 
            await axios.post("api/actions1",{'type':'up', 'current': dt0, 'old': dt1}).then((result) => { 
                this.get();
            });
          this.sorting = true;
          break;
        case 2:
           var dt0 = this.table.dataitems[this.table.dataitems.indexOf(data)]
            var dt1 = this.table.dataitems[this.table.dataitems.indexOf(data)-1] 
            await axios.post("api/actions1",{'type':'down', 'current': dt0, 'old': dt1}).then((result) => { 
                this.get();
            });
          this.sorting = false;
          break;
        default:
          break;
      }
    },


  },
};
</script>