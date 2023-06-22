import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getTopMovies = createAsyncThunk("getTopMovies",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
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






const topMoveis = createSlice({
    name:"topMoveis",
    initialState:{topMoveis:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(getTopMovies.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(getTopMovies.fulfilled,(state,action)=>{
            state.loading=false
          state.topMoveis= action.payload.results
        })
        builder.addCase(getTopMovies.rejected,(state,action)=>{
            state.topMoveis=action.payload
        })
    }
})


export const topMovie=topMoveis.reducer