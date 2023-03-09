import { themeOptions } from "@/utils/theme";
import { MapWithBars } from "./../components/Map/MapWithBars";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={themeOptions}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <MapWithBars />
      </ThemeProvider>
    </>
  );
}
