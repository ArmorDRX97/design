<template>
    <div>
        <v-tabs
            fixed-tabs
            centered
            icons-and-text
            color="light-blue darken-3"
            v-model="activeTab"
        >
            <v-tabs-slider color="light-blue darken-3"></v-tabs-slider>
            <v-tab href="#tab-goods" id="1">
                <span class="small">товары</span>
                <v-icon small>mdi-heart</v-icon>
            </v-tab>
            <v-tab href="#tab-categories" id="2">
                <span class="small">категории</span>
                <v-icon small>mdi-heart</v-icon>
            </v-tab>

            <v-tab-item id="tab-goods">
                <br>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                           Категория 1
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
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
                                            <v-list-item-subtitle>{{item.count}} {{item.unit}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-list-item-subtitle>{{item.price}} ₸</v-list-item-subtitle>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Категория 2
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
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
                                            <v-list-item-subtitle>{{item.count}} {{item.unit}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-list-item-subtitle>{{item.price}} ₸</v-list-item-subtitle>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-tab-item>


            <v-tab-item id="tab-categories">
                <br>
                    <v-treeview
                            v-model="tree"
                            :open="open"
                            :items="categories"
                            activatable
                            item-key="name"
                            transition
                    >
                        <template v-slot:prepend="{ item, open }">
                            <v-btn icon color="light-blue darken-3" @click="dialogEdit = true">
                            <v-icon small>
                                mdi-pencil
                            </v-icon>
                            </v-btn>
                        </template>
                    </v-treeview>
            </v-tab-item>

        </v-tabs>

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
                    <v-btn fab small dark color="red darken-2" @click="dialogShow = false, confirm = true">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn fab small dark color="light-blue darken-3" @click="dialogShow = false, dialogAdd = true">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="confirm"
                max-width="500px"
        >
            <v-card class="text-center pa-4">
                <v-card-subtitle class="text-center pa-0 pb-4">
                    Вы уверены, что хотите удалить товар?
                </v-card-subtitle>
                <v-btn small fab class="white--text" color="teal" @click="confirm = false"><v-icon>mdi-check</v-icon></v-btn>
                <v-btn small fab class="white--text ml-2" color="red darken-2" @click="confirm = false"><v-icon>mdi-close</v-icon></v-btn>
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
                            <v-text-field label="Порядковый номер товара" value="0001"
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
                        <v-col
                                class="d-flex"
                                cols="12"
                                sm="6"
                        >
                            <v-select
                                    :items="selects"
                                    label="Категория"
                                    :value="selects[0]"
                            ></v-select>
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
        <v-dialog
                v-model="dialogEdit"
                max-width="500px"
        >
            <v-card>
                <div class="text-right top">
                    <v-btn small class="ma-4" fab icon @click="dialogEdit = false"><v-icon>mdi-close</v-icon></v-btn>
                </div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Название категории" value="Название какое-то"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                        <v-select
                                :items="categories"
                                label="Родитель"
                                item-value="name"
                                item-text="name"
                        ></v-select>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions class="bottom">
                    <v-spacer></v-spacer>
                    <v-btn small dark color="teal" @click="dialogEdit = false">
                        <v-icon left>mdi-content-save</v-icon>
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
            <v-btn color="teal" dark fab class="btn-plus" @click="dialogAdd = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
    </div>
</template>

<script>
    export default {
        data: () => ({
            dialogAdd: false,
            dialogShow: false,
            dialogEdit: false,
            confirm: false,
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
            selects: ['Категория 1', 'Категория 2', 'Категория 3', 'Категория 4'],
            oneItem: [
                {text: '№', value: '1'},
                {text: 'Порядковый номер товара', value: '0001'},
                {text: 'Наименование товара', value: 'Посох Дамблдора'},
                {text: 'Ед. измерения', value: 'шт.'},
                {text: 'Количество', value: '3'},
                {text: 'Цена', value: '100 000 ₸'},
                {text: 'Категория', value: 'Категория 1'},
            ],
                open: ['public'],
                tree: [],
                categories: [
                    {
                        name: 'Овощи',
                    },
                    {
                        name: 'Фрукты',
                    },
                    {
                        name: 'Напитки',
                        children: [
                            {
                                name: 'Сладкие',
                                children: [{
                                    name: 'Кола',
                                }],
                            },
                            {
                                name: 'Вода газированная',
                            },
                            {
                                name: 'Вода негазированная',
                            },
                        ],
                    },
                    {
                        name: 'Хлебобулочные',
                        children: [
                            {
                                name: 'Сладкие',
                            },
                            {
                                name: 'Несладкие',
                            }
                        ],
                    },
                    {
                        name: 'Чипсы',
                    },
                    {
                        name: 'Сигареты',
                    },
                ],
        })
    }
</script>

<style lang="scss" scoped>
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
    .v-list{
        padding: 0;
    }

    .v-text-field {
        margin: 0;
        padding: 0;
    }

    .small{
        font-size: 8pt!important;
        margin: 0;
    }

    .btn-plus {
        position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 2;
    }

</style>
