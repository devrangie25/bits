export const state = () => ({
    parcels: [],
    latest_action: {}
});

export const mutations = {
    RESET_STATE(state) {
        Object.assign(state, state());
    },

    SET_PARCELS(state, data) {
        state.parcels = data
    },

    SET_LATEST_ACTION(state, data) {
        state.latest_action = data
    }
};

export const getters = {
    getParcels: (state) => {
        return state.parcels
    },

    getLatestAction: (state) => {
        return state.latest_action
    },
}

export const actions = {
    setState({ commit }) {
        commit("RESET_STATE");
    },

    setParcels({ commit }, data) {
        commit("SET_PARCELS", data)
    },

    setLatestAction({ commit }, data) {
        commit("SET_LATEST_ACTION", data)
    },

    async getParcelByRefId({ commit }, data) {
        try {
            const parcel = await this.$axios.$post('/parcels/get-parcel-by-ref', data)
            if (parcel.status) {
                return {
                    data: parcel.data,
                    message: 'Success',
                    error: false
                }
            } else {
                return {
                    message: 'Error',
                    error: true
                }
            }
        } catch (error) {
            console.error('error', error)
            return {
                message: error,
                error: true
            }
        }
    },

    async deleteParcel({ commit }, data) {
        try {
            const parcel = await this.$axios.$post('/parcels/delete-by-id', data)
            if (parcel.status) {
                return {
                    message: 'Success',
                    error: false
                }
            } else {
                return {
                    message: 'Error',
                    error: true
                }
            }
        } catch (error) {
            console.error('error', error)
            return {
                message: error,
                error: true
            }
        }
    },

    async getParcelShippingDetails({ commit }, parcel_id) {
        try {
            const shipping_details = await this.$axios.$post('/shipping-details/get-shipping-details-by-parcel', { parcel_id : parcel_id })
            console.log('shipping_details', shipping_details)
            if (shipping_details.status) {
                return {
                    message: 'Success',
                    error: false
                }
            } else {
                return {
                    message: 'Error',
                    error: true
                }
            }
        } catch (error) {
            console.error('error', error)
            return {
                message: error,
                error: true
            }
        }
    },

    async getParcels({ commit }) {
        try {
            const parcels = await this.$axios.$get('/parcels')
            if (parcels.status) {
                commit("SET_PARCELS", parcels.data)
                return {
                    data: parcels.data
                }
            } else {
                commit("SET_PARCELS", [])
            }
        } catch (error) {
            console.error('error', error)
        }
    },

    async updateParcel({ commit }, data) {
        try {
            const parcel = await this.$axios.$post('/parcels/update', data)
            if (parcel.status) {
                return {
                    message: 'Success',
                    error: false
                }
            } else {
                return {
                    message: 'Error',
                    error: true
                }
            }
        } catch (error) {
            console.error('error', error)
            return {
                message: error,
                error: true
            }
        }
    },

    async createParcel({ commit }, data) {
        console.log('createParcel from store', data)
        try {
            const newParcel = await this.$axios.$post('/parcels/create', data)
            if (newParcel.status) {
                commit("SET_LATEST_ACTION", { data: data, action: 'Add', msg: `Parcel has been added` })
                return {
                    data: newParcel.data,
                    message: 'Success',
                    error: false
                }
            } else {
                return {
                    message: 'Error',
                    error: true
                }
            }
        } catch (error) {
            console.error('error', error)
            return {
                message: error,
                error: true
            }
        }
    }
};
