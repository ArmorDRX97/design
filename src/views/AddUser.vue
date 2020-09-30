<template>
    <form>
        <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="100"
                label="Ф.И.О."
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="iin"
                :error-messages="iinErrors"
                label="ИИН"
                required
                @input="$v.iin.$touch()"
                @blur="$v.iin.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="address"
                :error-messages="addressErrors"
                label="Адрес"
                required
                @input="$v.address.$touch()"
                @blur="$v.address.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="contact"
                :error-messages="contactErrors"
                label="Телефон"
                required
                @input="$v.contact.$touch()"
                @blur="$v.contact.$touch()"
        ></v-text-field>

        <br>
        <v-btn class="mr-4" dark color="blue darken-2" @click="submit">Создать</v-btn>
        <v-btn to="/register/add" class="mr-4" dark color="secondary">Назад</v-btn>
        <v-btn dark color="pink" @click="clear" fab class="refresh"><v-icon>mdi-refresh</v-icon></v-btn>
    </form>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            name: { required, maxLength: maxLength(100) },
            address: { required },
            iin: { required },
            contact: { required },
        },

        data: () => ({
            name: '',
            address: '',
            fio: '',
            contact: '',
            iin: '',
            checkbox: false
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
                !this.$v.address.required && errors.push('Введите адрес')
                return errors
            },
            iinErrors() {
                const errors = []
                if (!this.$v.iin.$dirty) return errors
                !this.$v.iin.required && errors.push('Введите ИИН')
                return errors
            },
            contactErrors() {
                const errors = []
                if (!this.$v.contact.$dirty) return errors
                !this.$v.contact.required && errors.push('Введите номер телефона')
                return errors
            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Ф.И.О. слишком длинное')
                !this.$v.name.required && errors.push('Заполните это поле')
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
                this.tarif = ''
                this.fio = ''
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
