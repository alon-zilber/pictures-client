import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import { NavigationButtons } from "./Navigation.styles";
import { SelectCategoryModal } from "./selectCategoryModal/SelectCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/pictures/picturesSlice";

const Naviagation = () => {
  // Select category modal
  const [modalOpen, setModalOpen] = useState(false);
  
  const { page, totalPages } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  return (
    <NavigationButtons>
      <Button
        variant="contained"
        disabled={page === 1}
        onClick={() => dispatch(setPage(page - 1))}
      >
        Prev
      </Button>
      <Button variant="outlined" onClick={() => setModalOpen(true)}>
        Select category
      </Button>
      <Button
        variant="contained"
        disabled={page === totalPages}
        onClick={() => dispatch(setPage(page + 1))}
      >
        Next
      </Button>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <SelectCategoryModal onApply={() => setModalOpen(false)} />
      </Dialog>
    </NavigationButtons>
  );
};

export default Naviagation;
