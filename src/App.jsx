import About from "./aboutSection/About";
import Contacts from "./contactsSection/Contacts";
import Skills from "./skillsSection/Skills";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <About />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
