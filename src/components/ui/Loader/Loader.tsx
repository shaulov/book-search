import { useEffect } from "react";
import type { FunctionComponent } from "../../../common/types";

function Loader(): FunctionComponent {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center w-full h-full backdrop-blur overflow-hidden">
      <p>Loading...</p>
    </div>
  );
}

export { Loader };