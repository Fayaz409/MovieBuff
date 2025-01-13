import {configureStore} from '@reduxjs/toolkit'
import moviebuffReducer from './moviebuffSlice'
export const store = configureStore({
    reducer: {
         movieData: moviebuffReducer
    },
})