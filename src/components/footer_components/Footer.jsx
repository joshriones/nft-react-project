import "../../assets/components_css/footer.css";
import logo from "../../assets/images/Logo.png";
import discord from "../../assets/images/discord.svg";
import insta from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-navlist">
        <div className="footer-list1">
          <a href="#hero-section">
            <img src={logo} className="footer_logo" />
          </a>
          <p>
            NFT marketplace UI created <br />
            with Anima for Figma.
          </p>
          <p className="join-text">Join our community</p>
          <ul className="social-links">
            <li>
              <a href="">
                <img src={discord} alt="discord" className="social-link-icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={youtube} alt="youtube" className="social-link-icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitter} alt="twitter" className="social-link-icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={insta} alt="insta" className="social-link-icon" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-list2">
          <h2>Explore</h2>
          <ul className="nav-explore">
            <li>
              <a>Marketplace</a>
            </li>
            <li>
              <a>Rankkings</a>
            </li>
            <li>
              <a>Collect & Wallet</a>
            </li>
          </ul>
        </div>
        <div className="footer-list3">
          <h2>Join Our Weekly Digest</h2>
          <p>
            Get exclusive promotions & updates
            <br /> straight to your inbox.
          </p>
          <form
            action="mailto:you@yourwebsite.com"
            method="post"
            className="cta-form"
          >
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email here"
            />

            <button className="cta-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        Ⓒ NFT Market. Use this template freely.
      </div>
    </footer>
  );
};

export default Footer;
