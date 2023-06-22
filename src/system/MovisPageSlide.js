import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAllMoviesPage = createAsyncThunk("getAllMoviesPage",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {language: 'en-US', page:`${id}`},
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






const moviesSlidePage = createSlice({
    name:"moviesSlidePage",
    initialState:{moviesPage:[],numPage:1 ,loading:false},
    reducers:{
        nextpage:(state)=>{
            state.numPage+=1
            return state
        },
        backpage:(state)=>{
            state.numPage-=1
            return state
        },
        lastpage:(state)=>{
            state.numPage=500
            return state
        }, 
        firstpage:(state)=>{
            state.numPage=1
            return state
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllMoviesPage.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(getAllMoviesPage.fulfilled,(state,action)=>{
            state.loading=false
           state.moviesPage= action.payload.results
        })
        builder.addCase(getAllMoviesPage.rejected,(state,action)=>{
            state.moviesPage=action.payload
        })
    }
})

export const {nextpage,backpage,lastpage,firstpage}=moviesSlidePage.actions
export const moviesPage=moviesSlidePage.reducer