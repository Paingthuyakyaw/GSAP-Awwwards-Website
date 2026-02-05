import {Navbar} from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Cocktails from "./components/Cocktails.tsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <div className=" h-screen"></div>
        </div>
    );
};

export default App;