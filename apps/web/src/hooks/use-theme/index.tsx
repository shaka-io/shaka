import { TypesShakaThemes } from "@shaka-web-types/themes/TypesShakaThemes";
import * as React from "react";

export type TypesShakaHooksTheme = {
  0: TypesShakaThemes;
  1: React.Dispatch<React.SetStateAction<TypesShakaThemes>>;
};

export function useTheme(): TypesShakaHooksTheme {
  const [theme, setTheme] = React.useState<TypesShakaThemes>("basis");

  React.useEffect(() => {
    const { body } = document;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    0: theme,
    1: setTheme,
  };
}
