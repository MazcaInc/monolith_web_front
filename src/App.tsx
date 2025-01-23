import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/main.scss";
import About from "./components/About";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}

export default App;
