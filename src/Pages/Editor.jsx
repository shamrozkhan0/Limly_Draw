import React from "react";
import LiveblocksProvider from "../Comonents/LiveblocksProvider";
import usePresence from "../hooks/usePresence";

export default function Editor() {
  const { setCursor } = usePresence();

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <LiveblocksProvider roomId="limly-room-1">
      <div
        style={{ width: "100vw", height: "100vh", background: "#f4f4f4" }}
        onMouseMove={handleMouseMove}
      >
        <h2>Real-time Drawing Area</h2>
      </div>
    </LiveblocksProvider>
  );
}
