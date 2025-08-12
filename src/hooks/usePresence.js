import { useUpdateMyPresence } from "@liveblocks/react";

export default function usePresence() {
  const updateMyPresence = useUpdateMyPresence();

  const setCursor = (cursor) => {
    updateMyPresence({ cursor });
  };

  return { setCursor };
}
