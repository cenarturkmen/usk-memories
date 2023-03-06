import dynamic from "next/dynamic";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <LeafletMapDynamic />
    </>
  );
}
