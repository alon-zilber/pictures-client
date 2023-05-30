import React, { useState } from "react";
import { PictureItemContainer } from "../Pictures.styles";
import { Dialog } from "@mui/material";
import { PictureDataModal } from "./pictureDataModal/PictureDataModal";
import PictureSketelon from "./skeleton/PictureSketelon";

const PictureItem = ({ picture }) => {
  // picture data modal
  const [modalOpen, setModalOpen] = useState(false);
  // display skeleton while a picture is not loaded yet
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <PictureItemContainer xs={4} onClick={() => setModalOpen(true)}>
        {!loaded && <PictureSketelon />}
        <img
          src={picture.webformatURL}
          alt="fetched from the server"
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? "block" : "none" }}
        />
      </PictureItemContainer>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <PictureDataModal picture={picture} />
      </Dialog>
    </>
  );
};

export default PictureItem;
