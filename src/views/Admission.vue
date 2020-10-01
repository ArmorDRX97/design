<template>
  <div>
      <v-list>
        <div class="d-flex align-center justify-space-between">
            <v-btn to="/cash" exact small color="grey darken-1" class="white--text"><v-icon small left>mdi-arrow-left</v-icon> Назад</v-btn>
            <v-subheader class="text-uppercase">Продажи</v-subheader>
        </div>
          <v-divider></v-divider>
          <v-list-item-group
                  v-model="item"
                  color="secondary"
          >
              <v-list-item
                      v-for="item in items"
                      @click="dialog = true"
              >
                  <v-list-item-content>
                      <v-list-item-title>{{item.name}}</v-list-item-title>
                      <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                      <v-list-item-subtitle>{{item.price}} ₸</v-list-item-subtitle>
                  </v-list-item-action>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <v-dialog
              v-model="dialog"
              max-width="500"
      >
          <v-card>
              <div class="text-right top">
                  <v-btn small class="ma-4" fab icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
              </div>
              <v-card class="ma-4">
                 <v-list>
                     <v-list-item
                             v-for="item in oneItem"
                             @click="dialog = true"
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
              </v-card>
          </v-card>
      </v-dialog>
  </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            item: null,
            items: [
                {
                    name: 'Sobranie',
                    date: '05.09.2020 10:25',
                    price: '5 100'
                },
                {
                    name: 'Жвачка',
                    date: '01.09.2020 12:23',
                    price: '800'
                },
                {
                    name: 'Кола',
                    date: '01.09.2020 12:23',
                    price: '12 570'
                },
                {
                    name: 'Хлеб',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
                    date: '01.09.2020 12:23',
                    price: '1 165'
                },
                {
                    name: 'Хлеб',
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
            ]
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

    .v-list-item__title, .v-list-item__subtitle{
        white-space: pre-wrap;
    }

</style>
