import "./about.css";
import logomain3 from "../../assets/logomain-2.svg";
import m11 from "../../assets/m1-1.png";
import m21 from "../../assets/m2-1.png";
import m41 from "../../assets/m4-1.png";
import carTur1 from "../../assets/car-tur-1.png";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <div className="about_us">
        <div className="about_desc">
          <h1>About Us</h1>
          <p>
            We specialize in providing unforgettable experiences in
            Ethiopia,from breathtaking landscapes to rich cultural heritage.
          </p>
        </div>
        <div className="about_img">
          <img src={logomain3} alt="" />
        </div>
      </div>

      <div className="guidance">
        <div className="gidance_header">
          <h1>Our Team</h1>
        </div>

        <div className="all_gidances">
          <div className="card_gide">
            <div className="card_img">
              <img className="lalmain" alt="Lalmain" src={m21} />
            </div>

            <div className="card_header">
              <h3>Bekele Uma (CEO)</h3>
            </div>
            <div className="card_desc">
              <p>
                BA in Tourism Management from University of Gondar. MA in
                MarketingManagement from Addis Ababa University. Worked aTour
                Operator and licensed Tour Guide since 2011.
              </p>
            </div>
          </div>
          <div className="card_gide">
            <div className="card_img">
              <img className="lalmain" alt="Lalmain" src={m41} />
            </div>

            <div className="card_header">
              <h3>Seid Yesuf(manager)</h3>
            </div>
            <div className="card_desc">
              <p>
                BA in Tourism Management from University of Gondar. MA in
                Marketing Management from Addis Ababa University
              </p>
            </div>
          </div>
          <div className="card_gide">
            <div className="card_img">
              <img className="lalmain" alt="Lalmain" src={m11} />
            </div>

            <div className="card_header">
              <h3>Abiy Nigussie (Marketing Manager)</h3>
            </div>
            <div className="card_desc">
              <p>
                BA in Tourism Management from University of Gondar. MA in
                Marketing Management from Addis Ababa University.
              </p>
            </div>
          </div>
        </div>
      </div>

    <div>
    
      <div className="our_uniqe">
        <div className="uniq">
          <h1>Our Uniqueness</h1>
          <p>
            You are not only travelling in Ethiopia with us, but you will also
            experience the deep, exotic culture of the Ethiopian with our
            friendly and well trained staffs. Visit Ethiopia travel is an
            outstanding travel company combining the best service with the most
            customized and tailor-made tour packages designed according to our
            clients’ needs (budget oriented or higher end, natural or cultural
            focus, etc.)
          </p>
         
         
        </div>
        <div className="uniq_img">
          <img src={carTur1} alt="" />
        </div>

      </div>
      <button className="back_button"><Link to="/" className="link">Back To Home Page</Link></button>
    </div>

      <Footer />
    </div>
  );
}

export default About;
