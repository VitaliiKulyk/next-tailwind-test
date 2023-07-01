import Header from "@/components/Header";
import MainTile from "@/components/MainTile";
import AboutUs from "@/components/AboutUs";
import InfiniteBanner from "@/components/InfiniteBanner";
import Accordion from "@/components/Accordion";

import content from "./content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* header */}
      {/* <Header /> */}
      <div className="container mx-auto flex flex-col justify-between px-4 pb-4 my-24 sm:max-w-screen-sm lg:max-w-screen-xl">
        {/* content */}
        <p className="text-7xl font-bold uppercase">lorem ipsum</p>

        {/* main tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          {content.main.tiles.map((item, i) => {
            return <MainTile key={i} {...item} />;
          })}
        </div>

        <AboutUs {...content.main.aboutUs} />

        <InfiniteBanner {...content.main.infiniteBanner} />

        {/* secondary tiles */}
        <p className="text-7xl font-bold uppercase my-24">
          lorem ipsum dolor set
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          {content.main.secondaryTiles.map((item, i) => {
            return <MainTile key={i} {...item} />;
          })}
        </div>

        {/* accordion */}
        <p className="text-7xl font-bold uppercase my-24">lorem ipsum dolor</p>
        <Accordion {...content.main.accordion} />
      </div>
    </main>
  );
}
