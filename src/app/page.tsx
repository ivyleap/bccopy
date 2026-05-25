import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Services } from "@/components/sections/services";
import { Numbers } from "@/components/sections/numbers";
import { Recruit } from "@/components/sections/recruit";
import { News } from "@/components/sections/news";
import { Access } from "@/components/sections/access";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Numbers />
      <Recruit />
      <News />
      <Access />
      <Contact />
    </>
  );
}
