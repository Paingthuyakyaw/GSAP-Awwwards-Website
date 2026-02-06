import Hero from "./components/Hero.tsx";
import Cocktails from "./components/Cocktails.tsx";
import About from "./components/About.tsx";
import Art from "./components/Art.tsx";
import Menu from "./components/Menu.tsx";
import Navbar from "./components/Navbar.tsx";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
           <Menu/>
        </main>
    );
};

export default App;