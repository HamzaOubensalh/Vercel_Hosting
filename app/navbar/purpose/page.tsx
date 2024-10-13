import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import Image from "next/image";
import {
  Logo_1,
  Logo_2,
  Logo_3,
  mask_group_53,
  mask_group_54,
  mask_group_55,
} from "@/Assets/Assets";
import "./page.css";

const Purpose = () => {
  // console.log(mask_group_53.height)

  return (
    <>
      <Header />
      <div className="Main-Purpose">
        <div className="Main-Purpose-Titles">
          <p></p>
          <p></p>
          <p>Purpose</p>
          <p>
            eaneer strives to deliver top-tier electrical solutions backed by
            extensive technical expertise.
          </p>
        </div>
        <div className="Main-Purpose-Content">
          <div className="Main-Purpose-Content-Sub">
            <p>
              we are driven by innovation, constantly seeking new technologies
              and approaches to revolutionize the electrical engineering
              industry
            </p>
            <p>
              As a company built on a foundation of in-depth technical knowledge
              and a passion for electrical engineering, Eaneer aspires to become
              the leading name in the Moroccan market. Their unwavering
              commitment to quality ensures every project is completed to the
              highest standards.
            </p>
            <div className="eaneer">
              <div className="logo">
                <Image
                  src={Logo_1}
                  width={28.1}
                  height={28.13}
                  alt="Logo_Part"
                ></Image>
                <Image
                  src={Logo_2}
                  width={75.69}
                  height={26.53}
                  alt="Logo_Part"
                ></Image>
                <Image
                  src={Logo_3}
                  width={28.13}
                  height={28.13}
                  alt="Logo_Part"
                ></Image>
              </div>
              <p>eaneer</p>
            </div>
          </div>
        </div>
        <div className="Main-Purpose-Content-2">
          <div className="image">
            <Image
              className="image_1"
              src={mask_group_54}
              height={338}
              alt="image-1"
            ></Image>
          </div>
          <p>
            Our commitment to sustainability is at the core of everything we do.
            We strive to minimize environmental impact and promote renewable
            energy solutions
          </p>
        </div>
        <div className="Main-Purpose-Content-3">
          <p>Powering Innovation, Lighting the Future</p>
        </div>
        <div className="Main-Purpose-Content-2">
          <p>
            Eaneer is dedicated to optimizing energy consumption through
            intelligent solutions and innovative strategies, helping our clients
            reduce costs and carbon footprint
          </p>
          <div className="image">
            <Image
              className="image_1"
              src={mask_group_55}
              height={338}
              alt="image-1"
            ></Image>
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
      <Footer />
    </>
  );
};
export default Purpose;
