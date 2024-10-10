import "./turism.css";
import vistE from "../../assets/vistE.jpeg";
import { useCollapse } from "react-collapsed";
function Turism() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <section className="container">
      <div className="turism_Section">
        <div className="turism_header">
          <h2>Top Tour Places</h2>
        </div>
        <div className="turism_desc">
          <h1> The Most&nbsp;&nbsp;Amazing Ethiopian Truism</h1>
        </div>

        <div className="eth_tur">
          <div className="eth_tur_desc">
            <h1>How is Ethiopia as a Travel Destination</h1>
            <p>
              Ethiopia. One of those countries that we all have heard but knew
              very little about. The mention of this country brings an exotic
              sound where one might imagine well-fashioned and accessorized
              tribes in a mountainous backdrop. That’s how it was for me at
              least. Luckily, that daydreaming had come to an end. The nature of
              my work, fortunately, gave me the once-in-a-lifetime opportunity
              to see this country.
            </p>
            <section {...getCollapseProps()}>
              {" "}
              <p>
                Ethiopia is about Historic Sights, Tribes, and Landscapes. Note
                that Ethiopia is nothing like Kenya and Tanzania, it is not a
                safari destination where you can expect to see lions and such.
                This is a common misconception among tourists so LEARN. Ethiopia
                is a history lover’s paradise with a lot of ancient landmarks.
                The classic must-visit ones are Lalibela, Aksum, Gondar (history
                and religious travel); Omo Valley (tribes and culture); and
                Danakil Depression, a geographic wonder— one of the hottest and
                lowest lands in the world. I can also recommend the 6th Century
                Abuna Yemata Guh church, which bristles with stories from a
                distant past. Simien Mountains are also must-visits in the
                country especially if you like hiking or camping but you have to
                be lucky with the weather or like us, you won’t see anything
                because of the fog.
              </p>
            </section>

            <button {...getToggleProps()} className="see_more">
              {isExpanded ? "See Less" : "Show More"}
            </button>
          </div>
          <div className="eth_tur_img">
            <img src={vistE} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Turism;
