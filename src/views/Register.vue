<template>
    <form>
        <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="30"
                label="Наименование организации"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="address"
                :error-messages="addressErrors"
                label="Адрес организации"
                required
                @input="$v.address.$touch()"
                @blur="$v.address.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="fio"
                :error-messages="fioErrors"
                label="Ф.И.О. (директора)"
                required
                @input="$v.fio.$touch()"
                @blur="$v.fio.$touch()"
        ></v-text-field>
        <v-select
                v-model="tarif"
                :items="items"
                :error-messages="tarifErrors"
                label="Тариф"
                required
                @change="$v.tarif.$touch()"
                @blur="$v.tarif.$touch()"
        ></v-select>
        <v-card
                max-width="450"
                class="mx-auto pa-0"
                v-show="itemsTrading.length"
        >
            <v-list two-line  style="padding: 0;">
                <template v-for="(item, index) in itemsTrading">
                    <v-divider></v-divider>
                    <v-list-item
                            :key="item.title"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.address"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar>
                            <v-btn icon fab color="blue darken-2">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-avatar>
                    </v-list-item>
                </template>
            </v-list>
        </v-card>
        <br>
        <div class="d-flex justify-start align-center">
            <p class="ma-0">Добавить торговую точку</p>
            <v-btn to="/register/add" class="ml-4" dark small color="blue darken-2" fab><v-icon>mdi-domain</v-icon></v-btn>
        </div>
        <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Я согласен с пользователским соглашением"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <br>
        <v-btn class="mr-4" dark color="blue darken-2" @click="submit">Создать</v-btn>
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
            fio: { required },
            tarif: { required },
            checkbox: {
                checked (val) {
                    return val
                },
            },
        },

        data: () => ({
            name: '',
            address: '',
            fio: '',
            tarif: null,
            items: [
                'Тариф 1',
                'Тариф 2',
                'Тариф 3',
                'Тариф 4',
            ],
            checkbox: false,
            itemsTrading: [
                {
                    title: 'Торговая точка 1',
                    address: "Коргальжинское шоссе, 19"
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
            fioErrors() {
                const errors = []
                if (!this.$v.fio.$dirty) return errors
                !this.$v.fio.required && errors.push('Заполните это поле')
                return errors
            },
            tarifErrors () {
                const errors = []
                if (!this.$v.tarif.$dirty) return errors
                !this.$v.tarif.required && errors.push('Выберите тариф')
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
                this.$router.push('/profile')
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.tarif = ''
                this.fio = ''
                this.address = null
                this.checkbox = false
            },
        },
    }
</script>

<style lang="scss">
    form{
        width: 100%;
    }
</style>
