<template>
 <div>
     <v-data-table
             :headers="headers"
             :items="desserts"
             :items-per-page="5"
             class="elevation-1"
     >
         <template v-slot:item.actions="{ item }">
             <v-btn color="green" x-small fab class="white--text mr-2">
                 <v-icon>mdi-eye</v-icon>
             </v-btn>
            <v-btn color="blue" x-small fab class="white--text mr-2">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
             <v-btn color="red" x-small fab class="white--text">
                 <v-icon>mdi-delete</v-icon>
             </v-btn>
         </template>

     </v-data-table>
     <v-btn to="/buy/buy-add" fab color="green" class="btn-plus white--text"><v-icon class="white--text">mdi-plus</v-icon></v-btn>
     <br><br>
 </div>
</template>


<style lang="scss" scoped>

</style>

<script>
    export default {
        data() {
            return {
                headers: [
                    {text: '№', align: 'start', value: 'id',},
                    {text: 'Дата', value: 'date'},
                    {text: 'Поставщик', value: 'contragent'},
                    {text: 'Торговая точка', value: 'place'},
                    {text: 'Ответсвенное лицо', value: 'face'},
                    {text: 'Порядковый номер товара', value: 'number'},
                    {text: 'Код', value: 'code'},
                    {text: 'Наименование товара', value: 'name'},
                    {text: 'Ед. измерения', value: 'unit'},
                    {text: 'Количество', value: 'count'},
                    {text: 'Цена', value: 'price'},
                    {text: 'Сумма', value: 'sum'},
                    {text: '', value: 'actions'},
                ],
                desserts: [
                    {
                        id: '1',
                        date: new Date().toLocaleDateString(),
                        contragent: 'Частное лицо',
                        place: 'Торговая точка 1',
                        face: 'Хайруллин Тимур',
                        number: '00001',
                        code: '00001',
                        name: 'Товар 1',
                        unit: 'Кг',
                        count: '20',
                        price: '500 ₸',
                        sum: '10000 ₸',
                        actions: ''
                    },
                    {
                        id: '2',
                        date: new Date().toLocaleDateString(),
                        contragent: 'Частное лицо',
                        place: 'Торговая точка 1',
                        face: 'Хайруллин Тимур',
                        number: '00002',
                        code: '00002',
                        name: 'Товар 2',
                        unit: 'Шт',
                        count: '30',
                        price: '100 ₸',
                        sum: '30000 ₸'
                    }
                ],
            }
        }
    }
</script>


<style lang="scss" scoped>
    .btn-plus{
        position: fixed;
        bottom: 70px;
        right: 20px;
    }
</style>
