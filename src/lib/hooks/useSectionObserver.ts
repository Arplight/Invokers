import { useEffect } from "react";

const useSectionObserver = (sections: string[]) => {
  const sectionsKey = sections.join(",");

  useEffect(() => {
    // Track how much of the viewport each section covers (px height).
    // Using height — not intersectionRatio — so tall sections (e.g. services
    // on mobile) can still win even when they never reach 50% visibility.
    const visibleHeightById = new Map<string, number>();

    const syncActiveSection = () => {
      let activeId: string | null = null;
      let maxVisibleHeight = 0;

      visibleHeightById.forEach((height, id) => {
        if (height > maxVisibleHeight) {
          maxVisibleHeight = height;
          activeId = id;
        }
      });

      if (activeId && window.location.hash !== `#${activeId}`) {
        window.history.replaceState(null, "", `#${activeId}`);
        // replaceState does not emit hashchange/scroll; notify the navbar.
        window.dispatchEvent(new Event("sectionchange"));
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        visibleHeightById.set(
          entry.target.id,
          entry.isIntersecting ? entry.intersectionRect.height : 0
        );
      });
      syncActiveSection();
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      // Dense thresholds so visibility updates smoothly while scrolling.
      threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      // Prefer the band below the sticky header.
      rootMargin: "-12% 0px -40% 0px",
    });

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sectionsKey is a stable serialization of sections
  }, [sectionsKey]);
};

export default useSectionObserver;
