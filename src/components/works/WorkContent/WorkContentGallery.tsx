import type { WorkGallery } from "src/types/works";

export const WorkContentGallery = ({ work }: { work: WorkGallery }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      {work.content.images.map((image, index) => (
        <div key={image.url} className="flex max-h-[calc(100vh-8rem)] justify-center">
          <img
            key={image.url}
            src={image.url}
            alt={`${work.title} - ${index + 1}`}
            className="h-full rounded-xl object-contain object-center"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
