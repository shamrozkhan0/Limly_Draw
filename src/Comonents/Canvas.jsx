import React, { useRef, useEffect } from "react";
import { useStorage } from "@liveblocks/react";

export default function Canvas() {
  const shapes = useStorage((root) => root.shapes);
  const container = useRef();

  useEffect(() => {
    const ctx = container.current.getContext("2d");
    ctx.clearRect(0, 0, container.current.width, container.current.height);

    shapes.forEach((s) => {
      if (s.type === "rect") {
        ctx.fillStyle = s.color;
        ctx.fillRect(s.x, s.y, s.width, s.height);
      }
    });
  }, [shapes]);

  return <canvas ref={container} width={800} height={600} style={{border: "1px solid #ccc"}} />;
}
