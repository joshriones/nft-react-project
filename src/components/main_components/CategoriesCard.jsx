import "../../assets/components_css/main.css";

function CategoriesCard({ icon, bgImg, label }) {
  const categoryCardStyle = {
    display: "flex",
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    position: "relative",
  };

  return (
    <figure className="category-card">
      <div className="category-card-bgimg" style={categoryCardStyle}>
        <div class="blur-overlay"></div>
        <img src={icon} alt={label} style={{ zIndex: "2" }} />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default CategoriesCard;
