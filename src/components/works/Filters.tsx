import arrowBottom from "@assets/icons/works/arrow-bottom.svg";
import { WORK_FILTERS } from "@config/workFilter";
import { EWorkFilter, type WorkFilterItem } from "src/types/workFilters";
import styles from "./Filters.module.scss";

export const Filters = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: EWorkFilter;
  setActiveFilter: (filter: EWorkFilter) => void;
}) => {
  return (
    <form className={styles.filters}>
      {WORK_FILTERS.map((filter) => (
        <Filter
          key={filter.value}
          filter={filter}
          isActive={filter.value === activeFilter}
          handler={(v) => setActiveFilter(v)}
        />
      ))}
    </form>
  );
};

const Filter = ({
  filter,
  isActive,
  handler,
}: {
  filter: WorkFilterItem;
  isActive: boolean;
  handler: (filter: EWorkFilter) => void;
}) => {
  return (
    <label className={styles.filter}>
      <input
        type="radio"
        name="work_filter"
        value={filter.value}
        checked={isActive}
        onChange={(e) => handler(e.currentTarget.value as EWorkFilter)}
      />

      <div className={styles.filterContent}>
        <div className={styles.filterIcon}>
          <div className={styles.inputDot}></div>
          <img
            className={styles.inputArrow}
            src={arrowBottom.src}
            alt="arrow"
          />
        </div>
        {filter.name}
      </div>
    </label>
  );
};
