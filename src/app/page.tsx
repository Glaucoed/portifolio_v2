import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="overflow-y-auto pt-[70px]">
        <Banner />
        <About />
        <Projects />
    </main>
  );
}
