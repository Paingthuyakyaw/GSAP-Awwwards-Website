import {Navbar} from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className={"h-screen"} ></div>
        </div>
    );
};

export default App;