import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { MovieCaruosel } from "@/component/MovieCaruosel";
import { MovieCardsView } from "@/component/MovieCardsView";
export default function Home() {
  return (
    
    <div className="flex flex-col gap-8">
      <Header />
      <MovieCaruosel />
      <MovieCardsView />
      <Footer />
    </div>
  );
}
