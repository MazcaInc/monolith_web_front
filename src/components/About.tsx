import "../styles/components/About.scss";

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h1>Download</h1>
                <h2>Available in all devices</h2>
                <div className="about-image">
                        <img
                            src="https://i.postimg.cc/v83M8Ryt/Sem-T-tulo-2.png"
                            alt="QR Code"
                        />
                </div>
                <h3>Scan the QRCode to download.</h3>
            </div>
        </section>
    );
};

export default About;
