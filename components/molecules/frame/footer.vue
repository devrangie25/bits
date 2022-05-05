<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center"
      color="#499f6e"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="(x, y) in socials"
          :key="y"
          class="mx-4 white--text text-none btn"
          text
        >
          <v-icon size="24px" left>
            {{ x.icon }}
          </v-icon>
            {{ x.text }}
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Bantayan Island Trucking Services</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      socials: [
        {
            icon: 'mdi-gmail',
            link: '',
            text: 'bits@gmail.com'
        },
        {
            icon: 'mdi-facebook',
            link: '',
            text: 'facebook.com/bits'
        },
        {
            icon: 'mdi-phone',
            link: '',
            text: '+6390-6320-3071'
        },
      ],
    }),
  }
</script>

<style scoped>
.btn{
    pointer-events: none;
}
</style>
