import Image from "next/image";
import { BackGrounds } from "./components/bacgrounds";
import { HeroHeader } from "./components/hero";
import { SecSection } from "./components/secsection";
import { Footer } from "./components/footer";


export default function Home() {
  return (
    <>
      <BackGrounds />
      <div className="relative z-[100]">
        <HeroHeader />
        <SecSection />
        <Footer />
      </div>
    </>
  );
}
