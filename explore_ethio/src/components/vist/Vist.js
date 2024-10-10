import "./vist.css";
import meskl21 from "../../assets/meskl-2-1.svg";
import er11 from "../../assets/er-1-1.svg";
import ab31 from "../../assets/ab-3-1.svg";
import g11 from "../../assets/g-1-1.svg";

function Vist() {
  return (
    <section className="container">
      <div className="vist">
        <div className="vist_header">
          <h2>Visit Ethiopia</h2>
        </div>
        <div className="vist_desc">
          <p>
            Welcome to Ethiopia, Land of Origins · Things to do in Ethiopia ·
            Trekking on the peaks of Ethiopia
          </p>
        </div>
       <div className="tur_list">
       <div className="tur_card">
        <img src={g11} alt="" />
          <p>Castel Of Fasiledes</p>

        </div>
        <div className="tur_card">
        <img src={ab31} alt="" />
        <p>Nile river</p>

        </div>

        <div className="tur_card">
        <img src={er11} alt="" />
                <p>Erta Ale</p>

        </div>

        <div className="tur_card">
        <img src={meskl21} alt="" />
        <p>Meskel (Demera)</p>

        </div>
       </div>





      </div>
      
    </section>
  );
}

export default Vist;
