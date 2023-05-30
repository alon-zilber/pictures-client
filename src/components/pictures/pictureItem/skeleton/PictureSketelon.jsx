import { Skeleton } from "@mui/material";
import React from "react";

const PictureSketelon = () => {
  return (
    <Skeleton
      variant="rectangular"
      width={450}
      height={250}
      sx={{ borderRadius: "1rem", maxWidth: "100%" }}
    />
  );
};

export default PictureSketelon;
