<template>
    <div>
        <v-card
                class="mx-auto card-main"
                max-width="400"
        >
            <v-img
                    class="white--text align-center card-header-main"
               height="160px"
                    src="../assets/img/asfalt-dark.png"
            >
                <div class="d-flex align-center justify-start">
                    <v-card-title style="font-size: 5vw;">Наименование организации</v-card-title>
                </div>
                <v-divider style="border-color: rgba(255, 255, 255, 0.42);"></v-divider>
                <div class="d-flex align-center justify-space-between">
                   <div>
                       <v-card-title>Торговая точка 1</v-card-title>
                       <v-card-subtitle style="color: #999;"><v-icon style="color: #999;" small>mdi-account</v-icon> Тимур Хайруллин</v-card-subtitle>
                   </div>
                    <v-btn icon class="white--text ma-4 btn"><v-icon>mdi-pencil</v-icon></v-btn>
                </div>
            </v-img>
            <v-card-text class="text--primary text-center">
                <small>Денег в кассе</small>
                <p style="font-size: 20pt; margin-top: 3px; margin-bottom: 0;">76 453 ₸</p>
            </v-card-text>
            <v-divider></v-divider>
            <div class="d-flex align-center justify-space-between text-center">
                <v-card-text class="text--primary">
                    <small>Товаров</small>
                    <p style="font-size: 6vw; margin-top: 3px; margin-bottom: 0;">150 штук</p>
                </v-card-text>
                <v-card-text class="text--primary">
                    <small>На сумму</small>
                    <p style="font-size: 6vw; margin-top: 3px; margin-bottom: 0;">21 230 453 ₸</p>
                </v-card-text>
            </div>
            <v-divider></v-divider>
            <v-list class="d-flex align-center justify-space-between text-center">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Всего продаж</v-list-item-title>
                            <v-list-item-subtitle>67 000 ₸</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                <v-list-item style="border-left: 1px solid #ddd">
                    <v-list-item-content>
                        <v-list-item-title>За месяц</v-list-item-title>
                        <v-list-item-subtitle>47 000 ₸</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list class="d-flex align-center justify-space-between text-center">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>За неделю</v-list-item-title>
                        <v-list-item-subtitle>27 000 ₸</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item style="border-left: 1px solid #ddd">
                    <v-list-item-content>
                        <v-list-item-title>За день</v-list-item-title>
                        <v-list-item-subtitle>4 000 ₸</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
        <br>
        <v-btn to="/journal" color="blue darken-2" class="white--text">Журнал операций</v-btn>
    </div>
</template>


<style lang="scss" scoped>
    .card-header-main{
        background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    }

    .v-list{
        padding: 0;
    }
</style>

<script>
    export default {
        data: () => ({

        }),
    }
</script>
