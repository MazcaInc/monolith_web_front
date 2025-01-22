import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
