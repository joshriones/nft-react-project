import ctaImg from "../../assets/images/spaceman.png";
import mailIcon from "../../assets/images/envelope.svg";

const CallToAction = () => {
  return (
    <section id="call-to-action" className="container">
      <div className="cta-wrapper">
        <div className="cta-img-container">
          {/* <img className="cta-img" src={ctaImg} alt="cta img" /> */}
        </div>
        <div className="cta-actions">
          <h1 className="cta-header">
            Join Our Weekly <br></br>
            Digest
          </h1>
          <p className="cta-text">
            Get Exclusive Promotions & Updates <br></br>Straight To Your Inbox.
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

            <button className="cta-btn">
              <img src={mailIcon} />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
