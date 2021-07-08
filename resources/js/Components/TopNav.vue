<template> 
<el-menu class="el-menu-demo" mode="horizontal"  :router="true" :default-active="activeLink">
  <el-menu-item index="1">Cyrus Demo</el-menu-item> 
  <el-menu-item index="3" route="/home" >Home</el-menu-item>
  <el-menu-item index="4" route="/form" >Create </el-menu-item>
  <el-menu-item index="5" route="/list" >Read/Edit/Delete</el-menu-item>
</el-menu> 
</template>
<script >
    export default {
        mounted: function () {
            let match = _.chain(this.$route.matched).sortBy(n => n.path.length).last().value();
            this.activeLink = match;
        },
        data() {
            return {
                activeLink: null,
            };
        },
    };
</script>