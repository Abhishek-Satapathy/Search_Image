import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        per_page: 6
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setPerPage(state, action) {
            state.per_page = action.payload
        }
    }
})

export const { setQuery, setPerPage } = searchSlice.actions

export default searchSlice.reducer