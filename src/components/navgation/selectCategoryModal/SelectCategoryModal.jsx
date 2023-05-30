import {
  Button,
  MenuItem,
  Select,
  Typography,
  capitalize,
} from "@mui/material";
import React from "react";
import { SelectCategoryModalContainer } from "./SelectCategoryModal.styles";
import { useSelectCategory } from "./useSelectCategory";

// Category select options
const options = ["cats", "animals", "sports", "work"];

export const SelectCategoryModal = ({ onApply }) => {
  const { selectedCategory, handleSelectCategory, handleApply } =
    useSelectCategory(onApply);

  return (
    <SelectCategoryModalContainer spacing={3}>
      <Typography>Select category: </Typography>
      <Select value={selectedCategory} onChange={handleSelectCategory}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {capitalize(option)}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" onClick={handleApply}>
        Apply
      </Button>
    </SelectCategoryModalContainer>
  );
};
