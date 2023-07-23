import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const MoviesSlideDetails = createAsyncThunk("MoviesSlideDetails",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}`,
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
export const MoviesSlideCast = createAsyncThunk("MoviesSlideCast",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}/credits`,
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






const moviesPage = createSlice({
    name:"moviesPage",
    initialState:{moviesDetails:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(MoviesSlideDetails.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(MoviesSlideDetails.fulfilled,(state,action)=>{
            state.loading=false
           state.moviesDetails= action.payload
        })
        builder.addCase(MoviesSlideDetails.rejected,(state,action)=>{
            state.moviesDetails=action.payload
        })
    }
})
const moviesPageCast = createSlice({
    name:"moviesPageCast",
    initialState:{moviesCast:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(MoviesSlideCast.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(MoviesSlideCast.fulfilled,(state,action)=>{
            state.loading=false
        
           let x= action.payload.cast.filter((w,e)=>  e<12 )
            state.moviesCast=x
        
         
        })
        builder.addCase(MoviesSlideCast.rejected,(state,action)=>{
            state.moviesCast=action.payload
        })
    }
})


export const moviesDetail=moviesPage.reducer
export const moviesCast=moviesPageCast.reducer