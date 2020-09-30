<template>
        <v-footer
                color="white"
                app
                class="footer"
        >
              <v-btn to="/buy" icon color="secondary">
                  <v-icon>mdi-cart</v-icon>
              </v-btn>
            <v-btn icon color="secondary">
                <v-icon>mdi-point-of-sale</v-icon>
            </v-btn>
            <v-btn icon color="secondary">
                <v-icon>mdi-cash</v-icon>
            </v-btn>
            <v-btn icon color="secondary">
                <v-icon>mdi-garage-variant</v-icon>
            </v-btn>
            <v-btn to="/profile" icon color="secondary">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="scss">
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2), 0px 0px 10px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12) !important;
    }
</style>
