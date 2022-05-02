export const state = () => ({
    user: {}
});

export const mutations = {
    RESET_STATE(state) {
        Object.assign(state, state());
    },

    SET_USER(state, data) {
        state.user = data
    }
};

export const getters = {
    getUser: (state) => {
        return state.user
    }
}

export const actions = {
    setState({ commit }) {
        commit("RESET_STATE");
    },

    setUser({ commit }, data) {
        commit("SET_USER", data)
    },

    async resetPassword({ commit }, data) {
        try {
            const user = await this.$axios.$post('/users/forgot-password', data)
            if (user.success) {
                return {
                    message: 'Success',
                    error: false
                }
            } else {
                return {
                    message: user.message,
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

    async loginUser({ commit }, data) {
        try {
            const user = await this.$axios.$post('/users/login', data)
            console.log('login', user)
            if (user.success) {
                commit("SET_USER", user.data.user)
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

    async registerUser({ commit }, data) {
        try {
            const newUser = await this.$axios.$post('/users/create', data)
            if (newUser.success) {
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
    }
};
