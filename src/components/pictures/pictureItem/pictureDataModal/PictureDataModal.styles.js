import { Typography, styled } from "@mui/material";

export const PictureDataField = styled(Typography)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  b {
    text-transform: capitalize;
  }

  .underline {
    border-bottom: 1px dashed #333;
    margin: 0 0.5rem;
    min-width: 3rem;
    flex: 1;
    transform: translateY(-0.4rem);
  }
`;
