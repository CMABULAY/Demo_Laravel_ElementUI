<template>
<v-card class="p-4">
<span>Sample table</span>

<v-card-actions>
    <v-spacer></v-spacer>
    <v-btn small dark color="#cc0022" @click="store">
        import sample
    </v-btn> 
</v-card-actions>



<v-card-text>
<v-data-table 
:headers="table.header"
:items="table.dataitems"
 hide-default-footer
    :sort-by="['created_at', true]"
    :sort-desc="[sorting, false]"
dense 
    :items-per-page="5"
    class="elevation-2"
>
    <template v-slot:[`item.groupname`]="{ item }"   >
        <v-card-actions> 
        <v-btn x-small text :to="'/screen2'" > {{ item.groupname }} </v-btn> 
      
        </v-card-actions>
    </template>
    
    <template v-slot:[`item.created_at`]="{ item }"  class=" d-none" >
 
    </template>
</v-data-table>
    
</v-card-text>

 


</v-card>
</template>

<script>
import axios from 'axios'
export default { 
    data() {
        return {
            table: {
                header: [
                        { text: 'group', value: 'groupname'} 
                        ],
                dataitems: [],
                sorting: true,

            }
        }
    },
    created (){
        this.get();
    },
    mounted(){

        this.get();
    },
    methods: {
        async get(){
            await axios.get('api/get1').then(result=>{
                console.log(result.data)
                this.table.dataitems = result.data;
            })
        },
        async store(){
            await axios.post('api/store1').then(result=>{
                this.get();  
                alert(result.data);
            })
        },
        async actionsOnclick(btn, data){  
            await axios.post('api/actions',data).then(result=>{ 
                this.get();   
            })
        }



    }
    
}
</script>