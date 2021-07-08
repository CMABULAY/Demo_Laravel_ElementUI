<template>
  <div>
    <el-table
    :data="tableData"
    style="width: 100%">

    <el-table-column
      label="Date Added"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Activity Name"
      width="180">
      <template slot-scope="scope"> 
        <span style="margin-left: 10px">{{ scope.row.Activity_name }}</span>
      </template>
    </el-table-column>


    <!-- <el-table-column
      label="Activity Name"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.name }}</p>
          <p>Addr: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column> -->

    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>

  
  <el-dialog title="Edit Information" :visible.sync="dialog">
       
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
    </el-form>

        <div slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">Cancel</el-button>
        <el-button type="primary" @click="handleSubmitUpdate">Update</el-button>
        </div>
  </el-dialog>
  </div>
</template>

<script> 
import axios from 'axios'
import Swal from 'sweetalert2' 
  export default {
    data() {
      return {
        dialog: false,
        form: { id:'',  
        Activity_name: "",
        Activity_zone: "",
        Activity_date: "",
        Activity_time: "",
        Instant_delivery: false, 
        Resources: "",
        Activity_form: ""},
        tableData: []
      }
    },
    created(){
      this.loadList();
    },
    methods: {

      loadList(){ 
        axios.get('/api/demo/get')  
            .then(result=>{ 
                this.tableData = result.data
            })  
      },
      handleEdit(data) {
        this.dialog = true
        for ( var key in data.row ) { console.log(data.row),  this.form[key] = data.row[key] ; }  
        if(data.row.Instant_delivery === "1"){
          this.form.Instant_delivery = true;
        }
      },
      handleDelete(data) {
         Swal.fire({
            title: 'Are you want to delete data?', 
            showCancelButton:     true , 
            }).then(result=>{  
                if(result.isConfirmed){   
            
                   axios.post('/api/demo/delete',{id: data.row.id })  
                    .then(result=>{         console.log(result)
                          if(result.data){ 
                                Swal.fire({ 
                                  title:  'Deleted!',  
                                })      
                          }  
                      this.loadList();
                    }) 
                } 
            })   
      },
      handleSubmitUpdate(){
        this.dialog = false
        axios.post('/api/demo/update',this.form)  
                .then(result=>{  console.log(result.data)
                      if(result.data){ 
                            Swal.fire({ 
                              title:  'Updated!',  
                            })      
                      }  
                  this.loadList();
                }) 
      }

    }
  }
</script>