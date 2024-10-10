import "./explore.css"
import logo21 from "../../assets/logo-2-1.svg";


function Explore() {
  return (
    <section className="container">
    <div className="explore">
    <div className="main_explore">
        <div className="explore_desc">
          <div className="explore_heder">
            <h1>EXPLORE ETHIOPIA</h1>

          </div>
          <div className="explore_title">
            <p>Ethiopia is Land Of The Origin</p>

            <div className="exp_button">
            <button className="explore_button">Explore Hire</button>
            </div>
            

          </div>

        </div>

        <div className="img_desc">
        <img className="view_cover" alt="Logo" src={logo21} />

        </div>

      </div>

    </div>
    
          
        
      
    </section>
  )
}

export default Explore
