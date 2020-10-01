<template>
    <div>
        <v-tabs
            fixed-tabs
            centered
            icons-and-text
            color="light-blue darken-3"
        >
            <v-tabs-slider color="light-blue darken-3"></v-tabs-slider>
            <v-tab href="#tab-goods">
                <span class="small">товары</span>
                <v-icon small>mdi-heart</v-icon>
            </v-tab>
            <v-tab href="#tab-services">
                <span class="small">услуги</span>
                <v-icon small>mdi-heart</v-icon>
            </v-tab>
            <v-tab href="#tab-categories">
                <span class="small">категории</span>
                <v-icon small>mdi-heart</v-icon>
            </v-tab>

            <v-tab-item id="tab-goods">
                <v-card flat>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, iure!
                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item id="tab-services">
                <v-card flat>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, iure!
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item id="tab-categories">
                <v-card flat>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, iure!
                    </v-card-text>
                </v-card>
            </v-tab-item>

        </v-tabs>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .small{
        font-size: 8pt!important;
        margin: 0;
    }
</style>
