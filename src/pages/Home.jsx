import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import { useRef } from "react";

function Home() {
  const faqRef = useRef();
  const overviewRef = useRef();
  return (
    <main>
      <Hero faqRef={faqRef} overviewRef={overviewRef} />
      <Overview overviewRef={overviewRef} />
      <Faq faqRef={faqRef} />
    </main>
  );
}

export default Home;
