<template>
    <div>
        <div class="d-flex justify-center">
            <v-img
                src="/img/delivery-failed.png"
                :width="`${['large', 'extra-large'].includes(width) ? 300 : 100}`"
            ></v-img>
        </div>
        <div class="d-flex justify-start text-center title font-weight-bold text-failed">
            Unsuccessful Delivery!
        </div>
        <div class="d-flex justify-center subtitle-1 font-weight-bold text-failed text-break text-center">
            This Items return to Sender in 3-5 days!
        </div>
    </div>
</template>

<script>
export default {

    computed: {
        width() {
			const screenWidth = this.$vuetify.breakpoint.width;

			if (screenWidth < 600) {
				console.log("Extra Small Screen");
				return "extra-small";
			}
			if (screenWidth > 600 && screenWidth < 960) {
				console.log("Small Screen");
				return "small";
			}
			if (screenWidth > 960 && screenWidth < 1264) {
				console.log("Medium Screen");
				return "medium";
			}
			if (screenWidth > 1264 && screenWidth < 1904) {
				console.log("Large Screen");
				return "large";
			}
			if (screenWidth > 1904) {
				console.log("Extra Large Screen");
				return "extra-large";
			}
		},
    },
};
</script>

<style scoped>
.text-failed {
    color: #BF360C !important;
}
</style>
