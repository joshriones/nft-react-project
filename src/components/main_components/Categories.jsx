import icon1 from "../../assets/images/c_icon1.svg";
import icon2 from "../../assets/images/c_icon2.svg";
import icon3 from "../../assets/images/c_icon3.svg";
import icon4 from "../../assets/images/c_icon4.svg";
import icon5 from "../../assets/images/c_icon5.svg";
import icon6 from "../../assets/images/c_icon6.svg";
import icon7 from "../../assets/images/c_icon7.svg";
import icon8 from "../../assets/images/c_icon8.svg";
import img1 from "../../assets/images/c_img1.png";
import img2 from "../../assets/images/c_img2.png";
import img3 from "../../assets/images/c_img3.png";
import img4 from "../../assets/images/c_img4.png";
import img5 from "../../assets/images/c_img5.png";
import img6 from "../../assets/images/c_img6.png";
import img7 from "../../assets/images/c_img7.png";
import img8 from "../../assets/images/c_img8.png";
import CategoriesCard from "./CategoriesCard";

const categories = [
  {
    cid: 1,
    icon: icon1,
    bgImg: img1,
    label: "Art",
  },
  {
    cid: 2,
    icon: icon2,
    bgImg: img2,
    label: "Collectibles",
  },
  {
    cid: 3,
    icon: icon3,
    bgImg: img3,
    label: "Music",
  },
  {
    cid: 4,
    icon: icon4,
    bgImg: img4,
    label: "Photography",
  },
  {
    cid: 5,
    icon: icon5,
    bgImg: img5,
    label: "Video",
  },
  {
    cid: 6,
    icon: icon6,
    bgImg: img6,
    label: "Utility",
  },
  {
    cid: 7,
    icon: icon7,
    bgImg: img7,
    label: "Sport",
  },
  {
    cid: 8,
    icon: icon8,
    bgImg: img8,
    label: "Virtual Worlds",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="container">
      <div style={{ marginBottom: "6rem" }}>
        <h2 className="secondary-header">Browse Categories</h2>

        <div className="category-wrapper">
          {categories.map((category) => (
            <CategoriesCard
              key={category.cid}
              icon={category.icon}
              label={category.label}
              bgImg={category.bgImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
