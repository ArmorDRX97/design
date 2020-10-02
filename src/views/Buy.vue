<template>
    <div>
        <v-list>
            <v-list-item-group
                    v-model="item"
                    color="secondary"
            >
                <v-list-item
                        v-for="item in items"
                        @click="dialogShow = true"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-list-item-subtitle>{{item.price}} ₸  | {{item.count}} {{item.unit}}</v-list-item-subtitle>
                        <v-list-item-subtitle class="light-blue--text text--darken-3" v-if="item.status === 'save'">Сохранен</v-list-item-subtitle>
                        <v-list-item-subtitle class="teal--text" v-if="item.status === 'done'">Подтвержден</v-list-item-subtitle>
                        <v-list-item-subtitle class="grey--text text--darken-1" v-if="item.status === 'cancel'">Отменен</v-list-item-subtitle>
                        <v-list-item-subtitle class="red--text text--darken-2" v-if="item.status === 'return'">Возврат</v-list-item-subtitle>
                    </v-list-item-action>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-dialog
                v-model="dialogShow"
                max-width="500"
        >
            <v-card>
                <div class="text-right top">
                    <v-btn small class="ma-4" fab icon @click="dialogShow = false"><v-icon>mdi-close</v-icon></v-btn>
                </div>
                    <v-list>
                        <v-list-item
                                v-for="item in oneItem"
                                @click="dialogShow = true"
                                class="v-divider"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{item.text}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                                <v-list-item-subtitle>{{item.value}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                <v-card-actions class="bottom">
                    <v-spacer></v-spacer>
                    <v-btn fab small dark color="red darken-2" @click="dialogShow = false">
                        <v-icon>mdi-clipboard-arrow-left</v-icon>
                    </v-btn>
                    <v-btn fab small dark color="grey darken-1" @click="dialogShow = false">
                        <v-icon>mdi-cancel</v-icon>
                    </v-btn>
                    <v-btn fab small dark color="teal" @click="dialogShow = false">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
                v-model="dialogList"
                max-width="500"
                class="dialog-list"
        >
            <v-card>
                <div class="text-right top">
                    <v-btn small class="ma-4" fab icon @click="dialogList = false"><v-icon>mdi-close</v-icon></v-btn>
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

        <v-dialog
                v-model="dialogAdd"
                max-width="500px"
        >
            <v-card>
                <div class="text-right top">
                    <v-btn small class="ma-4" fab icon @click="dialogAdd = false"><v-icon>mdi-close</v-icon></v-btn>
                </div>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field label="№" value="1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Дата" :value="dateDefault"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Поставщик" value="Частное лицо"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Торговая точка" value="Торговая точка 1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Ответсвенное лицо" value="Хайруллин Тимур"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Порядковый номер товара" value="0001"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Код" value="0001"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Наименование товара"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Ед. измерения"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Количество"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field label="Цена"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Сумма"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                <v-card-actions class="bottom">
                    <v-spacer></v-spacer>
                    <v-btn small dark color="teal" @click="dialogAdd = false">
                        <v-icon left>mdi-content-save</v-icon>
                        Сохранить
                    </v-btn>
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
            <v-btn fab dark small color="teal" @click="dialogAdd = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
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
            dateDefault: new Date().toLocaleDateString(),
            fab: false,
            dialogShow: false,
            dialogAdd: false,
            dialogList: false,
            search: '',
            searchItem: [],
            item: null,
            items: [
                {
                    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repellat!',
                    count: 99,
                    status: 'save',
                    unit: 'шт',
                    date: '05.09.2020 10:25',
                    price: '5 100'
                },
                {
                    name: 'Жвачка',
                    count: 99,
                    status: 'done',
                    unit: 'шт',
                    date: '01.09.2020 12:23',
                    price: '800'
                },
                {
                    name: 'Кола',
                    count: 99,
                    status: 'cancel',
                    unit: 'шт',
                    date: '01.09.2020 12:23',
                    price: '12 570'
                },
                {
                    name: 'Хлеб',
                    count: 99,
                    status: 'save',
                    unit: 'шт',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    count: 99,
                    status: 'save',
                    unit: 'грамм',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    count: 99,
                    status: 'return',
                    unit: 'л',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    count: 99,
                    status: 'save',
                    unit: 'кг',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    count: 99,
                    status: 'save',
                    unit: 'шт',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    count: 99,
                    status: 'save',
                    unit: 'шт',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
            ],
            oneItem: [
                {text: '№', value: '1'},
                {text: 'Дата', value: '05.09.2020 10:25'},
                {text: 'Поставщик', value: 'Кто-то'},
                {text: 'Торговая точка', value: 'Торговая точка 1'},
                {text: 'Ответсвенное лицо', value: 'Хайруллин Тимур'},
                {text: 'Порядковый номер товара', value: '0001'},
                {text: 'Код', value: '0001'},
                {text: 'Наименование товара', value: 'Посох Дамблдора'},
                {text: 'Ед. измерения', value: 'шт.'},
                {text: 'Количество', value: '3'},
                {text: 'Цена', value: '100 000 ₸'},
                {text: 'Сумма', value: '300 000 ₸'},
            ],
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
        },

        computed: {
            filteredItems() {
                return this.searchItem.filter((item) => {
                    return item.name.toLowerCase().match(this.search)
                })
            }
        }
    }

</script>
<style lang="scss" scoped>
    .btn-plus {
        position: fixed;
        bottom: 70px;
        right: 20px;
    }

    .top{
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 2;
        box-shadow: 0 0 5px 0 #888;
    }

    .bottom{
        position: sticky;
        bottom: 0;
        background-color: #fff;
        z-index: 2;
        box-shadow: 0 0 5px 0 #888;
    }

    .v-dialog .v-list-item__title, .v-list-item__subtitle{
        white-space: pre-wrap;
    }
    .v-text-field {
        margin: 0;
        padding: 0;
    }

    .v-list{
        padding: 0;
    }
</style>
