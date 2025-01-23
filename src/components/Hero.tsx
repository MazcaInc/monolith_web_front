import "@styles/components/Hero.scss";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
    const scrollToContent = () => {
        window.scrollTo({
            top: 830,
            behavior: "smooth"
        });
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">MONOLITH</h1>
                <button className="btn">
                    SEE MORE <ArrowRight size={20} />
                </button>
            </div>
            <button onClick={scrollToContent} className="scroll-indicator">
                <ChevronDown size={32} />
            </button>
        </section>
    );
}
