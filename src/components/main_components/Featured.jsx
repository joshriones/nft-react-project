import img7 from "../../assets/images/avatar7.png";
import eye from "../../assets/images/eyeActive.svg";
import Button from "../reusable_component/Button";
import { useState, useEffect } from "react";

const Featured = () => {
  const [remainingTime, setRemainingTime] = useState({
    hours: 5,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
        }

        if (minutes === 0 && seconds === 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        if (seconds === 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        }

        return { hours, minutes, seconds: seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="featured-section" className="container">
      <div className="cta-left">
        <div className="featured-user">
          <div>
            <img src={img7} alt="Shroomie" />
          </div>
          <p>Shroomie</p>
        </div>
        <h1 className="cta-header">Magic Mushrooms</h1>
        <div style={{ alignSelf: "flex-start" }}>
          <Button
            padding={"1.9rem 5rem"}
            altText={"eye icon"}
            imgSrc={eye}
            btnName={"See NFT"}
            bgColor={"#FFFFFF"}
            color={"#2B2B2B"}
          />
        </div>
      </div>
      <div className="auction-timer">
        <p>Auction ends in:</p>
        <div className="time">
          <div className="time-labels">
            <h1>{remainingTime.hours}</h1>
            <p>Hours</p>
          </div>
          <span>:</span>
          <div className="time-labels">
            <h1>{remainingTime.minutes}</h1>
            <p>Minutes</p>
          </div>
          <span>:</span>
          <div className="time-labels">
            <h1>{remainingTime.seconds}</h1>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
