import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <FaArrowUpLong
          className="bg-primary hover:bg-secondary fixed bottom-2 right-2 z-10 h-10 w-10 animate-bounce cursor-pointer rounded-lg p-3 text-white"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ScrollToTop;
