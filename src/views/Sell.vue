<template>
    <div>
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Жвачка Baloon</v-list-item-title>
                    <v-list-item-subtitle>250 x 1 = 250 ₸</v-list-item-subtitle>

                </v-list-item-content>
                <v-list-item-action>
                    <div class="d-flex align-center justify-space-between sell-list">
                        <v-btn fab x-small dark color="blue-grey" elevation="1">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <v-text-field
                                solo
                                flat
                                single-line
                                type="number"
                                hide-details
                                class="input-number"
                                value="1"
                        ></v-text-field>
                        <v-btn fab x-small dark color="blue-grey" elevation="1">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </div>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Длинное название, прям очень длинное на всякий случай</v-list-item-title>
                    <v-list-item-subtitle>2 250 x 1 = 250 ₸</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <div class="d-flex align-center justify-space-between sell-list">
                        <v-btn fab x-small dark color="blue-grey" elevation="1">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <v-text-field
                                solo
                                flat
                                single-line
                                type="number"
                                hide-details
                                class="px-1 input-number"
                                value="1"
                        ></v-text-field>
                        <v-btn fab x-small dark color="blue-grey" elevation="1">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </div>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-card>
            <div class="d-flex align-center justify-space-between">
                <div>
                    <v-card-subtitle class="pa-0 pt-4 pl-4">Итого</v-card-subtitle>
                    <v-card-title class="pa-0 pb-4 pl-4">2 500.00 ₸</v-card-title>
                </div>
                <v-btn fab dark color="green" class="mr-3" :loading="loading" @click="loader = 'loading'">
                    <v-icon>mdi-check</v-icon>
                </v-btn>
            </div>
        </v-card>
        <v-dialog
                v-model="dialogList"
                max-width="500"
                class="dialog-list"
        >
            <v-card>
                <div class="text-right top">
                    <v-btn small class="ma-4" fab icon @click="dialogList = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
                <v-list>
                    <template v-for="item in filteredItems">
                        <v-list-item
                                @click="dialogList = false, dialogAdd = true"
                                class="v-divider"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{item.name}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                                <v-list-item-subtitle>{{item.price}} ₸</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
                <v-card-actions class="bottom">
                    <v-text-field
                            outlined
                            dense
                            hide-details="auto"
                            label="Поиск" v-model="search"></v-text-field>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-speed-dial class="btn-plus white--text" v-model="fab">
            <template v-slot:activator>
                <v-btn v-model="fab" color="red darken-2" dark fab v-if="fab">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn v-model="fab" color="teal" dark fab v-else>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-btn fab dark small color="deep-purple darken-1" @click="dialogList = true">
                <v-icon>mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-btn fab dark small color="light-blue darken-3">
                <v-icon>mdi-barcode-scan</v-icon>
            </v-btn>
        </v-speed-dial>
        <br><br>
    </div>
</template>

<script>
    export default {
        data: () => ({
            loader: null,
            loading: false,
            dateDefault: new Date().toLocaleDateString(),
            fab: false,
            dialogShow: false,
            dialogList: false,
            search: '',
            searchItem: [],
            item: null,
            itemsList: [
                {name: 'Жвачка', price: '120'},
                {name: 'Кола 0.5л', price: '150'},
                {name: 'Кола 0.25л', price: '90'},
                {name: 'Кола 1л', price: '200'},
                {name: 'Albeni орех', price: '200'},
                {name: 'Albeni фундук', price: '200'},
                {name: 'Rafaello большая', price: '1100'},
                {name: 'Rafaello средняя', price: '700'},
                {name: 'Rafaello коробочка', price: '450'},
                {name: 'Жвачка', price: '120'},
                {name: 'Кола 0.5л', price: '150'},
                {name: 'Кола 0.25л', price: '90'},
                {name: 'Кола 1л', price: '200'},
                {name: 'Albeni орех', price: '200'},
                {name: 'Albeni фундук', price: '200'},
                {name: 'Rafaello большая', price: '1100'},
                {name: 'Rafaello средняя', price: '700'},
                {name: 'Rafaello коробочка', price: '450'},
            ]
        }),
        mounted() {
            setTimeout(() => this.searchItem = this.itemsList)
            setTimeout()
        },
        computed: {
            filteredItems() {
                return this.searchItem.filter((item) => {
                    return item.name.toLowerCase().match(this.search)
                })
            }
        },
        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            },
        },
    }

</script>
<style lang="scss" scoped>
    .sell-list {
        max-width: 115px;
    }

    .btn-plus {
        position: fixed;
        bottom: 70px;
        right: 20px;
    }

    .top {
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 2;
        box-shadow: 0 0 5px 0 #888;
    }

    .bottom {
        position: sticky;
        bottom: 0;
        background-color: #fff;
        z-index: 2;
        box-shadow: 0 0 5px 0 #888;
    }

    .input-number {
        width: 65px;
    }
</style>
