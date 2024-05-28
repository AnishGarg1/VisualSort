import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    arr: [],
    algo: "Bubble",
    size: 0,
    sorting: false,
}

export const arraySlice = createSlice({
    name:'array',
    initialState,
    reducers:{
        setArr: (state, action) => {
            state.value = action.payload;
        },
        setAlgo: (state, action) => {
            state.value = action.payload;
        },
        setSize: (state, action) => {
            state.value = action.payload;
        },
        setSorting: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setArr, setAlgo, setSize, setSorting } = arraySlice.actions;
export default arraySlice.reducer;