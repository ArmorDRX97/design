<template>
    <form>
        <v-text-field label="Порядковый номер" required v-model="id"></v-text-field>
        <v-text-field label="Дата" required v-model="date"></v-text-field>
        <v-text-field label="Поставщик" required v-model="contragent"></v-text-field>
        <v-text-field label="Торговая точка" required v-model="place"></v-text-field>
        <v-text-field label="Отвественное лицо" required v-model="face"></v-text-field>
        <v-text-field label="Порядковый номер товара" required v-model="number"></v-text-field>
        <v-text-field label="Код" required v-model="code"></v-text-field>
        <v-text-field label="Наименование товара" required v-model="name"></v-text-field>
        <v-text-field label="Ед. измерения" required v-model="unit"></v-text-field>
        <v-text-field label="Количество" required v-model="count"></v-text-field>
        <v-text-field label="Цена" required v-model="price"></v-text-field>
        <v-text-field label="Сумма" required v-model="total"></v-text-field>
        <br>
        <v-btn class="mr-4" dark color="blue darken-2" @click="onSubmit">Создать</v-btn>
        <v-btn dark color="pink" fab class="refresh"><v-icon>mdi-refresh</v-icon></v-btn>
    </form>
</template>
<script>

    export default {
        data: () => ({
            id: '1',
            date: new Date().toLocaleDateString(),
            contragent: 'Частное лицо',
            place: 'Торговая точка 1',
            face: 'Хайруллин Тимур',
            number: '00001',
            code: '00001',
            name: 'Товар 1',
            unit: 'Кг',
            count: '',
            price: '',
        }),
        computed: {
            total: function(){
                let sum = parseInt(this.count) * parseInt(this.price);
                if(isNaN(sum)){
                    sum = 0
                }
                return sum
            }
        },
        methods: {
            onSubmit(){
                this.$router.push('/buy')
            }
        }
    }
</script>

<style lang="scss">
    form{
        width: 100%;
    }
</style>
