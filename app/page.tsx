import GalleryWidget from "@/components/GalleryWidget";
import TabsWidget from "@/components/TabsWidget";

export default function Home() {
  return (
    <>
      <div className="flex h-screen bg-[#1E1E1E]">
        <div className="w-1/2"></div>
        <div className="w-1/2 p-6 pr-24 ">
        <TabsWidget/>
        <div className="mt-4 w-11/12 mx-auto rounded-full opacity-50 h-1 bg-slate-400"/>
        <GalleryWidget />
        <div className="w-11/12 mx-auto rounded-full opacity-50 h-1 bg-slate-400"/>
        </div>
      </div>
    </>
  );
}
