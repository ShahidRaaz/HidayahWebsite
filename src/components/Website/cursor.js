import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

const Cursor = forwardRef((props, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverActive, setHoverActive] = useState(false);
  const [navTapActive, setNavTapActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useImperativeHandle(ref, () => ({
    setNavTapActive,
  }));

  // Track screen size and set desktop state
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Attach event listeners only on desktop screens
  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const checkHover = (e) => setHoverActive(Boolean(e.target.closest('.cursor-cta')));

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mouseout', checkHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mouseout', checkHover);
    };
  }, [isDesktop]);

  const isActive = hoverActive || navTapActive;

  if (!isDesktop) return null;

  return (
    <>
      <div
        className={`fixed pointer-events-none rounded-full w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease-out ${
          isActive ? 'bg-white/25' : ''
        }`}
        style={{ left: position.x, top: position.y, position: 'fixed', zIndex: 9999 }}
      >
        <div
          className={`w-4 h-4 rounded-full m-auto mt-3 transition-colors duration-300 ease-out ${
            isActive ? '' : 'bg-br-color'
          }`}
        />
      </div>
    </>
  );
});

export default Cursor;
