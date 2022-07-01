<template>
<div id="app">
  <v-app >
    <v-main>
      <router-view></router-view>
    </v-main>
  
    <v-bottom-navigation
      class="pa-2"
      color="#231F20"
      min-height="64px"
      absolute
      grow
      >
      <v-btn to="/">
        <span>Home</span>

        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="/calendar">
        <span>Calendar</span>

        <v-icon>mdi-calendar-week-outline</v-icon>
      </v-btn>

      <v-btn to="/request">
      
        <span>Request</span>
        <v-badge dot overlap color="red" offset-y="20" >
          <v-icon>mdi-briefcase-outline</v-icon>

        </v-badge>
      </v-btn>

      <v-btn to="/client">
        <span>Client</span>

        <v-icon>mdi-account-supervisor-outline</v-icon>
      </v-btn>

      <v-btn to="/menu">
        <span>Menu</span>

        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</div>
</template>

<script>
  
</script>

<style>


  .v-btn {
    background-color: transparent !important; 
    font-family: sans-serif;
    color: #848484;
  }

  .v-icon{
    margin-bottom: 5px;
    margin-top: 10px;
  }
</style>