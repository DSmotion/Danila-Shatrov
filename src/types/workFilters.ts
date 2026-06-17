export enum EWorkFilter {
  video = "video",
  visualization = "visualization",
  model = "model",
}

export interface WorkFilterItem {
  name: string;
  value: EWorkFilter;
}
