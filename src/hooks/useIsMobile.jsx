import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: 640px)").matches;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 640px)");
      const handleChange = (e) => setIsMobile(e.matches);

      mediaQuery.addEventListener("change", handleChange); // listen for changes
      return () => mediaQuery.removeEventListener("change", handleChange); // cleanup listener on unmount
    }
  }, []);

  return isMobile;
}
