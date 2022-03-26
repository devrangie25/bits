<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" lg="7" class="bg-img d-none d-lg-flex">
                <div class="display-2 font-weight-bold col-1-center-form ">
                    Bantayan Island Trucking Services
                </div>
            </v-col>
            <v-col cols="12" lg="5" class="col-2-center-form">
                <bt-m-auth-form title="Login"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    layout: "auth",
    name: "login",
};
</script>

<style scoped>

.bg-img {
    background-image: url('/img/truck.jpeg') !important;
    background-color: #3c5a77 !important;
    background-blend-mode: multiply !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    opacity: 0.8 !important;
}

.col-1-center-form {
    color: white !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 1 !important;
    height: 100vh !important;
}

.col-2-center-form {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 1 !important;
    height: 100vh !important;
}
</style>
