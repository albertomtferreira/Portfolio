import Image from "next/image";
import bg from "../../../../public/background/Background_1.jpeg";
import AboutDetails from "../../../components/about";
import RenderModel from "../../../components/RenderModel";


import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("../../../components/models/HatModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

<div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[40%] sm:top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel/>
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">Alberto Ferreira</h1>
            <p className="font-light text-foreground text-ls">
              CodeBucks is a platform for developers to connect and collaborate with other developers.
            </p>
            <p className="font-light text-foreground text-ls p-10">
              {/* TBD */}
              Scroll Down for some stats --- Add arrow animation
            </p>
        </div>

      </div>
      <AboutDetails/>
      
    </>
  );
}