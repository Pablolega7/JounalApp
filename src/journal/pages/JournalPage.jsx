import React from "react";
import { JournalLayout } from "../layout/JournaLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa sapiente distinctio voluptate dolorem voluptatem modi fuga voluptates laboriosam tempora. Delectus praesentium aliquid ducimus pariatur iusto quibusdam officia numquam necessitatibus.</Typography> */}
      {/* <NothingSelectedView/> */}
      <NoteView />
    </JournalLayout>
  );
};
