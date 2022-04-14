export const state = () => ({
    products: []
});

export const mutations = {
    RESET_STATE(state) {
        Object.assign(state, state());
    },

    SET_PRODUCTS(state, data) {
        state.products = data
    }
};

export const getters = {
    getProducts: (state) => {
        return state.products
    }
}

export const actions = {
    setState({ commit }) {
        commit("RESET_STATE");
    },

    setProducts({ commit }, data) {
        commit("SET_PRODUCTS", data)
    },

    async getProducts({ commit }) {
        try {
            const products = await this.$axios.$get('/products')
            if (products.status) {
                commit("SET_PRODUCTS", products.data)
            } else {
                commit("SET_PRODUCTS", [])
            }
        } catch (error) {
            console.error('error', error)
        }
    },

    async deleteProduct({ commit }, data) {
        try {
            const product = await this.$axios.$post('/products/delete', data)
            if (product.status) {
                return {
                    data: product.data,
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

    async updateProduct({ commit }, data) {
        try {
            const product = await this.$axios.$post('/products/update', data)
            if (product.status) {
                return {
                    data: product.data,
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

    async createProduct({ commit }, data) {
        try {
            const newProduct = await this.$axios.$post('/products/create', data)
            if (newProduct.status) {
                return {
                    data: newProduct.data,
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
