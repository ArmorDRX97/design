<template>
    <v-bottom-navigation
            v-model="value"
            light
            shift

            fixed>
        <v-btn value="buy" to="/buy" class="btn-footer">
            <span class="blue-grey--text text--darken-4">Покупка</span>
            <v-icon color="blue-grey darken-4">mdi-cart</v-icon>
        </v-btn>

        <v-btn value="stock" to="/stock" class="btn-footer">
            <span class="blue-grey--text text--darken-4">Склад</span>
            <v-icon color="blue-grey darken-4">mdi-garage-variant</v-icon>
        </v-btn>

        <v-btn value="sell" to="/sell" class="btn-footer">
            <span class="blue-grey--text text--darken-4">Продажа</span>
            <v-icon color="blue-grey darken-4">mdi-point-of-sale</v-icon>
        </v-btn>
        <v-btn value="cash" to="/cash" class="btn-footer">
            <span class="blue-grey--text text--darken-4">Деньги</span>
            <v-icon color="blue-grey darken-4">mdi-cash</v-icon>
        </v-btn>
        <v-btn value="profile" to="/profile" class="btn-footer">
            <span class="blue-grey--text text--darken-4">Профиль</span>
            <v-icon color="blue-grey darken-4">mdi-account</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: 'footer',
        data: () => ({value: 'profile'}),
    }
</script>

<style lang="scss">
    .v-item-group.v-bottom-navigation .v-btn {
        min-width: auto !important;
        width: 25% !important;
    }

    .v-bottom-navigation {
        height: 50px !important;

        .v-btn__content {
            span {
                font-size: 6pt;
                text-transform: uppercase;
                font-weight: 400;
            }
        }
    }

    .btn-footer {
        padding: 0 !important;
    }

    .v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content > *:not(.v-icon) {
        top: calc(100% - 15px) !important;
    }

    .v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content > .v-icon {
        transform: translateY(-4px) !important;
    }

</style>
