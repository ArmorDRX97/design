<template>
    <v-app id="inspire">
        <Sidenav/>
        <v-main>
            <v-container
                    fluid
            >
                <transition
                        :name="transitionName"
                        mode="out-in"
                >
                    <router-view/>
                </transition>
            </v-container>
        </v-main>
        <br><br><br>
        <Footer v-show="login === 'true'"/>

    </v-app>
</template>

<script>
    const DEFAULT_TRANSITION = 'fade';
    import Sidenav from './components/Sidenav';
    import Footer from './components/Footer';

    export default {
        name: 'App',
        components: {
            Sidenav, Footer
        },
        data() {
            return {
                transitionName: DEFAULT_TRANSITION,
                login: ''
            };
        },
        watch: {
            '$route' (to) {
                this.login = to.meta.login || 'true'
            }
        },

        created() {
            this.$router.beforeEach((to, from, next) => {
                let transitionName = to.meta.transitionName || from.meta.transitionName;

                if (transitionName === 'slide') {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                }

                this.transitionName = transitionName || DEFAULT_TRANSITION;

                next();
            });
        }
    };
</script>

<style>
    @import "assets/css/style.scss";
</style>
