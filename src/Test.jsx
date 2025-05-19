import React, { useEffect, useRef, useState } from 'react';

const StickySections = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const [visible, setVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  useEffect(() => {
    const observers = [];

    const observeSection = (ref, key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !visible[key]) {
            setVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.5 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
    };

    observeSection(section1Ref, 'section1');
    observeSection(section2Ref, 'section2');
    observeSection(section3Ref, 'section3');
    observeSection(section4Ref, 'section4');

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [visible]);

  return (
    <div className="h-[400vh]">
      <div
        ref={section1Ref}
        className={`h-screen w-screen sticky top-0 flex items-center justify-center text-4xl font-bold bg-yellow-300 transition-all duration-700 ${
          visible.section1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        Section 1
      </div>

      <div
        ref={section2Ref}
        className={`h-screen w-screen sticky top-0 flex items-center justify-center text-4xl font-bold bg-lime-300 transition-all duration-700 ${
          visible.section2 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        Section 2
      </div>

      <div
        ref={section3Ref}
        className={`h-screen w-screen sticky top-0 flex items-center justify-center text-4xl font-bold bg-sky-300 transition-all duration-700 ${
          visible.section3 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        Section 3
      </div>

      <div
        ref={section4Ref}
        className={`h-screen w-screen sticky top-0 flex items-center justify-center text-4xl font-bold bg-pink-300 transition-all duration-700 ${
          visible.section4 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        Section 4
      </div>
    </div>
  );
};

export default StickySections;
