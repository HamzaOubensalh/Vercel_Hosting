"use client";

import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import "./page.css";
import Image from "next/image";
import { component23, mask_group_52 } from "@/Assets/Assets";
import { useState, useEffect } from "react";

const Partners = () => {
  const [display, setDisplay] = useState(false);
  const [content, setContent] = useState<JSX.Element | null>(null);
  const [extraClass, setExtraClass] = useState("");

  useEffect(() => {
    const menuItems = document.querySelectorAll<HTMLLIElement>("#menu li");

    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        menuItems.forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("click", () => {});
      });
    };
  }, []);

  const displayDiv = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLElement;
    const className = element.className;
    setExtraClass("Hidden-Content");
    if (element.classList.contains("Architects")) {
      setContent(
        <div className="services-content-partner">
          <div className="item1">
            <p>Creative Element</p>
            <p>Interactive 3D Model</p>
            <p>
              Showcase a 3D model of a building with Eaneer’s solutions
              integrated, allowing visitors to explore different areas and see
              how Eaneer enhances architectural designs
            </p>
          </div>
          <div className="item2">
            <div>
              <p>Innovative Solutions for Your Designs</p>
              <p>
                Collaborate with Eaneer to integrate cutting-edge electrical and
                energy solutions into your architectural projects, ensuring
                efficiency and sustainability.
              </p>
            </div>
            <div>
              <p>Why partner with eaneer</p>
            </div>
            <div>
              <p>Enhanced Project Value</p>
              <p>
                Our expertise in energy efficiency and automation adds
                significant value to your projects, making them more attractive
                to clients.
              </p>
            </div>
            <div>
              <p>Seamless Integration</p>
              <p>
                Our team works closely with architects to ensure our systems
                seamlessly integrate into your designs, maintaining the
                aesthetic and functional integrity of your projects.
              </p>
            </div>
          </div>
        </div>
      );
      setExtraClass("Architects");
      setDisplay(true);
    } else if (element.classList.contains("Distributors")) {
      setContent(
        <div className="services-content-partner">
          <div className="services-content-partner">
            <div className="item1">
              <p>Creative Element</p>
              <p>Video Testimonials</p>
              <p>
                Feature video testimonials from successful distributors
                explaining how partnering with Eaneer has positively impacted
                their business.
              </p>
            </div>
            <div className="item2">
              <div>
                <p>Expand Your Product Range</p>
                <p>
                  By partnering with Eaneer, you can offer your clients a
                  comprehensive range of high-demand electrical and energy
                  solutions.
                </p>
              </div>
              <div>
                <p>Why partner with eaneer</p>
              </div>
              <div>
                <p>Boost Your Revenue</p>
                <p>
                  Our innovative products and services are in high demand,
                  helping you increase your sales and revenue.
                </p>
              </div>
              <div>
                <p>Dedicated Support</p>
                <p>
                  Receive extensive training, marketing materials, and dedicated
                  account management to ensure your success as an Eaneer
                  distributor.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      setExtraClass("Distributors");
      setDisplay(true);
    } else if (element.classList.contains("Contractors")) {
      setContent(
        <div className="services-content-partner">
          <div className="services-content-partner">
            <div className="item1">
              <p>Creative Element</p>
              <p>Before-and-After Slideshow</p>
              <p>
                Use a before-and-after slideshow to demonstrate the
                transformation of construction projects with Eaneer’s solutions.
              </p>
            </div>
            <div className="item2">
              <div>
                <p>Reliable Solutions for Your Projects</p>
                <p>
                  Ensure your construction projects benefit from Eaneer’s
                  reliable and efficient electrical systems and renewable energy
                  solutions.
                </p>
              </div>
              <div>
                <p>Why partner with eaneer</p>
              </div>
              <div>
                <p>Streamlined Project Management</p>
                <p>
                  Our comprehensive service portfolio allows for streamlined
                  project management, reducing downtime and increasing
                  efficiency.
                </p>
              </div>
              <div>
                <p>Ongoing Support</p>
                <p>
                  Benefit from Eaneer’s ongoing support and maintenance
                  services, ensuring the longevity and performance of the
                  systems you install.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      setExtraClass("Contractors");
      setDisplay(true);
    } else if (element.classList.contains("Engineers")) {
      setContent(
        <div className="services-content-partner">
          <div className="services-content-partner">
            <div className="item1">
              <p>Creative Element</p>
              <p>Infographic</p>
              <p>
                Create an infographic that illustrates the collaborative process
                between engineers and Eaneer, highlighting key benefits and
                successful project outcomes.
              </p>
            </div>
            <div className="item2">
              <div>
                <p>Cutting-Edge Technology</p>
                <p>
                  Work with a partner that offers the latest in electrical and
                  renewable energy technologies, enhancing your engineering
                  projects.
                </p>
              </div>
              <div>
                <p>Why partner with eaneer</p>
              </div>
              <div>
                <p>Collaborative Innovation</p>
                <p>
                  Collaborate with Eaneer’s experts to innovate and implement
                  advanced solutions that meet the highest standards of
                  performance and sustainability.
                </p>
              </div>
              <div>
                <p>Professional Growth</p>
                <p>
                  Access training and resources to stay updated on industry
                  trends and technologies, fostering your professional
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      setExtraClass("Engineers");
      setDisplay(true);
    } else if (element.classList.contains("Property_Managers")) {
      setContent(
        <div className="services-content-partner">
          <div className="services-content-partner">
            <div className="item1">
              <p>Creative Element</p>
              <p>Interactive Property Map</p>
              <p>
                Display an interactive map showing properties that have
                benefited from Eaneer’s solutions, with clickable pins providing
                more information and client testimonials
              </p>
            </div>
            <div className="item2">
              <div>
                <p>Efficient Property Management</p>
                <p>
                  Implement Eaneer’s automation and energy efficiency solutions
                  to streamline property management and reduce operational
                  costs.
                </p>
              </div>
              <div>
                <p>Why partner with eaneer</p>
              </div>
              <div>
                <p>Efficient Property Management</p>
                <p>
                  Implement Eaneer’s automation and energy efficiency solutions
                  to streamline property management and reduce operational
                  costs.
                </p>
              </div>
              <div>
                <p>Efficient Property Management</p>
                <p>
                  Implement Eaneer’s automation and energy efficiency solutions
                  to streamline property management and reduce operational
                  costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      setExtraClass("Property_Managers");
      setDisplay(true);
    }
  };

  return (
    <>
      <Header />
      <div className="Main-Partners">
        <div className="Main-Partners-Titles">
          <p></p>
          <p></p>
          <p>Partners</p>
          <p>Partner With Eaneer</p>
          <p>We Can Drive Innovation And Create A More Sustainable Future.</p>
        </div>
        <div className="Main-Partners-Content">
          <Image
            className="Partners-Image"
            src={mask_group_52}
            alt={""}
            height={609}
          />
        </div>
        <div className="Main-Partners-Content2">
          <div className="Content2-Titles">
            <p>
              Are you a business or organization looking to collaborate with a
              leader in sustainable energy solutions? Partner with Eaneer and
              together
            </p>
            <p>Why Partner With Us:</p>
          </div>
          <div className="Content2-Cards">
            <div className="Card1">
              <p>Innovative Solutions:</p>
              <p>
                Access cutting-edge technology and innovative solutions
                developed by Eaneer's team of experts.
              </p>
            </div>
            <div className="Card2">
              <p>Market Leadership:</p>
              <p>
                Partner with a recognized leader in the industry, trusted by
                clients worldwide for our quality and reliability.
              </p>
            </div>
            <div className="Card3">
              <p>Shared Values:</p>
              <p>
                Align your brand with our commitment to sustainability and
                environmental stewardship.
              </p>
            </div>
            <div className="Card4">
              <p>Collaborative Approach:</p>
              <p>
                Benefit from our collaborative approach to partnerships,
                tailored to meet your unique needs and objectives.
              </p>
            </div>
            <div className="Card5">
              <p>Mutual Growth:</p>
              <p>
                Grow your business alongside ours, leveraging our expertise and
                resources to achieve mutual success.
              </p>
            </div>
          </div>
        </div>
        <div className="Main-Partners-Content3">
          <div className="Main-Partners-Content3-Title">
            <p>Our Partner Programs</p>
          </div>
          <div className="Main-Partners-Content3-Content">
            <div className="Content-Card1">
              <p>Reseller Program</p>
              <p>
                Join our reseller program and distribute Eaneer's products and
                solutions to your customers
              </p>
            </div>
            <div className="Content-Card2">
              <p>Technology Partnerships</p>
              <p>
                Collaborate with us to integrate your technology with ours,
                driving innovation and enhancing product offerings.
              </p>
            </div>
            <div className="Content-Card3">
              <p>Strategic Alliances</p>
              <p>
                Forge strategic alliances with Eaneer to explore new markets,
                expand your reach, and drive growth.
              </p>
            </div>
          </div>
          <div className="Main-Partners-Content3-Footer">
            <p>
              Partner with Eaneer and unlock new opportunities for growth,
              innovation, and success. Let's work together to build a cleaner,
              more sustainable future for all.
            </p>
          </div>
        </div>
        <div className="Creative_Element">
          <ul id="menu" className="Creative_Element_Navbar">
            <li onClick={displayDiv} className="Architects active">
              Architects
            </li>
            <li onClick={displayDiv} className="Distributors">
              Distributors
            </li>
            <li onClick={displayDiv} className="Contractors">
              Contractors
            </li>
            <li onClick={displayDiv} className="Engineers">
              Engineers
            </li>
            <li onClick={displayDiv} className="Property_Managers">
              Property Managers
            </li>
          </ul>
        </div>
        <div className={`services-content-1 ${extraClass}`}>{content}</div>
        <div className="eaneer_logo">
          <Image
            src={component23}
            width={33.83}
            height={37.6}
            alt={"Eaneer_Logo"}
          />
        </div>
        <div className="Fourth-Main">
          <div className="Fourth-Main1">
            <p>Contact Us Today</p>
            <p className="content">
              Have questions about our services or ready to start your project?
            </p>
          </div>
          <div className="Fourth-Main2">
            <input type="text" placeholder="Type Your Email" />
            <button>Get Started</button>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Partners;
