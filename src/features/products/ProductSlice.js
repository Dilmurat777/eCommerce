
import { createSlice } from '@reduxjs/toolkit'
import Products from '../../productContent.js'

const initialState = {
	items: Products,
	filteredItems: Products,
	searchTerm: "",
	selectCategory: 'All'
}

const filterProducts = (state) => {
	return state.items.filter((product) => {
		const matchSearchTerm = product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
		const matchCategory = product.category === state.selectCategory || state.selectCategory === 'All'
		return matchSearchTerm && matchCategory
	})
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
			state.filteredItems = filterProducts(state);
		},
		setSelectedCategory: (state, action) => {
			state.selectCategory = action.payload;
			state.filteredItems = filterProducts(state);
		}
	}
})

export const { setSearchTerm, setSelectedCategory } = productSlice.actions
export default productSlice.reducer