import React from 'react';
import '../../App.css';
import DownloadLink from "react-download-link";
import { Link } from "react-router-dom";
import { Button } from '../Button';
import Footer from '../Footer';



function AboutMeSection() {
  const background_img = '/images/plexus-wallpaper.jpeg';
  return (



    <div className="aboutme-container">
      <div className="container-1">
        <video src='/videos/video-5.mp4' autoPlay loop muted />

        <div className="container-1-box1" id="aboutme-container-1-box1" >

          <p className='aboutme-name'>Youcef Belhadri <br /> </p>
          <p className='aboutme-job'> I am a Data Scientist passionate of maths, statistics & data. </p> <br />


          <div className='target'>
            <a href="#container-2"> My Experience <i class="fas fa-briefcase"></i></a>
          </div>
        </div>

        <div className="container-1-box2" id="aboutme-container-1-box2">
          <img className='aboutMe-photo' src={process.env.PUBLIC_URL + "/images/logo.png"} height='400px'/>
        </div>




      </div>

      <div className="container-2" id="container-2">

        {/* <div className="personal-details">
        <div className="personal-details-title">
<h1>Personal Details</h1>


        </div>
        <div className="personal-details-content">
<p>A few interesting things about me. I love to read science fiction (my favorite is Frank Herbert's Dune). I am also an avid gamer. I love to play competitive strategy games and first-person shooters. Lastly, I love learning. Every day I push myself to learn something new, whether that be about machine learning, software engineering, or miscellaneous facts about the universe.

On top of recently getting married and graduating with a masters in computer science from UT Dallas, I also recently started working as a senior data scientist at Capital One. My work mainly revolves around utilizing natural language processing to build a more intelligent customer experience.</p>


        </div>
        </div>
        <hr/> */}
        <div id="container-2-box1">
          <h1 >My Experience</h1>

          <ul class="timeline">

            {/* <!-- Item 1 --> */}
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">FREELANCER</span>
                  <span class="time-wrapper"><span class="time">Present</span></span>
                </div>
                <div class="desc">Working for freelance platform and work on data missions.</div>
              </div>
            </li>

            {/* <!-- Item 2 --> */}
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">SOCIETE GENERALE</span>
                  <span class="time-wrapper"><span class="time">2019 - 2020</span></span>
                </div>
                <div class="desc">Data scientist & member of Big data team. Used to work on different missions based on Hadoop
                clusters ecosystem</div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">SOCIETE GENERALE</span>
                  <span class="time-wrapper"><span class="time">2018 - 2019</span></span>
                </div>
                <div class="desc">My first year as a big data developer inside the company..</div>
              </div>
            </li>

            {/* <!-- Item 3 --> */}
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">AXA / ISEP</span>
                  <span class="time-wrapper"><span class="time">2017 - 2018</span></span>
                </div>
                <div class="desc">IT technician.</div>
              </div>
            </li>

          </ul>




        </div>





      </div>


    </div>

  );
}




export default function AboutMe() {
  return (
    <>
      <AboutMeSection />

      <Footer />
    </>
  );
}
