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
        dense
        :items-per-page="5"
        class="elevation-2"
      >
        <template v-slot:[`item.id`]="{ item }">
          <v-card-actions>
            <v-btn x-small text @click="actionsOnclick1('top', item)"> TOP </v-btn>
            <v-btn x-small text @click="actionsOnclick1('up', item)"> UP </v-btn>
            <v-btn x-small text @click="actionsOnclick1('down', item)"> DOWN </v-btn>
            <v-btn x-small text @click="actionsOnclick1('bottom', item)"> BOTTOM </v-btn>
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
          { text: "Level", 
            sortable: false, value: "level" },
          { text: "Name", 
            sortable: false,value: "name" },
          { text: "Actions", 
            sortable: false,value: "id" }, 
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
      await axios.post("api/store",{id: this.$route.query.id}).then((result) => {
        this.get();
        alert(result.data);
      });
    },
  
   async actionsOnclick1(type, data) {
      var dt = this.table.dataitems[this.table.dataitems.indexOf(data)]  
      await axios.post("api/actions1",{'type':type, 'current': dt}).then((result) => {  
            this.get();
        });
      this.sorting = true; 
    },


  },
};
</script>