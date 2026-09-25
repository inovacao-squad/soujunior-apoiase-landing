import type { Metadata } from "next";

import { Header } from "@/app/_components/header/header";
import { HeroSection } from "@/app/_components/hero-section/hero-section";
import { About } from "@/app/_components/about-section/about";
import { IniciativasSection } from "@/app/_components/problem-section/iniciativas-section";
import { Transparency } from "@/app/_components/transparency-section/transparency";
import { Closing } from "@/app/_components/closing-section/closing";
import { Participate } from "@/app/_components/participate-section/participate";
import { Footer } from "@/app/_components/footer/footer";

const pageDescription =
  "Conheça o impacto da SouJunior e apoie a próxima geração de talentos em tecnologia. Doações via Apoia.se.";

export const metadata: Metadata = {
  title: "Apoie a SouJunior",
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Apoie a SouJunior",
    description: pageDescription,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <IniciativasSection />
        <Participate />
        <Transparency />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
