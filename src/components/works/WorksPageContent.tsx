import { ALL_WORKS } from "@config/works";
import { useState, type PropsWithChildren } from "react";
import { EWorkFilter } from "src/types/workFilters";
import { Filters } from "./Filters";
import { WorkCardsGallery } from "./WorkCardsGallery";
import styles from "./WorksPageContent.module.scss";

export const WorksPageContent = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<EWorkFilter>(EWorkFilter.video);

  const items = ALL_WORKS.filter((work) => work.type === filter);

  return (
    <div className="mb-16">
      <div className={styles.topContent}>
        {children}

        <Filters activeFilter={filter} setActiveFilter={setFilter} />
      </div>

      <WorkCardsGallery works={items} />
    </div>
  );
};
