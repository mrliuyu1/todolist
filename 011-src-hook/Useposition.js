import { useState, useEffect } from "react";

export default function usePosition() {
  const [x, setX ] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", handle)
    return  () => {
        window.removeEventListener("mousemove", handle);
      };
  }, [x, y]);

  function handle(e) {
    setX(e.clientX)
    setY(e.clientY)

  }

  return { x,y }

}
