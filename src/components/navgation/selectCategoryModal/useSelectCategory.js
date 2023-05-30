import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/pictures/picturesSlice";

export const useSelectCategory = (onApply) => {
  //local category state
  const [selectedCategory, setSelectedCategory] = useState("");

  const { category } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  // update local state on init and redux state change
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Set category in Redux and close the modal
  const handleApply = () => {
    dispatch(setCategory(selectedCategory));
    onApply();
  };

  return { selectedCategory, handleSelectCategory, handleApply };
};
