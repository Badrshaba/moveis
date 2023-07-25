import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  MoviesSlideCast,
  MoviesSlideDetails,
} from "../../system/MoviesSlideDetails";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Slider from "react-slick";
import "../style/home.css";
const MoviesPageDetails = () => {
  const { id } = useParams();
  const dis = useDispatch();
  const { moviesDetails, loading } = useSelector((e) => e.moviesDetail);
  const { moviesCast, moviesCastCrow } = useSelector((e) => e.moviesCast);

  const back = useNavigate();
  useEffect(() => {
    dis(MoviesSlideDetails(id));
    dis(MoviesSlideCast(id));
  }, [id]);
  const backHome = () => {
    back(-1);
  };
  //profile_path img acter

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {loading ? (
        <div className=" d-flex justify-content-center ">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <div>
          <div
            className=" text-center backImg"
            style={{
              background: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviesDetails.poster_path})`,
            }}
          >
            <h1 className=" text-center text-info">Movie-Detals</h1>
            <div className=" d-flex justify-content-evenly pb-5 flex-wrap">
              <div className=" d-flex justify-content-center align-items-lg-start col-lg-6 col-md-8 ">
                <img
                  width={"350px"}
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviesDetails.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="  col-lg-6 col-md-6">
                <h1 className=" text-white">{moviesDetails.original_title}</h1>
                <p className=" text-white d-flex justify-content-center">
                  {moviesDetails.release_date}{" "}
                  <span>[{moviesDetails.original_language}] </span>
                  <span className=" text-white me-2 ms-2">
                    {Math.floor(moviesDetails.runtime / 60)}h
                    {moviesDetails.runtime % 60 ? (
                      <span>{moviesDetails.runtime % 60}min</span>
                    ) : (
                      console.log(moviesDetails.original_title)
                    )}
                  </span>{" "}
                </p>

                <h3 className=" d-inline text-primary">OverView : </h3>
                <p className=" d-inline text-white">{moviesDetails.overview}</p>
                <h3 className=" text-primary">Casting :</h3>
                <div className=" text-white d-flex justify-content-evenly flex-wrap">
                  {moviesCast
                    .filter((e, w) => w < 5)
                    .map((e, w) => (
                      <p key={w} className=" m-3">
                        {" "}
                        || {e.original_name} || <br />
                        <span className=" text-warning">
                          {e.known_for_department}
                        </span>
                      </p>
                    ))}{" "}
                </div>
                <div className=" text-white d-flex justify-content-evenly flex-wrap">
                  {moviesCastCrow
                    .filter((e, w) => w < 5)
                    .map((e, w) => (
                      <p key={w} className=" m-3">
                        {" "}
                        || {e.original_name} || <br />
                        <span className=" text-warning">
                          {e.known_for_department}
                        </span>
                      </p>
                    ))}{" "}
                </div>

                <div>
                  <div className=" d-grid justify-content-center">
                    <Button onClick={backHome} variant="primary">
                      Back
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column align-items-center " >
            <div className=" w-75 float-start">
            <h3 className=" text-warning mt-3">Actors</h3>
            </div>
            <Slider {...settings} className=" mt-3 widthSLICK">
              {moviesCast.map((e, index) => (
                <div key={index}>
                  <img
                    width="75%"
                    className=" m-auto"
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.profile_path}`}
                  />
                  <p className=" text-center text-warning">{e.known_for_department}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" d-flex flex-column align-items-center " >
            <div className=" w-75 float-start">
            <h3 className=" text-warning mt-3">Crew</h3>
            </div>
            <Slider {...settings} className=" mt-3 widthSLICK">
              {moviesCastCrow
                .filter((e) => e.profile_path)
                .map((e, index) => (
                  <div key={index}>
                    <img
                      width="75%"
                      className=" m-auto"
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.profile_path}`}
                    />
                    <p className=" text-center text-warning">{e.known_for_department}</p>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPageDetails;
