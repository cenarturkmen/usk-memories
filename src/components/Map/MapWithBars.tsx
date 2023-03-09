import dynamic from "next/dynamic";
import AddNewItem from "./AddNewItem";
import { UserMarker } from "./UserMarker";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

export function MapWithBars() {
  return (
    <>
      <div className="flex">
        <LeafletMapDynamic />
        <AddNewItem />
      </div>
    </>
  );
}
