import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
