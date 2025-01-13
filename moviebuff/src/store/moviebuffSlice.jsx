import {createSlice} from '@reduxjs/toolkit'

const initialState = {
     bannerData : [],
     imageURL : ""
}

export const moviebuffSlice = createSlice({
    name:'moviebuff',
    initialState,
    reducers: {
        setBannerData : (state,action)=>{
            state.bannerData = action.payload
        },
        setImageURL : (state,action)=>{
            state.imageURL = action.payload
        }
    }
})

export const {setBannerData,setImageURL} = moviebuffSlice.actions
export default moviebuffSlice.reducer