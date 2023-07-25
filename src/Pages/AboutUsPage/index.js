import React from 'react';
import { FaGithub } from 'react-icons/fa';

// import component 
import Footer from '../../Component/Footer';

// import css
import '../../Styles/LandingPages/community.css';

function AboutUs() {
  return (
    <body>
      <div className="background">
        <div className="container">
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '20px', marginRight: '50px' }}>
              <div className='about-title' style={{ backgroundColor: '#4E67EB', padding:"20px", borderRadius: "25px"}}>
                <h1>ABOUT US</h1>
                <div className='about-text' style={{ backgroundColor: '#4E67EB'}}>
                  <p>
                    Welcome to our online game platform!</p>


                    <p>We strive to provide a fun and engaging experience for gamers of all ages and backgrounds. Our platform offers a wide variety of games to choose from, including classic favorites and new releases.</p>

                    <p>Our team is made up of passionate gamers and developers who work tirelessly to ensure that our platform is user-friendly, reliable, and secure. We are committed to providing the best possible gaming experience for our users, and we are constantly working to improve our platform and add new features.</p>

                    <p>Whether you're a casual gamer or a hardcore enthusiast, we have something for everyone. So come join us and start playing today!
                  </p>
                </div>
              </div >


              <div className='developer-title' style={{ color: "white", textAlign: 'center', marginTop: "50px"}}>
                <h1 className='text-light'>Developer Team:</h1>

                <div className='developer-name d-flex justify-content-center'>
                <div className='developer-info d-flex' style={{ gap: "40px"}}>
                    <div className='developer-info-item'>
                    <h6 >
                        Hansen Yudhistira
                    </h6>
                    <div className="icon-text-container">
                        <FaGithub />
                        <span>HansenYudistira</span>
                    </div>
                    </div>
                    <div className='developer-info-item'>
                    <h6 >
                        Ignatius Kurniawan
                    </h6>
                    <div className="icon-text-container">
                        <FaGithub />
                        <span>sekrupman</span>
                    </div>
                    </div>
                    <div className='developer-info-item'>
                    <h6 >
                        Difa ‘ Hanan Harahap
                    </h6>
                    <div className="icon-text-container">
                        <FaGithub />
                        <span> difahanan</span>
                    </div>
                    </div>
                    <div className='developer-info-item'>
                    <h6 > 
                        Agnes Septilia
                    </h6>
                    <div className="icon-text-container">
                        <FaGithub />
                        <span> agnes-septilia</span>
                    </div>
                    </div>
                    <div className='developer-info-item'>
                    <h6 >
                        Nour Afni Putri
                    </h6>
                    <div className="icon-text-container">
                        <FaGithub />
                        <span>Nourafniputri</span>
                    </div>
                    </div>
                </div>
                </div>

                </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
}


export default AboutUs;
