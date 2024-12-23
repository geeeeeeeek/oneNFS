import { ArrowLeftIcon } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const HorizontalScroll = ({ items, renderItem, containerId }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft + clientWidth < scrollWidth);
      }
    };

    handleScroll(); // Initial check

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", handleScroll);

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {showLeftButton && (
        <button
          className="absolute left-0 top-20 transform bg-primary rounded-full z-10 text-white w-6 h-6 flex items-center justify-center drop-shadow-md"
          onClick={() => {
            scrollContainerRef.current.scrollBy({
              left: -200,
              behavior: "smooth",
            });
          }}
        >
          <ArrowLeftIcon className="w-3" />
        </button>
      )}
      {showRightButton && (
        <button
          className="absolute right-0 top-20 transform bg-primary rounded-full z-10 text-white w-6 h-6 flex items-center justify-center drop-shadow-md"
          onClick={() => {
            scrollContainerRef.current.scrollBy({
              left: 200,
              behavior: "smooth",
            });
          }}
        >
          <ArrowLeftIcon className="w-3 rotate-180" />
        </button>
      )}
      <div className="px-4">
        <div
          id={containerId}
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide py-2"
        >
          {items.map((item, index) => (
            <div key={index} className="space-y-2 flex-shrink-0">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
