import { useRouter } from "next/router";
import * as React from "react";

export type TypesShakaHooksLocale = "en" | "es";

export const ListShakaHooksLocale: TypesShakaHooksLocale[] = ["en", "es"];

export function useLocale() {
  const [loc, setLoc] = React.useState<TypesShakaHooksLocale>("en");
  const { locale } = useRouter();

  React.useEffect(() => {
    //
    // @notes:
    if (locale) {
      const foundlocale = ListShakaHooksLocale.filter((i) => i === locale);
      if (foundlocale && foundlocale[0]) {
        setLoc(foundlocale[0]);
      }
    }
    // end
    return;
  }, [locale]);

  return loc;
}
