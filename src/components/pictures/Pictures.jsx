import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import PictureItem from "./pictureItem/PictureItem";
import { useSelector } from "react-redux";
import PictureSketelon from "./pictureItem/skeleton/PictureSketelon";

const Pictures = () => {
  const { pictureList, fetching } = useSelector((state) => state.pictures);

  return (
    <Grid2 container spacing={3} alignItems="center">
      {fetching &&
        [...Array(9)].map((el, i) => (
          <Grid2 xs={4} key={i}>
            <PictureSketelon />
          </Grid2>
        ))}
      {!fetching && pictureList.map((picture) => <PictureItem picture={picture} key={picture.id}/>)}
    </Grid2>
  );
};

export default Pictures;
