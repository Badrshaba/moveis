import { configureStore } from '@reduxjs/toolkit'
import { movies } from './MoviesSlice'
import { series } from './SeriesSlick'
import { topMovie } from './TopMovies'
import { topSerie } from './TopSeires'
import { moviesPage } from './MovisPageSlide'
import { SeriesPage } from './SeriesPageSlide'
import { moviesDetail} from "./MoviesSlideDetails"
import { SeriesDetail } from './SeriesSlideDetails'
import { SearchPage } from './SearchSlide'
export const store = configureStore({
    reducer: {
        movies,
        series,
        topMovie,
        topSerie,
        moviesPage,
        SeriesPage,
        moviesDetail,
        SeriesDetail,
        SearchPage
    },
  })