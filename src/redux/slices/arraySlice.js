import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    arr: [1, 2, 3, 4, 5],
    algo: "Bubble",
    size: 10,
    sorting: false,
}

export const arraySlice = createSlice({
    name:"array",
    initialState,
    reducers:{
        initialize: (state) => {
            state.arr = [];
            for(let i=0; i<state.size; i++){
                state.arr.push(Math.floor(Math.random()*100)+1);
            }

            // state.algo = "Bubble";
            // state.size = 10;
            // state.sorting = false;
        },
        setArr: (state, value) => {
            state.arr = value.payload;
        },
        setAlgo: (state, value) => {
            state.algo = value.payload;
        },
        setSize: (state, value) => {
            state.size = value.payload;
        },
        setSorting: (state, value) => {
            state.sorting = value.payload;
        }
    }
})

export const { initialize, setArr, setAlgo, setSize, setSorting } = arraySlice.actions;
export default arraySlice.reducer;