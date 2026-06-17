import { useState, type PropsWithChildren } from "react";
import { RemoveScroll } from "react-remove-scroll";

export default function BurgerMenu({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
      return;
    }

    setIsVisible(true);
    setTimeout(() => setIsOpen(true));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 400);
  };

  return (
    <div className="relative z-50 block md:hidden">
      <button
        onClick={toggleMenu}
        className="group flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1"
      >
        <span className="h-1 w-8 origin-center rounded bg-white transition-colors group-hover:bg-[var(--primary-color)] group-focus-visible:bg-[var(--primary-color)]" />
        <span className="h-1 w-8 rounded bg-white transition-colors group-hover:bg-[var(--primary-color)] group-focus-visible:bg-[var(--primary-color)]" />
        <span className="h-1 w-8 origin-center rounded bg-white transition-colors group-hover:bg-[var(--primary-color)] group-focus-visible:bg-[var(--primary-color)]" />
      </button>

      {isVisible && (
        <RemoveScroll>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-400 ease-in-out"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={closeMenu}
          />
          <div
            className="fixed top-0 right-0 left-0 z-50 mx-6 flex flex-col gap-14 rounded-b-[40px] bg-[#131313] p-10 text-white shadow-lg transition-all duration-400"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-90px)",
              filter: isOpen ? "blur(0px)" : "blur(12px)",
            }}
          >
            {children}
          </div>
        </RemoveScroll>
      )}
    </div>
  );
}
