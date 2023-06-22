import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getSearchResults = createAsyncThunk("getSearchResults",async(id,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI

    try{

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/keyword',
      params: {query: `${id}`, page: '1'},
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
        console.error(error);
      });
    }catch(e){
        return    rejectWithValue(e)
        }
    })


    const SearchResultPage = createSlice({
        name:"SearchResultPage",
        initialState:{SearchResults:[],loading:false},

        extraReducers:(builder)=>{
            builder.addCase(getSearchResults.pending,(state)=>{
                state.loading=true
            })
            builder.addCase(getSearchResults.fulfilled,(state,action)=>{
                state.loading=false
                state.SearchResults= action.payload.results
            })
            builder.addCase(getSearchResults.rejected,(state,action)=>{
                state.SearchResults=action.payload
            })
        }
    })
    
    
    export const SearchPage=SearchResultPage.reducer