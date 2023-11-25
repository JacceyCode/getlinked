import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Timeline from "../components/Timeline";

function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Faq />
      <Timeline />
    </main>
  );
}

export default Home;
