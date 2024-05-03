import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-y-auto pt-[70px]">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </main>
  );
}
