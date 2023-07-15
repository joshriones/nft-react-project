import "../../assets/components_css/main.css";
import Button from "../reusable_component/Button";
import activeRocket from "../../assets/images/RocketLaunch.svg";
import CreatorsCard from "./CreatorsCard";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar5 from "../../assets/images/avatar5.png";
import avatar6 from "../../assets/images/avatar6.png";
import avatar7 from "../../assets/images/avatar7.png";
import avatar8 from "../../assets/images/avatar8.png";
import avatar9 from "../../assets/images/avatar9.png";
import avatar10 from "../../assets/images/avatar10.png";
import avatar11 from "../../assets/images/avatar11.png";
import avatar12 from "../../assets/images/avatar12.png";

const creatorsCardDeets = [
  {
    id: 1,
    name: "Keepitreal",
    sales: 34.16,
    imgSrc: avatar1,
  },
  {
    id: 2,
    name: "DigiLab",
    sales: 38.23,
    imgSrc: avatar2,
  },
  {
    id: 3,
    name: "GravityOne",
    sales: 37.12,
    imgSrc: avatar3,
  },
  {
    id: 4,
    name: "Juanie",
    sales: 34.19,
    imgSrc: avatar4,
  },
  {
    id: 5,
    name: "BlueWhale",
    sales: 39.91,
    imgSrc: avatar5,
  },
  {
    id: 6,
    name: "Mr Fox",
    sales: 35.11,
    imgSrc: avatar6,
  },
  {
    id: 7,
    name: "Shroomie",
    sales: 39.12,
    imgSrc: avatar7,
  },
  {
    id: 8,
    name: "Robotica",
    sales: 34.53,
    imgSrc: avatar8,
  },
  {
    id: 9,
    name: "RustyRobot",
    sales: 37.6,
    imgSrc: avatar9,
  },
  {
    id: 10,
    name: "Animakid",
    sales: 32.15,
    imgSrc: avatar10,
  },
  {
    id: 11,
    name: "Dotgu",
    sales: 34.53,
    imgSrc: avatar11,
  },
  {
    id: 12,
    name: "Ghiblier",
    sales: 36.21,
    imgSrc: avatar12,
  },
];

const Creators = () => {
  return (
    <section id="creators" className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6rem",
        }}
      >
        <div>
          <h2 className="secondary-header">Top Creators</h2>
          <p className="collection-after-text">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "end" }}>
          <Button
            padding={"1.9rem 5rem"}
            altText={"user icon"}
            imgSrc={activeRocket}
            btnName={"View Ranks"}
            bgColor={"transparent"}
            borderColor={"#A259FF"}
            borderStyle={"solid"}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3rem",
        }}
      >
        {creatorsCardDeets.map((card) => (
          <CreatorsCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Creators;
