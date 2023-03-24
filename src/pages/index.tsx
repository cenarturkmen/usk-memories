import { themeOptions } from "@/utils/theme";
import { MapWithBars } from "./../components/Map/MapWithBars";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={themeOptions}>
        <MapWithBars />
      </ThemeProvider>
    </>
  );
}
