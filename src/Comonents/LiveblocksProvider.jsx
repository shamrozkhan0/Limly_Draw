// src/components/LiveblocksProvider.jsx
import React from "react";
import { LiveblocksProvider, createRoomContext } from "@liveblocks/react";

export default function LBProvider({ children }) {
  return (
    <LiveblocksProvider
      publicApiKey="pk_dev_iGECz6JZH3fO7vyV28UjjTXvoj3WqrjXqYGyXpgCgcbdpFlEp_raFQ3TRclL1y24"
    >
      {children}
    </LiveblocksProvider>
  );
}