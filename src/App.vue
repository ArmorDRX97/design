<template>
    <v-app id="inspire">
        <Sidenav/>
        <v-main>
            <v-container
                    fluid
            >

                <transition-page>
                    <router-view/>
                </transition-page>

            </v-container>
        </v-main>
        <br><br><br>
        <Footer v-show="login === 'true'"/>

    </v-app>
</template>

<script>
    const DEFAULT_TRANSITION = 'fade';
    import Sidenav from '@/components/Sidenav';
    import Footer from '@/components/Footer';
    import TransitionPage from '@/components/TransitionPage';

    export default {
        name: 'App',
        components: {
            Sidenav, Footer, TransitionPage
        },
        data() {
            return {
                prevHeight: 0,
                login: ''
            };
        },
        watch: {
            '$route'(to) {
                this.login = to.meta.login || 'true'
            }
        },
    };
</script>

<style>
    @import "assets/css/style.scss";
</style>
