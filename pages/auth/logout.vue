<template>

</template>

<script>
export default {
    created(){
        this.$store.dispatch('parcels/setState')
        this.$store.dispatch('branches/setState')
        this.$store.dispatch('products/setState')
    }
}
</script>
