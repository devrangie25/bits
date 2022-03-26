<template>
    <div class="bg-img col-center-form">
        <v-row no-gutters class="bg-img-row">
            <v-col cols="12" class="bg-img-col">
                <div class="title-text white--text d-flex align-center">
                    Welcome to CrewBloom
                    <img
                        class="mx-2"
                        src="/img/waving-hand.png"
                        width="80"
                    />
                </div>
            </v-col>
            <v-col cols="12">
                <div class="subtitle-text white--text">
                    Find your next remote sales or support job with us.
                    Apply today!
                </div>
            </v-col>
            <v-col cols="12">
                <div class="icons">
                    <img 
                        v-for="(img, i) in imgs"
                        :key="i"
                        :src="`/img/${img}`"
                        width="50"
                        height="50"
                        class="icon-img rounded-circle" 
                    />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'SignupBg',

    data() {
        return {
            imgs: ['kate.png', 'paolo.png', 'zoe.png', 'krystal.png', 'kristina.png']
        }
    }
}
</script>

<style scoped lang="css">

.icons{
    padding-left: 6rem !important;
    margin-top: 1.5rem !important;
}

.icon-img{
    margin-right: -1rem !important;
    border: 2px solid white !important;
}

.bg-img {
    background-image: url('/img/pexels_bg2.jpg') !important;
    background-color: #439f6e !important;
    height: 100vh !important;
    background-blend-mode: multiply !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    opacity: 0.8 !important;
}

.bg-img-row{
    margin-top: -7rem !important;
}

.bg-img-col {
    padding-left: 6rem !important;
    padding-right: 6rem !important;
}

.col-center-form {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: 1 !important;
  height: 100% !important;
}

.subtitle-text {
  font-size: 36px !important;
  letter-spacing: -1px !important;
  padding-right: 8rem !important;
  padding-left: 6rem !important;
  line-height: 2.5rem !important;
  font-weight: 400 !important;
}

.title-text {
    font-size: 64px !important;
    font-weight: bold !important;
    letter-spacing: -1px !important;
}
</style>
