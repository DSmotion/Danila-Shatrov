import playIcon from "@assets/icons/play.svg";
import galleryIcon from "@assets/icons/gallery.svg";
import type { Work } from "src/types/works";

interface WorkCardProps {
  work: Work;
  onSelect: (work: Work) => void;
}

export const WorkCard = ({ work, onSelect }: WorkCardProps) => {
  const iconSrc =
    work.contentType === "gallery" ? galleryIcon.src : playIcon.src;
  const iconAlt = work.contentType === "gallery" ? "gallery" : "play";

  return (
    <button
      key={work.id}
      className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl border-none bg-black transition-transform duration-350 ease-initial hover:scale-103 focus-visible:scale-103 active:scale-103 sm:rounded-3xl md:rounded-4xl"
      onClick={() => onSelect(work)}
    >
      <img
        src={work.previewUrl}
        alt={work.title}
        className="transition-[transform opacity] h-full w-full origin-bottom mask-b-from-30% mask-b-to-102% object-cover object-center duration-300 ease-initial group-hover:scale-104 group-hover:opacity-75 group-focus-visible:scale-104 group-focus-visible:opacity-75 group-active:scale-104 group-active:opacity-75"
      />

      <div className="absolute top-3 right-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 md:top-5 md:right-5 md:h-11 md:w-11">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="ml-0.5 h-3 w-3 transition-transform duration-300 group-hover:scale-120 md:h-4 md:w-4"
        />
      </div>

      <div className="absolute bottom-0 flex w-full flex-col justify-end p-4 md:p-8">
        <h3 className="text-sm font-semibold transition-all duration-[350ms] group-hover:font-extrabold group-hover:text-[var(--secondary-color)] group-focus-visible:text-lg group-focus-visible:text-[var(--secondary-color)] group-active:font-extrabold group-active:text-[var(--secondary-color)] sm:text-base sm:group-hover:text-lg truncate">
        {work.title}
        </h3>
        <p className="m-0 pt-2.5 text-xs font-thin text-white sm:text-sm">{work.year}</p>
      </div>
    </button>
  );
};
