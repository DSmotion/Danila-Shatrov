import { EWorkFilter, type WorkFilterItem } from "src/types/workFilters";

export const WORK_FILTERS: WorkFilterItem[] = [
  { name: "Видеопродакшн", value: EWorkFilter.video },
  { name: "Визуализация", value: EWorkFilter.visualization },
  { name: "Моделирование", value: EWorkFilter.model },
];
