<template>
    <div>
            <v-card-subtitle>
                <v-icon class="mr-1" small>mdi-account</v-icon>
                Хайруллин Тимур Ринаточич
            </v-card-subtitle>
                <v-card-subtitle class="py-0 pb-2 d-flex align-center justify-space-between">
                   <div>
                       <v-icon class="mr-1" small>mdi-calendar</v-icon>
                       {{date}}
                   </div>
                    <v-btn to="/cash/admission" small color="light-blue darken-3" class="white--text">
                        <v-icon left small>
                            mdi-eye
                        </v-icon>
                        поступления
                    </v-btn>
                </v-card-subtitle>
            <v-divider></v-divider>
            <v-list>
                <v-subheader class="text-uppercase">Остаток</v-subheader>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-clock</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-subtitle>Начало дня</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-list-item-subtitle>124 100 ₸</v-list-item-subtitle>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-clock-check</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-subtitle>Конец дня</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-list-item-subtitle>194 350 ₸</v-list-item-subtitle>
                    </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
            <div class="pa-4">
                <v-card
                        elevation="3"
                >
                    <div class="d-flex align-center justify-space-between">
                        <v-card-subtitle>
                            Выдача денег
                        </v-card-subtitle>
                        <v-btn
                                x-small
                                fab
                                color="teal"
                                class="mr-3 white--text"
                                @click="give = true"
                        >
                            <v-icon>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                    </div>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Курбанов Данияр</v-list-item-title>
                                <v-list-item-subtitle>24 100 ₸</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <div class="d-flex">
                                    <v-btn fab x-small icon color="grey darken-1" class="white--text">
                                        <v-icon small>mdi-eye</v-icon>
                                    </v-btn>
                                    <v-btn fab x-small icon color="light-blue darken-3" class="white--text">
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn fab x-small icon color="red darken-2" class="white--text">
                                        <v-icon small>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Курбанов Данияр</v-list-item-title>
                                <v-list-item-subtitle>24 100 ₸</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <div class="d-flex">
                                    <v-btn fab x-small icon color="grey darken-1" class="white--text">
                                        <v-icon small>mdi-eye</v-icon>
                                    </v-btn>
                                    <v-btn fab x-small icon color="light-blue darken-3" class="white--text">
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn fab x-small icon color="red darken-2" class="white--text">
                                        <v-icon small>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
                <v-card
                        elevation="3"
                        color="mt-4"
                >
                    <div class="d-flex align-center justify-space-between">
                        <v-card-subtitle>
                            Изъятие денег
                        </v-card-subtitle>
                        <v-btn
                                x-small
                                color="teal"
                                fab
                                class="mr-3 white--text"
                                @click="give = true"
                        >
                            <v-icon>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                    </div>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Хайруллин Тимур</v-list-item-title>
                                <v-list-item-subtitle>12 100 ₸</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <div class="d-flex">
                                    <v-btn fab x-small icon color="grey darken-1" class="white--text">
                                        <v-icon small>mdi-eye</v-icon>
                                    </v-btn>
                                    <v-btn fab x-small icon color="light-blue darken-3" class="white--text">
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn fab x-small icon color="red darken-2" class="white--text">
                                        <v-icon small>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </div>

        <v-dialog
                v-model="give"
                max-width="500px"
        >
            <v-card>
                <div class="text-right top">
                    <v-btn small class="ma-4" fab icon @click="give = false"><v-icon>mdi-close</v-icon></v-btn>
                </div>
                    <v-container>
                        <v-row>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Дата"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Номер"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Вид операции"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Торговая точка"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Получатель"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Назначение"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Сумма"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-text-field
                                        label="Ф.И.О."
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                <v-card-actions class="bottom">
                    <v-spacer></v-spacer>
                    <v-btn small dark color="teal" @click="give = false">
                        <v-icon left>mdi-content-save</v-icon>
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <br><br>

        <v-dialog
                v-model="confirm"
                max-width="500px"
        >
            <v-card class="text-center pa-4">
                <v-card-subtitle class="text-center pa-0 pb-4">
                    Вы уверены, что хотите закрыть смену?
                </v-card-subtitle>
                <v-btn small fab class="white--text" color="teal" @click="confirm = false"><v-icon>mdi-check</v-icon></v-btn>
                <v-btn small fab class="white--text ml-2" color="red darken-2" @click="confirm = false"><v-icon>mdi-close</v-icon></v-btn>
            </v-card>
        </v-dialog>

        <v-btn
                color="red darken-2"
                fab
                class="btn-plus white--text"
                @click="confirm = true"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        data: () => ({
            date: new Date().toLocaleDateString(),
            give: false,
            confirm: false
        }),
    }
</script>

<style lang="scss" scoped>
    .v-text-field {
        margin: 0;
        padding: 0;
    }

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

</style>
