export const state = () => ({
    branches: []
});

export const mutations = {
    RESET_STATE(state) {
        Object.assign(state, state());
    },

    SET_BRANCHES(state, data) {
        state.branches = data
    }
};

export const getters = {
    getBranches: (state) => {
        return state.branches
    }
}

export const actions = {
    setState({ commit }) {
        commit("RESET_STATE");
    },

    setBranches({ commit }, data) {
        commit("SET_BRANCHES", data)
    },

    async getBranches({ commit }) {
        try {
            const branches = await this.$axios.$get('/branches')
            if (branches.status) {
                commit("SET_BRANCHES", branches.data)
                return {
                    data: branches.data,
                    success: true
                }
            } else {
                commit("SET_BRANCHES", [])
                return {
                    data: [],
                    success: false
                }
            }
        } catch (error) {
            console.error('error', error)
        }
    },

    async deleteBranch({ commit }, data) {
        try {
            const branch = await this.$axios.$post('/branches/delete-by-id', data)
            if (branch.status) {
                console.log('deleteBranch', branch)
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

    async updateBranch({ commit }, data) {
        try {
            const branch = await this.$axios.$post('/branches/update', data)
            if (branch.status) {
                return {
                    data: branch.data,
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

    async createBranch({ commit }, data) {
        try {
            const newBranch = await this.$axios.$post('/branches/create', data)
            if (newBranch.status) {
                return {
                    data: newBranch.data,
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
