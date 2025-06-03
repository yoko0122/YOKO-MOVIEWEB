import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import "@/styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NuqsAdapter>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NuqsAdapter>
    </div>
  );
}
