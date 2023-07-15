import img1 from "../../assets/images/hiw-1.png";
import img2 from "../../assets/images/hiw-2.png";
import img3 from "../../assets/images/hiw-3.png";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  flex: "1",
  padding: "1rem 3rem 3rem 3rem",
  backgroundColor: "#3b3b3b",
  borderRadius: "20px",
};

const h3Style = {
  marginBottom: "1rem",
  color: "white",
  fontSize: "2.2rem",
  fontWeight: "600",
  lineHeight: "140%",
};

const pStyle = {
  color: "white",
  fontSize: "1.6rem",
  lineHeight: "140%",
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container">
      <div>
        <div style={{ marginBottom: "4.8rem" }}>
          <h2 className="secondary-header">How It Works</h2>
          <p className="collection-after-text">Find out how to get started</p>
        </div>

        <div style={{ display: "flex", gap: "3rem" }}>
          <div className="how-it-works-card" style={cardStyle}>
            <div>
              <img src={img1} alt="how-it-works img1" className="hiw-img" />
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={h3Style}>Setup Your Wallet</h3>
              <p style={pStyle}>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>

          <div className="how-it-works-card" style={cardStyle}>
            <div>
              <img src={img2} alt="how-it-works img2" className="hiw-img" />
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={h3Style}>Create Collection</h3>
              <p style={pStyle}>
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </div>

          <div className="how-it-works-card" style={cardStyle}>
            <div>
              <img src={img3} alt="how-it-works img3" className="hiw-img" />
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={h3Style}>Start Earning</h3>
              <p style={pStyle}>
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
