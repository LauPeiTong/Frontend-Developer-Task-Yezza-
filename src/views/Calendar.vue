<template>
  <div>
    <v-toolbar
          elevation=0
          height="88px"
          color="grey lighten-4"
          prominent
    >
        <v-toolbar-title><h3>Calendar</h3></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon class="pt-13">
            <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
    </v-toolbar>

    <v-container class="pa-0 ">
        <v-row >
            <v-col height="60" >
                <div >
                    <v-date-picker
                        ref="datepicker"
                        width="380"
                        class="grey lighten-4 ma-0 pa-2"
                        color="grey darken-4 "
                        no-title
                        first-day-of-week="1"
                        v-model="date1"
                        :events="arrayEvents"
                        :allowed-dates="allowed"
                        event-color="grey darken-4"
                        @click="chooseDate(date1)"
                        @load="loadReservedDate()"
                    ></v-date-picker>

                    <v-list class="ml-3 mr-3">
                        <template v-for="(item, index) in viewItems(date1)">
                        
                            <v-divider
                            v-if="item.divider"
                            :key="index"
                            ></v-divider>
                            
                            <v-list-item
                            v-else
                            :key="item.title"
                            >

                            <v-list-item-title class="font-weight-medium" v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle  v-html="item.subtitle"></v-list-item-subtitle>
            
                            </v-list-item>
                        </template>
                        </v-list>

                </div>

            </v-col>

        </v-row>

    </v-container>
    
  </div>

  
</template>

<script>
    import axios from 'axios'
    var blockedDateArr = [];

    export default {
        data: () => ({
            arrayEvents: null,
            blockedDate: [],
            reservedDate: [],
            date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            items: [],
            
        }),

        async created (){
            //Since the linked given has achieved their request limit, so I use another link to do this tasks, the dates in the new links may be different from the original links.

            const response1 = await axios.get("https://laupeitong7.free.beeceptor.com/reserved_date");
            this.reservedDate = response1.data;

            const response2 = await axios.get("https://laupeitong7.free.beeceptor.com/blocked_date");
            this.blockedDate = response2.data;

            // this.reservedDate = ["2022-06-17", "2022-06-18", "2022-06-23"]
            // this.blockedDate = ["2022-06-03", "2022-06-27", "2022-06-04", "2022-06-05"]

            this.items = []

            for (let i = 0; i < this.reservedDate.length; i++) {
                console.log(this.reservedDate.at(i))
                let newItem = {
                    id: 1,
                    date: this.reservedDate.at(i),
                    title: 'Nestle - Milo',
                    subtitle: `<span class="d-flex justify-end" >Unpaid</span>`
                }
                let newItem2 = { 
                    divider: true,
                    date: this.reservedDate.at(i)}

                this.items.push(newItem)
                this.items.push(newItem2)

                if(i % 2 === 0){
                    let newItem3 = {
                        id: 2,
                        date: this.reservedDate.at(i),
                        title: 'Goldiva Chocolatier',
                        subtitle: `<span class="d-flex justify-end">Unpaid</span>`,
                    }
                    let newItem4 = {
                        divider: true,
                        date: this.reservedDate.at(i)
                    }
                    this.items.push(newItem3)
                    this.items.push(newItem4)
                }
                
             }
            
            blockedDateArr = []
            for (let i = 0; i < this.blockedDate.length; i++) {
                blockedDateArr.push(this.blockedDate.at(i))
                
            }  

            this.arrayEvents = this.items.map(item => item.date)
           
            
        },

        

        mounted () {
            this.arrayEvents = this.items.map(item => item.date)
        },

        methods: {
            allowed: val => blockedDateArr.indexOf(val) === -1,

            viewItems(date){
                let item = this.items.filter(item => item.date === date || (item.divider && item.date === date))
                return item;
            },

            chooseDate(date){
                this.date1 = date;
            },


        },

    }

  
</script>

<style>
    .v-picker__body {
        min-height: 400px !important;
        background-color: #F5F5F5 !important;

    }

    .theme--light.v-date-picker-table th{
        color: #333333 !important;
        font-size: 14px;
    }

    .v-date-picker-table__events > div{
        margin-top: 20px !important;
    }

    .v-date-picker-table td, .v-date-picker-table th {
        line-height: 10px;
    }

    .v-date-picker-table--date td {
        height: 50px !important;
        width: 32px !important;
    }

    .theme--light.v-btn.v-btn--disabled{
        color: rgba(0, 0, 0, 0.26) !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.26);
        transform: rotate(-45deg) scaleX(2.1);
        border-radius: 0px;
        transform-origin: 15% 125%;
    }

    table{
        border-spacing: 0px !important;
    }

    .theme--light.v-btn.v-btn--disabled .v-btn__content{
        transform: scaleX(0.48) rotate(45deg);
        transform-origin: 15% 215%;
    }
    
</style>
