import { List, ListItem, Stack } from "@mui/material";
import React from "react";
import { PictureDataField } from "./PictureDataModal.styles";

const fieldsToDisplay = [
  "tags",
  "views",
  "downloads",
  "likes",
  "comments",
  "user",
  "collections",
];

export const PictureDataModal = ({ picture }) => {
  return (
    <Stack p="1rem">
      <List>
        {Object.entries(picture)
          .filter(([key]) => fieldsToDisplay.includes(key))
          .map(([key, value]) => (
            <ListItem key={key}>
              <PictureDataField>
                <b>{key}: </b> <span className="underline" />{" "}
                <span> {value} </span>
              </PictureDataField>
            </ListItem>
          ))}
      </List>
    </Stack>
  );
};
