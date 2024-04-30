import About from "./aboutSection/About";
import Contacts from "./contactsSection/Contacts";
import Portfolio from "./portfolioSection/Portfolio";
import Skills from "./skillsSection/Skills";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <About />
      <Skills />
      <Contacts />
      <Portfolio />
    </div>
  );
}
