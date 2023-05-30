import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPictures } from "./redux/pictures/picturesThunk";

export const useApp = () => {
  const { category, page } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  // Fetch the pictures on page mount and on page/category change
  useEffect(() => {
    const getPictures = async () => {
      dispatch(fetchPictures());
    };
    getPictures();
  }, [category, page]);

  return {};
};
