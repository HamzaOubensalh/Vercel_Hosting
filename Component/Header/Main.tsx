import React from "react";
import "./Main.css";
import { building, tractore } from "../../Assets/Assets";
import { transparent_tractor } from "../../Assets/Assets";
import Image from "next/image";
import { second_tractore } from "../../Assets/Assets";
import { manufacture } from "../../Assets/Assets";
import { something } from "../../Assets/Assets";

const Main = () => {
  return (
    <div className="Main">
      <div className="Title-Line">
        <p>At Eaneer We Keep Your World Powered</p>
      </div>
      <div className="Bold-Line-Title">
        <p>
          {" "}
          We offer a comprehensive range of electrical engineering services{" "}
        </p>
      </div>
      <div className="Input">
        <div className="input-style">
          <input type="text" placeholder="Type Your Email" />
          <button>Get Started</button>
        </div>
      </div>
      <div className="Phrase">
        <p>Electrical Innovation For a Cleaner Future</p>
      </div>
      <div className="Cards">
        <div className="card card-black">
          <div className="top-banner">
            <p>Agriculture</p>
            <Image
              src={second_tractore}
              alt={"tractore"}
              height={70}
              width={70}
            ></Image>
          </div>
          <div className="Text">
            <p>Boosting Yields and Efficiency With Smarter Farm Electricity</p>
          </div>
          <div className="Button">
            <button>See More</button>
          </div>
        </div>
        <div className="card card-white">
          <div className="top-banner">
            <p>Industrial</p>
            <Image
              src={building}
              alt={"Building"}
              height={44.08}
              width={44.08}
            ></Image>
          </div>
          <div className="Text">
            <p>
              Reliable, robust electrical solutions for the heart of your
              industry
            </p>
          </div>
          <div className="Button">
            <button>See More</button>
          </div>
        </div>
        <div className="card card-white">
          <div className="top-banner">
            <p>Building</p>
            <Image
              src={manufacture}
              alt={"Manufacture"}
              height={48}
              width={48}
            ></Image>
          </div>
          <div className="Text">
            <p>Smart and efficient electrical systems for modern buildings</p>
          </div>
          <div className="Button">
            <button>See More</button>
          </div>
        </div>
        <div className="card card-black">
          <div className="top-banner">
            <p>Renewable energies</p>
            <Image
              src={something}
              alt={"Something"}
              width={40.56}
              height={43.94}
            ></Image>
          </div>
          <div className="Text">
            <p>Renewable energy: The key to a greener future</p>
          </div>
          <div className="Button">
            <button>See More</button>
          </div>
        </div>
      </div>
      <div className="Second-Main">
        <div className="Second-Titles">
          <p>Optimization Of Productivity</p>
          <p>Comprehensive Project Management Services</p>
        </div>
        <div className="New-Second-Main-Second">
          <div className="Competences">
            <div className="info-section">
              <p>Services From A To Z</p>
              <p>
                Complete project management services, from design to
                maintenance. Hassle-free renewable energy solutions.
              </p>
            </div>
            <div className="info-section">
              <p>REGULATORY CONFORMITY</p>
              <p>
                Navigate the complexity of renewable energy regulations. Ensure
                legal compliance and security standards.
              </p>
            </div>
            <div className="info-section">
              <p>TRANSPARENT COMMUNICATION</p>
              <p>
                Maintain clear and transparent communication throughout the
                project. Build customer trust and satisfaction
              </p>
            </div>
          </div>

          <div className="Second-Main-second">
            <div className="Second-Main-Title">
              <p>For More Details</p>
            </div>
            <div className="Second-Main-Paragraph">
              <p>
                If you have any questions or need clarification, please do not
                hesitate to contact us at Eaneer. We are here to help you.
              </p>
            </div>
            <hr />
            <div className="footer">
              <p>Contact Eaneer for Innovative Electrical Solutions</p>
            </div>
            <div className="Button">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Third-Main">
        <div className="Third-Main-Container">
          <div className="Sub-Third-Main-Container">
            <div className="Third-Main-Titles">
              <p>Your Perfect Partner For Latest And Efficient Technologies</p>
              <h2>
                Save Money, Expedite Projects, And Achieve Sustainability With
                eaneer's Electrical Solutions
              </h2>
            </div>
          </div>
          <div className="Third-Main-Style">
            <div className="Props">
              <div className="Props-Title">
                <p>Sustainability</p>
                <h3> DISTRIBUTION AND INSTALLATION</h3>
              </div>
              <div className="Props-Content">
                <p>
                  eaneer ensures durable and rapid installations, guaranteeing
                  long-term savings for our customers
                </p>
              </div>
            </div>
            <div className="Props">
              <div className="Props-Title">
                <p>Speed</p>
                <h3>AUTOMATING</h3>
              </div>
              <div className="Props-Content">
                <p>
                  eaneer excels at speed, delivering efficient and sustainable
                  automated solutions for our customers.
                </p>
              </div>
            </div>
            <div className="Props">
              <div className="Props-Title">
                <p>Economize</p>
                <h3>ENERGY</h3>
              </div>
              <div className="Props-Content">
                <p>
                  eaneer energy expertise for sustainable and efficient savings.
                </p>
              </div>
            </div>
          </div>
          <div className="Board">
            <div className="Board-Titles">
              <p>For Electrical Peace Of Mind</p>
              <p>Discover eaneer Subscription Places</p>
              <p className="Inter-font">
                No matter which plan you choose, you can rely on our team of
                experts to take care of your electrical system, leaving you free
                to focus on what matters most to you
              </p>
            </div>
            <div className="Sub-Board1">
              <div className="Board-Title">
                <p>eaneer shield</p>
              </div>
              <div className="Board-Title-Bold">
                <h3>
                  eaneer Shield is more than just an electrical service;
                  it&apos;s your shield against unexpected electrical
                  emergencies
                </h3>
              </div>
              <div className="Board-Content">
                <p>
                  Introducing Eaneer Shield - your comprehensive solution for
                  electrical security and peace of mind. From regular
                  maintenance to rapid response during emergencies, we&apos;ve
                  got you covered 24/7. Starting at just 50MAD, our plans are
                  tailored to fit your needs and budget. Say goodbye to
                  electrical worries and hello to uninterrupted power with
                  Eaneer Shield.
                </p>
              </div>
              <div className="Board-Button">
                <button>See More</button>
              </div>
            </div>
            <div className="Sub-Board1">
              <div className="Board-Title">
                <p>eaneer Solar</p>
              </div>
              <div className="Board-Title-Bold">
                <h3>
                  Unlock the power of solar energy with Eaneer Solar -
                  Sustainable solutions for a brighter tomorrow.
                </h3>
              </div>
              <div className="Board-Content">
                <p>
                  Introducing Eaneer Solar - where you pay only for the energy
                  you consume, at an unbeatable starting price of just 0.5MAD
                  per kWh. Say goodbye to high energy bills and hello to
                  sustainable, affordable power with Eaneer Solar.
                </p>
              </div>
              <div className="Board-Button">
                <button>See More</button>
              </div>
            </div>
            <div className="Board-Footer">
              <p>Trust Eaneer for uncompromising electrical peace of mind</p>
            </div>
          </div>
          <div className="Fourth-Main">
            <div className="Fourth-Main1">
              <p>Contact Us Today</p>
              <p className="content">Have questions about our</p>
              <p className="content">services or ready to start</p>
              <p className="content">your project?</p>
            </div>
            <div className="Fourth-Main2">
              <input type="text" placeholder="Type Your Email" />
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
