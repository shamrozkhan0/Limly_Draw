import { useStorage, useMutation } from "@liveblocks/react";

// Hook for managing shapes in Liveblocks storage
export function useShapes() {
  const shapes = useStorage((root) => root.shapes);

  // Mutation for adding a shape
  const addShape = useMutation(({ storage }, shape) => {
    const shapesMap = storage.get("shapes");
    shapesMap.set(shape.id, shape);
  }, []);

  // Mutation for updating a shape
  const updateShape = useMutation(({ storage }, { id, updates }) => {
    const shapesMap = storage.get("shapes");
    const shape = shapesMap.get(id);
    if (shape) {
      Object.assign(shape, updates);
    }
  }, []);

  // Mutation for deleting a shape
  const deleteShape = useMutation(({ storage }, id) => {
    const shapesMap = storage.get("shapes");
    shapesMap.delete(id);
  }, []);

  return { shapes, addShape, updateShape, deleteShape };
}
