import Explore from "../explore/Explore"
import Footer from "../footer/Footer"
import Hero from "../hero/Hero"
import Turism from "../turism/Turism"
import Vist from "../vist/Vist"
import "./home.css"

function Home() {
  return (
    <>
  <div className="home_page">
  <Hero />
  <Turism />
  <Vist />
  <Explore />
  <Footer />

  </div>

   
   

  
  

    </>
  )
}

export default Home
