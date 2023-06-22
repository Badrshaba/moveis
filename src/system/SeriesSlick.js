import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllSeries = createAsyncThunk("getAllSeries",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/on_the_air',
            params: {language: 'en-US', page: '1'},
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






const SeriesSlick = createSlice({
    name:"SeriesSlick",
    initialState:{series:[],loadind:false},
    extraReducers:(builder)=>{
        builder.addCase(getAllSeries.pending,(state)=>{
            state.loadind=true
        })
        builder.addCase(getAllSeries.fulfilled,(state,action)=>{
            state.loadind=false
           state.series= action.payload.results
        })
        builder.addCase(getAllSeries.rejected,(state,action)=>{
            state.series=action.payload
        })
    }
})


export const series=SeriesSlick.reducer