import styled from "@emotion/styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const PictureItemContainer = styled(Grid2)`
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  align-self: stretch;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`;
