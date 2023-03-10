import React from "react";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournaLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa sapiente distinctio voluptate dolorem voluptatem modi fuga voluptates laboriosam tempora. Delectus praesentium aliquid ducimus pariatur iusto quibusdam officia numquam necessitatibus.</Typography> */}
      <NothingSelectedView/>
      {/* <NoteView /> */}
      <IconButton
        size='large'
        sx={{ color: 'white', backgroundColor: 'error.main',':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50}}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
