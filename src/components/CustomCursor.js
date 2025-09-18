import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || (target.classList && target.classList.contains('clickable')))) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || (target.classList && target.classList.contains('clickable')))) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  useEffect(() => {
    const animateCursor = () => {
      setCursorPosition(prevPos => ({
        x: prevPos.x + (mousePosition.x - prevPos.x) * 0.1,
        y: prevPos.y + (mousePosition.y - prevPos.y) * 0.1
      }));
    };

    const animationId = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, cursorPosition]);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: cursorPosition.x - 10,
        top: cursorPosition.y - 10,
      }}
    />
  );
};

export default CustomCursor;
