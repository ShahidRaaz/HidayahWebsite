import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

const Cursor = forwardRef((props, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverActive, setHoverActive] = useState(false);
  const [navTapActive, setNavTapActive] = useState(false);

  useImperativeHandle(ref, () => ({
    setNavTapActive,
  }));

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const checkHover = (e) => {
      setHoverActive(Boolean(e.target.closest('.cursor-cta')));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mouseout', checkHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mouseout', checkHover);
    };
  }, []);

  const isActive = hoverActive || navTapActive;

  return (
    <>
      <style>{`* { cursor: none !important; }`} </style>
      <div
        className={`fixed pointer-events-none rounded-full w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease-out ${
          isActive ? 'bg-white/10 backdrop-blur-sm' : 'bg-br-color/10 backdrop-blur-sm'
        }`}
        style={{ left: position.x, top: position.y, position: 'fixed', zIndex: 9999 }}
      >
        <div
          className={`w-4 h-4 rounded-full m-auto mt-3 transition-colors duration-300 ease-out ${
            isActive ? 'bg-white' : 'bg-br-color'
          }`}
        />
      </div>
    </>
  );
});

export default Cursor;
