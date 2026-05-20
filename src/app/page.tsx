import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseGrid from "@/components/CaseGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <main className="flex flex-col gap-12 pt-24 sm:gap-24 sm:pt-32">
          <Hero />
          <CaseGrid />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}