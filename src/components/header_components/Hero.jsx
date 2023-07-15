import rocketIcon from "../../assets/images/rocker_icon.svg";
import Button from "../reusable_component/Button";
import heroImg from "../../assets/images/heroImg.png";
import ui1 from "../../assets/images/ui_1.png";

const Hero = () => {
  return (
    <div id="hero-section" className="hero_wrapper container">
      <div className="animate__animated animate__fadeInUp hero_texts">
        <h1 className="primary-header">
          Discover <br></br> Digital Art & Collect NFTs
        </h1>
        <p>
          NFT Marketplace UI Created With Anima For <br></br>Figma. Collect, Buy
          And Sell Art From More<br></br> Than 20k NFT Artists.
        </p>
        <Button
          padding={"1.9rem 4rem"}
          altText={"rocket icon"}
          imgSrc={rocketIcon}
          btnName={"Get Started"}
          width={"22.4rem"}
        />

        <div style={{ display: "flex", gap: "3rem", marginTop: "3rem" }}>
          <div className="records">
            <h4>240k+</h4>
            <p>Total Sale</p>
          </div>
          <div className="records">
            <h4>100k+</h4>
            <p>Auctions</p>
          </div>
          <div className="records">
            <h4>129k+</h4>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight hero_img">
        <img src={heroImg} alt="hero img" />
        <div className="info">
          <h3>Space Walking</h3>
          <div
            style={{
              display: "flex",
              gap: "1.2rem",
              alignItems: "center",
            }}
          >
            <img
              src={ui1}
              alt="ui 1"
              style={{ width: "2.4rem", height: "2.4rem" }}
            />
            <p style={{ fontSize: "1.6rem", color: "white" }}>AnimaKid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
