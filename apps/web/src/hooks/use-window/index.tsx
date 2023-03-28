import * as React from "react";

export type TypesShakaHooksWindow = {
  0: number;
  1: number;
};

export function useWindow(): TypesShakaHooksWindow {
  const [wind, setWind] = React.useState<TypesShakaHooksWindow>({
    0: 0,
    1: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      const w: TypesShakaHooksWindow = [window.innerWidth, window.innerHeight];
      setWind(w);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return wind;
}
