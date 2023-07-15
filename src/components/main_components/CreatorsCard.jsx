const CreatorsCard = ({ card }) => {
  const { id, name, imgSrc, sales } = card;
  return (
    <div className="top-card">
      <div className="card-left-img">
        <span>{id}</span>
        <img src={imgSrc} alt={name} />
      </div>
      <div className="card-right-txt ">
        <h3>{name}</h3>
        <p>
          Total Sales: <span className="card-right-sale">{`${sales} ETH`}</span>
        </p>
      </div>
    </div>
  );
};

export default CreatorsCard;
