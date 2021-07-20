/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import MoviesData from "../../../data/movies.json";
import Grid from "@material-ui/core/Grid";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const data = MoviesData.results;

export default function MovieItem(props) {
  const { loading = false } = props;

  return (
    <Grid container spacing={2} justifyContent="center">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid className="movie-item" item xs={2} key={index}>
          <span className="movie-rating">
            <StarRateRoundedIcon style={{ color: "gold", fontSize: 22 }} />
            {item.vote_average}
          </span>

          <img className="movie-image" alt={item.title} src={item.poster_path} />

          <Typography gutterBottom className="movie-title" variant="h6">
            {item.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
