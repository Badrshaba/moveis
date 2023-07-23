import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const SeriesSlideDetails = createAsyncThunk("SeriesSlideDetails",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/${id}`,
            params: {language: 'en-US',},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTgxMzY3ZjQ3YzI4NWMxY2I3MWU5ZTE4Y2JjNTRjMCIsInN1YiI6IjY0OGIwMzAyYzNjODkxMDBhZTRmNmMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fwR3on1-nmhmEiExTQD4aq1-K1-GJ8n9dmuWgLJ_ycE'
            }
          };
          
          return await axios
            .request(options)
            .then(function (response) {
            return response.data 
            })
            .catch(function (error) {
             return error
            });
    }catch(e){
    return    rejectWithValue(e)
    }
})
export const SeriesSlideCast = createAsyncThunk("SeriesSlideCast",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/tv/${id}/credits`,
            params: {language: 'en-US',},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTgxMzY3ZjQ3YzI4NWMxY2I3MWU5ZTE4Y2JjNTRjMCIsInN1YiI6IjY0OGIwMzAyYzNjODkxMDBhZTRmNmMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fwR3on1-nmhmEiExTQD4aq1-K1-GJ8n9dmuWgLJ_ycE'
            }
          };
          
          return await axios
            .request(options)
            .then(function (response) {
            return response.data 
            })
            .catch(function (error) {
             return error
            });
    }catch(e){
    return    rejectWithValue(e)
    }
})






const SeriesPage = createSlice({
    name:"SeriesPage",
    initialState:{SeriesDetails:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(SeriesSlideDetails.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(SeriesSlideDetails.fulfilled,(state,action)=>{
            state.loading=false
           state.SeriesDetails= action.payload
        })
        builder.addCase(SeriesSlideDetails.rejected,(state,action)=>{
            state.SeriesDetails=action.payload
        })
    }
})
const SeriesPageCast = createSlice({
    name:"SeriesPageCast",
    initialState:{SeriesCast:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(SeriesSlideCast.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(SeriesSlideCast.fulfilled,(state,action)=>{
            state.loading=false
            let x= action.payload.cast.filter((w,e)=>  e<12 )
            state.SeriesCast=x
        })
        builder.addCase(SeriesSlideCast.rejected,(state,action)=>{
            state.SeriesCast=action.payload
        })
    }
})


export const SeriesDetail=SeriesPage.reducer
export const SeriesCast=SeriesPageCast.reducer