import type { Work } from "src/types/works";
import { WorkContentGallery } from "./WorkContentGallery";
import { WorkContentVideo } from "./WorkContentVideo";

export const WorkContent = ({ work }: { work?: Work }) => {
  switch (work?.contentType) {
    case "video":
      return <WorkContentVideo work={work} />;
    case "gallery":
      return <WorkContentGallery work={work} />;
    default:
      return <h1>Content not found</h1>;
  }
};
