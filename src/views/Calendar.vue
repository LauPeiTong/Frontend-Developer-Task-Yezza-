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
                        class="grey lighten-4 ma-0 pa-0 "
                        color="grey darken-4 "
                        no-title
                        v-model="date1"
                        :events="arrayEvents"
                        event-color="grey darken-4"
                        @click="chooseDate(date1)"
                    ></v-date-picker>

                    <v-list class="ml-3 mr-3">
                        <template v-for="(item, index) in viewItems(date1)">
                        
                            <v-divider
                            v-if="item.divider"
                            :key="index"
                            :inset="item.inset"
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
  export default {
    data: () => ({
        arrayEvents: null,
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        items: [
        {
          id: 1,
          date: "2022-06-23",
          title: 'Nestle - Milo',
          subtitle: `<span class="d-flex justify-end" >Unpaid</span>`,
        },
        { divider: true,
          date: "2022-06-23"},
        {
          id: 2,
          date: "2022-06-23",
          title: 'Goldiva Chocolatier',
          subtitle: `<span class="d-flex justify-end">Unpaid</span>`,
        },
        { divider: true,
          date: "2022-06-23"},
        {
          id: 3,
          date: "2022-06-21",
          title: 'Chocolate',
          subtitle: `<span class="d-flex justify-end">Paid</span>`,
        },
        { divider: true,
          date: "2022-06-21"}
      ]
    }),

    mounted () {
      this.arrayEvents = this.items.map(item => item.date)
    },
    
    methods: {
        viewItems(date){
            let item = this.items.filter(item => item.date === date || (item.divider && item.date === date))
            return item;
        },

        chooseDate(date){
            this.date1 = date;
        },

      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
    },

  }
</script>

<style>
    .v-picker__body {
        height: 370px !important;
        background-color: #F5F5F5 !important;
    }

    .v-date-picker-table__events > div{
        margin-top: 20px !important;
    }

    .v-date-picker-table--date td {
        height: 50px !important;
        width: 32px !important;
    }


    
</style>

