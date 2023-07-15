function DicoverCards({ data }) {
  const { name, title, avatar, img, price, bid } = data;
  return (
    <div className="discover-card">
      <img src={img} alt={title} />

      <div className="discover-deets">
        <h2>{title}</h2>
        <div style={{ display: "flex", gap: "1.2rem" }}>
          <img
            src={avatar}
            alt={name}
            style={{ width: "2.4rem", height: "2.4rem" }}
          />
          <h4
            style={{
              fontSize: "1.6rem",
              color: "white",
              fontWeight: "normal",
              marginBottom: "2.5rem",
            }}
          >
            {name}
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.8rem",
          }}
        >
          <p
            style={{
              color: "#858584",
              fontSize: "1.2rem",
            }}
          >
            Price
          </p>
          <p
            style={{
              color: "#858584",
              fontSize: "1.2rem",
            }}
          >
            Highest Bid
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "white", fontSize: "1.6rem" }}>{`${price} ETH`}</p>
          <p style={{ color: "white", fontSize: "1.6rem" }}>{`${bid} wETH`}</p>
        </div>
      </div>
    </div>
  );
}

export default DicoverCards;
