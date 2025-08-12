import LBProvider from "../Comonents/LiveblocksProvider";
import { useShapes } from "../hooks/useShapes";

export default function Whiteboard() {
  const { shapes, addShape } = useShapes();

  return (
      <LBProvider>
      <div>
        <button
          onClick={() =>
            addShape({
              id: Date.now().toString(),
              x: 100,
              y: 100,
              color: "red",
            })
          }
        >
          Add Shape
        </button>

        <ul>
          {Array.from(shapes?.entries() || []).map(([id, shape]) => (
            <li key={id}>
              Shape {id} at ({shape.x}, {shape.y})
            </li>
          ))}
        </ul>
      </div>
</LBProvider>
  );
}



