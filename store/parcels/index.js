export const state = () => ({
    parcels: []
});

export const mutations = {
    RESET_STATE(state) {
        Object.assign(state, state());
    },

    SET_PARCELS(state, data) {
        state.parcels = data
    }
};

export const getters = {
    getParcels: (state) => {
        return state.parcels
    }
}

export const actions = {
    setState({ commit }) {
        commit("RESET_STATE");
    },

    setParcels({ commit }, data) {
        commit("SET_PARCELS", data)
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
        try {
            const newParcel = await this.$axios.$post('/parcels/create', data)
            if (newParcel.status) {
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
