import { useEffect } from "react";

const useSectionObserver = (sections: string[]) => {
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          window.history.replaceState(null, "", `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);
};

export default useSectionObserver;
