<template>
<div>
  <v-row>
        <v-col xl="2" cols="5">
          <v-img src="/img/logo2.png"  > </v-img>
        </v-col>
        <v-col xl="8" cols="12"> 
      <v-card
            class=" transparent  mx-auto   text-white skewed" 
            flat 
            width="550"
          >
          <v-img src="/img/login.png"  >
            <br><br> <br> <br>  
              <v-card  width="430" flat class="transparent mx-auto"> 
    <v-container>
            <h4 class=""> Hi, I am Cy </h4>
            <span> Thank you for checking out my work 
                <br> for more question email me at cyrusmabulay@gmail.com </span>
            <br> <br>
            <v-btn text color="orange" :to="'/login'">Back to Login</v-btn>
    </v-container>   
              </v-card>
          </v-img>
      </v-card>
        </v-col>
        <v-col xl="2">  </v-col>
      </v-row>



</div>
</template>