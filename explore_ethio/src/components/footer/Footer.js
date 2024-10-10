import React from 'react'
import "./footer.css"
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import lalm11 from "../../assets/lalm-1-1.svg";
import lalmain1 from "../../assets/lalmain-1.svg";
import logo21 from "../../assets/logo-2-1.svg";
import logomain2 from "../../assets/logomain-2.svg";
import ab31 from "../../assets/ab-3-1.svg";
import afar21 from "../../assets/afar-2-1.svg";
import axum1 from "../../assets/axum-1.svg";
import carbonDotMark from "../../assets/carbon-dot-mark.svg";
import er11 from "../../assets/er-1-1.svg";
import g11 from "../../assets/g-1-1.svg";
import icOutlineFacebook from "../../assets/ic-outline-facebook.svg";
// import image from "../../assets/image.svg";
import meskl21 from "../../assets/meskl-2-1.svg";
import rectangle13 from "../../assets/rectangle-13.svg";
import rectangle6 from "../../assets/rectangle-6.svg";
import vector2 from "../../assets/vector-2.svg";
import vector from "../../assets/vector.svg";

import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>

      <div className='main_footer'>
        <div className='log_part'>
          <div className='logo_img'>
          <img className="logomain-2" alt="Logomain" src={logomain2} />
          </div>
          <div className='logo_desc'>
            <p>
            <span className="exeth">Explore</span>
              <span>&nbsp;</span>
              <span className="eth">Ethi</span>
              <span className="opia">opia</span>
            </p>
          </div>

        </div>
        <div className='quick'>
         <div>
         <p>Quick Link</p>
         {/* <div className="underline" /> */}
         </div>
          <ul>
            <li>
              <Link className='link'>Home</Link>
              
            </li>
            <li>
              <Link className='link'>About Us</Link>
              
            </li>
            <li>
              <Link className='link'>Contact us</Link>
              
            </li>
          </ul>

        </div>
        <div className='distination'>
       <div>
       <p>Destination</p>
       {/* <div className="underline" /> */}
       </div>
          <ul>
          <li>
              <Link className='link'>Lalibela</Link>
              
            </li>
            <li>
              <Link className='link'>Gonder</Link>
              
            </li>
            <li>
              <Link className='link'>Afar</Link>
              
            </li>
            <li>
              <Link className='link'>Tigray</Link>
              
            </li>
            <li>
              <Link className='link'>Ormiya</Link>
              
            </li>
            <li>
              <Link className='link'>South Region</Link>
              
            </li>
       
          </ul>

        </div>
        <div className='social_media'>
       <div>
       <p>Social Media</p>
       {/* <div className="underline" /> */}
       </div>
          <ul>
          <li>
             <Link className='link'>
             <FaFacebook />
             </Link>
              
            </li>
            <li>
              <Link className='link'><FaTelegram /></Link>
              
            </li>
            <li>
              <Link className='link'><FaSquareXTwitter/></Link>
              
            </li>
            <li>
              <Link className='link'><FaYoutube /></Link>
              
            </li>
           
       
          </ul>

        </div>

      </div>

      <div className='copy_right'>
        <p>@2024 copy Right is Reserved By Law</p>

      </div>
 {/* <img className="rectangle-9" alt="Rectangle" src={rectangle13} />
            <div className="text-wrapper-14">South Regin</div>
            <div className="text-wrapper-15">Oromia</div>
            <div className="text-wrapper-16">Tigray</div>
            <div className="text-wrapper-17">Afar</div>
            <img
              className="carbon-dot-mark"
              alt="Carbon dot mark"
              src={carbonDotMark}
            />
            <img
              className="carbon-dot-mark-2"
              alt="Carbon dot mark"
              src={carbonDotMark}
            />
            <div className="text-wrapper-18">Gonder</div>
            <img
              className="carbon-dot-mark-3"
              alt="Carbon dot mark"
              src={carbonDotMark}
            />
            <img
              className="carbon-dot-mark-4"
              alt="Carbon dot mark"
              src={carbonDotMark}
            />
            <div className="text-wrapper-19">Lalibela</div>
            <div className="rectangle-10" />
            <div className="text-wrapper-20">Get with Social Media</div>
            <div className="text-wrapper-21">Contact Us</div>
            <div className="text-wrapper-22">About us</div>
            <div className="text-wrapper-23">Home</div>
            <p className="explore-ethiopia">
              <span className="text-wrapper-24">Explore</span>
              <span className="text-wrapper-25">&nbsp;</span>
              <span className="text-wrapper-26">Ethi</span>
              <span className="text-wrapper-27">opia</span>
            </p>
            <img className="logomain-2" alt="Logomain" src={logomain2} />
            <div className="ellipse" />
            <div className="text-wrapper-28">Quick Link</div>
            <p className="p">@2024 copy Right is Reserved By Law</p>
            <img
              className="ic-outline-facebook"
              alt="Ic outline facebook"
              src={icOutlineFacebook}
            />
       */}
    </div>
  )
}

export default Footer
