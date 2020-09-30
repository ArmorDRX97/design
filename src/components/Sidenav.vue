<template>
 <div>
     <v-navigation-drawer
             v-model="drawer"
             app
             fixed
     >
         <v-list dense>
             <v-list-item link>
                 <v-list-item-action>
                     <v-icon>mdi-file</v-icon>
                 </v-list-item-action>
                 <v-list-item-content>
                     <v-list-item-title>Отчеты</v-list-item-title>
                 </v-list-item-content>
             </v-list-item>
              <v-divider></v-divider>
             <v-list-item link>
                 <v-list-item-action>
                     <v-icon>mdi-email</v-icon>
                 </v-list-item-action>
                 <v-list-item-content>
                     <v-list-item-title>Справочники</v-list-item-title>
                 </v-list-item-content>
             </v-list-item>
              <v-divider></v-divider>
             <v-list-item link>
                 <v-list-item-action>
                     <v-icon>mdi-email</v-icon>
                 </v-list-item-action>
                 <v-list-item-content>
                     <v-list-item-title>База знаний</v-list-item-title>
                 </v-list-item-content>
             </v-list-item>
              <v-divider></v-divider>
             <v-list-item link>
                 <v-list-item-action>
                     <v-icon>mdi-email</v-icon>
                 </v-list-item-action>
                 <v-list-item-content>
                     <v-list-item-title>Служба поддержки</v-list-item-title>
                 </v-list-item-content>
             </v-list-item>
         </v-list>
     </v-navigation-drawer>

     <v-app-bar
             app
             color="white"
             light
     >
         <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title>{{title}}</v-toolbar-title>
             <v-btn icon v-if="login === 'true'">
                 <v-icon>mdi-logout</v-icon>
             </v-btn>
         <p v-else style="width: 40px; height: 48px; margin: 0;"></p>
     </v-app-bar>
 </div>
</template>

<script>
    export default {
        name: "sidenav",
        data: () => ({
            drawer: null,
            title: '',
            login: ''
        }),
        watch: {
            '$route' (to) {
                this.title = to.meta.title || 'aman торговля'
                this.login = to.meta.login || 'true'
            }
        },
    }
</script>

<style lang="scss">
    .v-toolbar__content, .v-toolbar__extension{
        justify-content: space-between !important;
    }

    .v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:first-child + .v-toolbar__title, .v-application--is-ltr .v-toolbar__extension > .v-btn.v-btn--icon:first-child + .v-toolbar__title{
        padding-left: 0!important;
    }
</style>

