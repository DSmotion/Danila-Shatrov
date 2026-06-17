import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@components/components/ui/dialog";
import { useState } from "react";
import type { Work } from "src/types/works";
import { WorkCard } from "./WorkCard";
import { WorkContent } from "./WorkContent/WorkContent";

export const WorkCardsGallery = ({ works }: { works: Work[] }) => {
  const [selectedWorkId, setSelectedWorkId] = useState<Work["id"] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectedWork = works.find((work) => work.id === selectedWorkId);

  const selectHandler = (work: Work) => {
    setSelectedWorkId(work.id);
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative grid grid-cols-1 gap-5 min-[320px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1200px]:grid-cols-4">
        {works.map((video) => (
          <WorkCard key={video.id} work={video} onSelect={selectHandler} />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="lg:max-w-7xl">
          <DialogTitle className="sr-only">{selectedWork?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {selectedWork?.title}
          </DialogDescription>

          <WorkContent work={selectedWork} />
        </DialogContent>
      </Dialog>
    </>
  );
};
