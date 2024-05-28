import { configureStore } from '@reduxjs/toolkit'
import arraySlice from './slices/arraySlice'

export default configureStore({
    reducer: {
        array: arraySlice,
    },
})