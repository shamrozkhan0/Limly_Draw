import React from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react";
import Canvas from "../comonents/Canvas";
import Toolbar from "../comonents/Toolbar";

export default function Dashboard() {
  return (
    <RoomProvider id="limly-room" initialStorage={{ shapes: [] }}>
      <ClientSideSuspense fallback={<div>Loading whiteboard...</div>}>
        <>
          <Toolbar />
          <Canvas />
        </>
      </ClientSideSuspense>
    </RoomProvider>
  );
}
