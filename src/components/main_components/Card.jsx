import "../../assets/components_css/main.css";

const Card = ({ nftImg }) => {
  const [nftA1, nftA2, nftA3, ui_A, pages, title] = nftImg;
  return (
    <div className="card">
      <img src={nftA1} alt="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          maxWidth: "100%",
          maxHeight: "12rem",
          flexWrap: "wrap",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            flex: "1",
            // height: "12rem",
            width: "100%",
          }}
        >
          <img src={nftA2} alt="" style={{ width: "100%" }} />
        </div>

        <div
          style={{
            flex: "1",
            // maxHeight: "12rem",
            width: "100%",
          }}
        >
          <img src={nftA3} alt="" style={{ width: "100%" }} />
        </div>

        <span>{pages}+</span>
      </div>
      <h3
        style={{
          fontSize: "2.2rem",
          fontWeight: "600",
          lineHeight: "140%",
          color: "white",
          marginTop: "1.5rem",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          gap: "1.2rem",
          maxHeight: "2.4rem",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <img
          src={ui_A}
          alt=""
          style={{
            maxWidth: "2.4rem",
            height: "2.4rem",
            display: "inline-block",
          }}
        />
        <p
          style={{
            display: "inline-block",
            fontSize: "1.6rem",
            color: "white",
          }}
        >
          {" "}
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
