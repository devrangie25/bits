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
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ x.icon }}
          </v-icon>
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
            icon: 'mdi-facebook',
            link: ''
        },
        {
            icon: 'mdi-twitter',
            link: ''
        },
        {
            icon: 'mdi-linkedin',
            link: ''
        },
        {
            icon: 'mdi-instagram',
            link: ''
        },
      ],
    }),
  }
</script>
