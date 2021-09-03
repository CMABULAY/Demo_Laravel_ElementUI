<template>
<div>
    <!-- <topnavy/> -->
    <br>
    <div class="container">  
      <router-view></router-view>
    </div>

</div>
</template>

<script>
  // import topnavy from '../Components/TopNav';
    export default {
         data() {
            return {
            activeIndex: undefined
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
         components: {
            // topnavy  
        },
    }
</script>
