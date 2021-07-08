<template>
  <el-card>
    <el-header>Create new Information</el-header>

    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.Activity_name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select
          v-model="form.Activity_zone"
          placeholder="please select your zone"
        >
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="form.Activity_date"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="Pick a time"
            v-model="form.Activity_time"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.Instant_delivery"></el-switch>
      </el-form-item> 
      <el-form-item label="Resources">
        <el-radio-group v-model="form.Resources">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.Activity_form"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      form: {
        Activity_name: "",
        Activity_zone: "",
        Activity_date: "",
        Activity_time: "",
        Instant_delivery: false, 
        Resources: "",
        Activity_form: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      axios.post("/api/demo/store", this.form).then((result) => {
        if (result.data) {
          Swal.fire({
            title: "Saved!",
            html: "Go to list and check it",
          });
        }
      });
    },
  },
};
</script>