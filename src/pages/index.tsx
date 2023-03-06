import AddNewItem from "@/components/Map/AddNewItem";
import { themeOptions } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import dynamic from "next/dynamic";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={themeOptions}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="flex">
          <LeafletMapDynamic />
          <AddNewItem />
        </div>
      </ThemeProvider>
    </>
  );
}
