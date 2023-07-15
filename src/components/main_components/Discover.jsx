import "../../assets/components_css/main.css";
import Button from "../reusable_component/Button";
import eyeIcon from "../../assets/images/eyeActive.svg";

import img1 from "../../assets/images/d_img1.png";
import img2 from "../../assets/images/d_img2.png";
import img3 from "../../assets/images/d_img3.png";
import avatar1 from "../../assets/images/avatar4.png";
import avatar2 from "../../assets/images/avatar7.png";
import avatar3 from "../../assets/images/avatar8.png";

import DicoverCards from "./DicoverCards";

const data = [
  {
    id: 1,
    title: "Distant Galaxy",
    name: "MoonDancer",
    avatar: avatar1,
    img: img1,
    price: 1.63,
    bid: 0.33,
  },
  {
    id: 2,
    title: "Life On Edena",
    name: "NebulaKid",
    avatar: avatar2,
    img: img2,
    price: 1.63,
    bid: 0.67,
  },
  {
    id: 3,
    title: "AstroFiction",
    name: "Spaceone",
    avatar: avatar3,
    img: img3,
    price: 1.51,
    bid: 0.53,
  },
];

const Discover = () => {
  return (
    <section id="discover" className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6rem",
        }}
      >
        <div>
          <h2 className="secondary-header">Discover More NFTs</h2>
          <p className="collection-after-text">Explore new trending NFTs</p>
        </div>

        <div style={{ display: "flex", alignItems: "end" }}>
          <Button
            padding={"1.9rem 5rem"}
            altText={"user icon"}
            imgSrc={eyeIcon}
            btnName={"See All"}
            bgColor={"transparent"}
            borderColor={"#A259FF"}
            borderStyle={"solid"}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "3rem",
        }}
      >
        {data.map((discover) => (
          <DicoverCards key={discover.id} data={discover} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
