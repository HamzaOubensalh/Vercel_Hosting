"use client";
import React, { useEffect, useState } from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { down, group_225, image_app, mask_group_1 } from '../../Assets/Assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from "next/link";
import { logo } from "../../Assets/Assets";


const Header: React.FC = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const [display, setDisplay] = useState(false);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const displayDiv = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;

    if (element.classList.contains("construction")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>Installation Electrique</li>
            <li>Eclairage Interieur/Exterieur</li>
            <li>Entretien et Reparation</li>
            <li>Systeme de Securite</li>
          </ul>
        </div>
      );
      setDisplay(true);
    } else if (element.classList.contains("industrial")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>Distribution d&apos;energy</li>
            <li>Automation Indistriel</li>
            <li>Securite et Surveillance</li>
            <li>Services De Maintenance</li>
          </ul>
        </div>
      );
      setDisplay(true);
    } else if (element.classList.contains("agriculture")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>Pompage/Irrigation Automatique</li>
            <li>Automatisation Des Serres Agricoles</li>
            <li>Serres Connects</li>
            <li>Control Des Parmetrer Agricole</li>
          </ul>
        </div>
      );
      setDisplay(true);
    } else if (element.classList.contains("subscription")) {
      setContent(
        <div className="services-content">
          <ul>
            <li>eaneer shield</li>
            <li>eaneer solar</li>
          </ul>
        </div>
      )
    } else {
      setDisplay(false);
      setContent(null);
    }
  };

  return (
    <div className="container-style">
      <div className="container-style2">
        <nav className="navbar navbar-expand-lg">
          <div className="brand-image">
            <a className="navbar-brand" href="/app">
              <Image src={logo} alt={""} width={135.42} height={37.6} ></Image>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </button>
          </div>
          <div className="collapse-container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown open" style={{ position: "initial" }}>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Company
                  </a>
                  <ul className="dropdown-menu" style={{ width: "100%" }}>
                    <div className="Main-dropdown">
                      <div>
                        <a href="/navbar/about-us">About Us</a>
                        <p>Learn more about eaneer, our mission, and how we're revolutionizing the electrical industry.</p>
                      </div>
                      <div>
                        <a href="">Technologies</a>
                        <p>Experience the latest advancements in electrical engineering and technology with eaneer's state-of-the-art solutions.</p>
                      </div>
                      <div>
                        <a href="/navbar/contact">Contact</a>
                        <p>Get in touch with eaneer's dedicated team for expert guidance, support, and collaboration</p>
                      </div>
                      <div>
                        <a href="/navbar/purpose">Purpose</a>
                        <p>Explore eaneer's purpose: creating safer, more efficient electrical solutions for a sustainable future.</p>
                      </div>
                      <div>
                        <a href="">Sustainability</a>
                        <p>eaneer is leading the charge towards a sustainable future through eco-friendly practices, renewable energy solutions.</p>
                      </div>
                      <div>
                        <a href="/navbar/affiliate">Affiliate</a>
                        <p>Join eaneer's affiliate program and partner with us to drive mutual growth and success.</p>
                      </div>
                      <div>
                        <a href="">Innovation</a>
                        <p>Explore the cutting-edge technologies and innovative solutions that power e
                          eaneer's success.</p>
                      </div>
                      <div>
                        <a href="/navbar/strategy">Strategy</a>
                        <p>Delve into eaneer's strategic approach to delivering exceptional service and value to our clients.</p>
                      </div>
                      <div>
                        <a href="/navbar/partners">Partners</a>
                        <p>Discover eaneer's trusted network of partners, collaborators, working together to achieve shared goals and aspirations.</p>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown" style={{ position: "initial" }}>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Industry
                  </a>
                  <ul className="dropdown-menu" style={{ width: "100%" }}>
                    <div className="Main-dropdown1" >
                      <div className="Main-dropdown-pages">
                        <div className="page">
                          <a href="/navbar/agriculture">Agriculture</a>
                          <p>Boosting yields and efficiency with smarter farm electricity</p>
                        </div>
                        <div className="page">
                          <a href="/navbar/industry">Industrial</a>
                          <p>Reliable, robust electrical solutions for the heart of your industry</p>
                        </div>
                        <div className="page">
                          <a href="/navbar/construction">Buildings</a>
                          <p>Smart and efficient electrical systems for modern buildings</p>
                        </div>
                        <div className="page">
                          <a href="/navbar/energy">Green Energy</a>
                          <p>Renewable energy: The key to a greener future</p>
                        </div>
                      </div>
                      <div className="Holder-dropdown-Mobile">
                        <div className="Main-dropdown-Mobile">
                          <div className="Main-dropdown-Mobile-Content">
                            <p>Get Into Your Interface</p>
                            <div className="app">
                              <p>Get Your Mobile App</p>
                              <i className='bx bxs-chevron-down' style={{ color: '#fff7f7' }}  ></i>
                            </div>
                            <div className="app-Button">
                              <button>Download The App</button>
                            </div>
                            <div className="app">
                              <p>Continue on your browser </p>
                              <i className='bx bxs-chevron-down' style={{ color: '#fff7f7' }}  ></i>
                            </div>
                          </div>
                          <div className="image-mobile-app">
                            <Image className="Image-1" src={image_app} alt={""}></Image>
                            <Image className="Image-2" src={group_225} alt={""}></Image>
                          </div>
                          {/* <div className="image-mobile-app2">
                            <Image className="Image-2" src={group_225} alt={""}></Image>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown" style={{ position: "initial" }}>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu" style={{ width: "100%" }}>
                    <div className="Main-dropdown2">
                      <div className="dropdown-ul">
                        <ul>
                          <li className="construction" onMouseEnter={displayDiv}>Construction</li>
                          <li className="industrial" onMouseEnter={displayDiv}>Industrial</li>
                          <li className="agriculture" onMouseEnter={displayDiv}>Agriculture</li>
                          <li className="subscription" onMouseEnter={displayDiv}>Subscription</li>
                        </ul>
                      </div>
                      {display && <div className="Main-dropdown-Content">{content}</div>}
                      <div className="Holder-dropdown-Mobile">
                        <div className="Main-dropdown-Mobile">
                          <div className="Main-dropdown-Mobile-Content">
                            <p>Get Into Your Interface</p>
                            <div className="app">
                              <p>Get Your Mobile App</p>
                              <i className='bx bxs-chevron-down' style={{ color: '#fff7f7' }}  ></i>
                            </div>
                            <div className="app-Button">
                              <button>Download The App</button>
                            </div>
                            <div className="app">
                              <p>Continue on your browser </p>
                              <i className='bx bxs-chevron-down' style={{ color: '#fff7f7' }}  ></i>
                            </div>
                          </div>
                          <div className="image-mobile-app">
                            <Image className="Image-1" src={image_app} alt={""}></Image>
                            <Image className="Image-2" src={group_225} alt={""}></Image>
                          </div>
                          {/* <div className="image-mobile-app2">
                            <Image className="Image-2" src={group_225} alt={""}></Image>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="/navbar/carrer">Carrer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="/navbar/finance">Finance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="/navbar/support">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Login" role="search">
            <a className="first-a" href="">Login</a>
            <a className="get-started" href="">Get Started</a>
          </div>
        </nav>
      </div>
      <hr />
    </div>

  );
}
export default Header;