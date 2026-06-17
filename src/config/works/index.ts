import { EWorkFilter } from "src/types/workFilters";
import type { Work, WorkWithoutType } from "src/types/works";
import { v4 as uuid } from "uuid";
import { MODEL_WORKS } from "./model";
import { VIDEO_WORKS } from "./video";
import { VISUALIZATION_WORKS } from "./visualization";

const makeWork = (works: WorkWithoutType[], type: EWorkFilter): Work[] => {
  return works.map((work) => ({
    ...work,
    id: uuid(),
    type,
  })) as Work[];
};

export const ALL_WORKS: WorkWithoutType[] = [
  ...makeWork(MODEL_WORKS, EWorkFilter.model),
  ...makeWork(VISUALIZATION_WORKS, EWorkFilter.visualization),
  ...makeWork(VIDEO_WORKS, EWorkFilter.video),
];
