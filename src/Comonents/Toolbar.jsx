import React from "react";
import { useMutation } from "@liveblocks/react";

export default function Toolbar() {
  const addRect = useMutation(({ storage }) => {
    storage.get("shapes").push({
      id: Date.now(),
      type: "rect",
      x: 50,
      y: 50,
      width: 100,
      height: 60,
      color: "#fc5"
    });
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <button onClick={() => addRect()}>Add Rectangle</button>
    </div>
  );
}
