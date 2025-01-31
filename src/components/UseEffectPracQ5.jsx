import React, { useState, useEffect } from 'react';

export default function UseEffectPracQ5() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Mouse Position Tracker</h2>
      <p>X: {position.x} | Y: {position.y}</p>
    </div>
  );
}
