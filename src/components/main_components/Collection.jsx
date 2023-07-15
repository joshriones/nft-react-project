import Card from "./Card";
import nftA1 from "../../assets/images/nftA_1.png";
import nftA2 from "../../assets/images/nftA_2.png";
import nftA3 from "../../assets/images/nftA_3.png";
import nftB1 from "../../assets/images/nftB_1.png";
import nftB2 from "../../assets/images/nftB_2.png";
import nftB3 from "../../assets/images/nftB_3.png";
import nftC1 from "../../assets/images/nftC_1.png";
import nftC2 from "../../assets/images/nftC_2.png";
import nftC3 from "../../assets/images/nftC_3.png";
import ui_A from "../../assets/images/ui_A.png";
import ui_B from "../../assets/images/ui_B.png";
import ui_C from "../../assets/images/ui_C.png";
import "../../assets/components_css/main.css";

const Collection = () => {
  return (
    <section id="collection" className="container">
      <div style={{ marginBottom: "6rem" }}>
        <h2 className="secondary-header">Trending Collection</h2>
        <p className="collection-after-text">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="grid-col-3">
        <Card nftImg={[nftA1, nftA2, nftA3, ui_A, 1024, "DSGN Animals"]} />
        <Card nftImg={[nftB1, nftB2, nftB3, ui_B, 1056, "Magic Mushrooms"]} />
        <Card nftImg={[nftC1, nftC2, nftC3, ui_C, 1063, "Disco Machines"]} />
      </div>
    </section>
  );
};

export default Collection;
