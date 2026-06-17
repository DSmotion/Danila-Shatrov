import type { WorkVideo } from "src/types/works";

export const WorkContentVideo = ({ work }: { work: WorkVideo }) => {
  return (
    <div className="place-items-center">
      <video
        className="max-h-screen rounded-xl text-center"
        width="600"
        controls
        onClick={(e) => e.stopPropagation()}
      >
        <source src={work.content.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
