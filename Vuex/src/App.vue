<template>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" exact class="navbar-brand"><strong>Vuex Inc.</strong></router-link>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav"></ul>

                    <div class="nav navbar-nav navbar-right">
                        <button v-if="!isLoggedIn" @click="login" class="btn btn-success">
                            Log in
                        </button>
                        <button v-else @click="logout" class="btn btn-primary">
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                isLoggedIn: 'user/isLoggedIn'
            })
        },
        methods: {
            ...mapActions('user', {
                login: 'login',
                logout: 'logout'
            })
        }
    }
</script>

<style>
    .flex { display: flex; }
    .flex.flex-column { flex-direction: column; }
    .flex.flex-row { flex-direction: row; }
    .flex.justify-center { justify-content: center; }
    .flex.justify-left { justify-content: flex-start; }
    .flex.justify-right { justify-content: flex-end; }
    .flex.align-center { align-items: center; }
    .flex.align-left { align-items: flex-start; }
    .flex.align-right { align-items: flex-end; }

    /* Navigation */
    .navbar .navbar-right > * {
        float: right;
    }
</style>