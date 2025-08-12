// src/components/LiveblocksProvider.jsx
import React from "react";
import { createClient } from "@liveblocks/client";
import { LiveblocksProvider } from "@liveblocks/react";

const client = createClient({
  publicApiKey: import.meta.env.VITE_LIVEBLOCKS_PUBLIC_API_KEY,
});

export default function LBProvider({ children }) {
  return <LiveblocksProvider client={client}>{children}</LiveblocksProvider>;
}
