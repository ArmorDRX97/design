<template>
    <form>
        <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="30"
                label="Наименование торговой точки"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="address"
                :error-messages="addressErrors"
                label="Адрес торговой точки"
                required
                @input="$v.address.$touch()"
                @blur="$v.address.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="leftover"
                :error-messages="leftoverErrors"
                label="Остатки товара"
                required
                @input="$v.leftover.$touch()"
                @blur="$v.leftover.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="money"
                :error-messages="moneyErrors"
                label="Остатки денежных средств"
                required
                @input="$v.money.$touch()"
                @blur="$v.money.$touch()"
        ></v-text-field>
        <v-card
                max-width="450"
                class="mx-auto pa-0"
                v-show="users.length"
        >
            <v-list two-line  style="padding: 0;">
                <template v-for="(item, index) in users">
                    <v-divider></v-divider>
                    <v-list-item
                            :key="item.title"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.phone"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar>
                            <v-btn icon fab color="blue darken-2">
                                <v-icon>mdi-account-edit</v-icon>
                            </v-btn>
                        </v-list-item-avatar>
                    </v-list-item>
                </template>
            </v-list>
        </v-card>
        <br>
        <div class="d-flex justify-start align-center">
            <p class="ma-0">Добавить ответственное лицо</p>
            <v-btn to="/register/add/add-user" class="ml-4" dark small color="blue darken-2" fab><v-icon>mdi-account-multiple-plus</v-icon></v-btn>
        </div>
        <br>
        <v-btn class="mr-4" dark color="blue darken-2" @click="submit">Создать</v-btn>
        <v-btn to="/register" class="mr-4" dark color="secondary">Назад</v-btn>
        <v-btn dark color="pink" @click="clear" fab class="refresh"><v-icon>mdi-refresh</v-icon></v-btn>
    </form>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            name: { required, maxLength: maxLength(30) },
            address: { required },
            leftover: { required },
            money: { required },
        },

        data: () => ({
            name: '',
            address: '',
            fio: '',
            money: '',
            leftover: '',
            checkbox: false,
            users: [
                {
                    title: 'Хайруллин Тимур Ринатович',
                    phone: "+7 (700) 270 74 02",
                },
                {
                    title: 'Жоламанова Эльнура Жамбырбаевна',
                    phone: "+7 (700) 241 24 12",
                }
            ],
        }),

        computed: {
            checkboxErrors () {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors
                !this.$v.checkbox.checked && errors.push('Для завершения поставьте галочку!')
                return errors
            },
            addressErrors() {
                const errors = []
                if (!this.$v.address.$dirty) return errors
                !this.$v.address.required && errors.push('Введите свой адрес')
                return errors
            },
            leftoverErrors() {
                const errors = []
                if (!this.$v.leftover.$dirty) return errors
                !this.$v.leftover.required && errors.push('Введите количество остатков')
                return errors
            },
            moneyErrors() {
                const errors = []
                if (!this.$v.money.$dirty) return errors
                !this.$v.money.required && errors.push('Введите количество денег')
                return errors
            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Наименование слишком длинное')
                !this.$v.name.required && errors.push('Заполните наименование')
                return errors
            }
        },

        methods: {
            submit () {
                this.$v.$touch()
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.leftover = ''
                this.money = ''
                this.address = null
            },
        },
    }
</script>

<style lang="scss">
    form{
        width: 100%;
    }
</style>
