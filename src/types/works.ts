import type { EWorkFilter } from "./workFilters";

export interface WorkBase {
  id: string;
  title: string;
  year: string;
  previewUrl: string;
  type: EWorkFilter;
}

export interface WorkVideo extends WorkBase {
  contentType: "video";
  content: { videoUrl: string };
}

export interface WorkGallery extends WorkBase {
  contentType: "gallery";
  content: { images: { url: string }[] };
}

export type Work = WorkVideo | WorkGallery;
export type WorkWithoutType = Omit<Work, "id" | "type">;
