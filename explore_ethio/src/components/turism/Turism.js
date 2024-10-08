
import "./turism.css"
import lalmain1 from "../../assets/lalmain-1.svg";
import afar21 from "../../assets/afar-2-1.svg";
import axum1 from "../../assets/axum-1.svg";
import rectangle6 from "../../assets/rectangle-6.svg";
function Turism() {
  return (
    <section className='section-1'>
    <div className="text-wrapper-3">top tour</div>
        <div className="the-most-amazing">
          The Most&nbsp;&nbsp;Amazing Ethiopian Truism
        </div>

      
        <div className="overlap-group">
          <div className="rectangle-3" />
          <p className="there-is-some">
            <span className="span">
              There is some controversy as to when some of the churches
              wereconstructed. According to local tradition, in Ethiopia prior
              to hisaccession to the throne
            </span>
            <a
              href="https://en.wikipedia.org/wiki/Gebre_Meskel_Lalibela"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-4">Gebre </span>
            </a>
          </p>
          <img className="lalmain" alt="Lalmain" src={lalmain1} />
          <div className="text-wrapper-5">St. Lalibela</div>
          <div className="rectangle-4" />
          <div className="text-wrapper-6">Read More</div>
        </div>
        <div className="overlap-2">
          <p className="dallol-currently">
            <span className="span">
              Dallol currently holds the official record for{" "}
            </span>
            <a
              href="https://en.wikipedia.org/wiki/Extremes_on_Earth#Coldest_and_hottest_inhabited_places_on_Earth"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-4">
                record high average temperature for an inhabited location
              </span>
            </a>
            <span className="span"> on Earth, and an average </span>
          </p>
          <div className="text-wrapper-7">Afar</div>
          <div className="overlap-3">
            <div className="text-wrapper-8">Read More</div>
          </div>
          <img className="afar" alt="Afar" src={afar21} />
        </div>
        <div className="overlap-group-2">
          <div className="rectangle-5" />
          <p className="aksum-is-a-city-in">
            <span className="span">
              Aksum is a city in northern Ethiopia. It ;s known for
              itstall, carved obelisks, relics of the ancient
              Kingdom of Aksum. Most arein the northern Stelae Park,
              including a huge fallen pillar, now in&npieces
            </span>
            <span className="text-wrapper-4">&nbsp;</span>
          </p>
          <img className="axum" alt="Axum" src={axum1} />
          <div className="text-wrapper-9">Axum</div>
          <img className="img" alt="Rectangle" src={rectangle6} />
          <div className="text-wrapper-10">Read More</div>
        </div>



    </section>

  )
}

export default Turism
