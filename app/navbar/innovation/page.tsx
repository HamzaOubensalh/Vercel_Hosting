import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import { mask_group_22 } from "@/Assets/Assets";
import { component23 } from "@/Assets/Assets";
import Image from "next/image";
import "./page.css";

const Innovation = () => {
  return (
    <div className="Main-Innovation">
      <Header />
      <div className="Main-Innovation-Titles">
        <p></p>
        <p></p>
        <p>Innovation</p>
        <p>Innovation at eaneer</p>
        <p>Transforming Ideas Into Sustainable Solutions</p>
      </div>
      <div className="Main-Innovation-Main1">
        <Image className="image-1" src={mask_group_22} height={507}></Image>
      </div>
      <div className="Main-Innovation-Main2">
        <Image
          className="image-2"
          src={component23}
          height={75.07}
          width={67.54}
        ></Image>
      </div>
      <div className="Main-Innovation-Main3">
        <div className="Main-Innovation-Main3-Title">
          <p>Our Innovative Solutions</p>
        </div>
        <div className="Main-Innovation-Main3-Content">
          <div className="Item">
            <p>Smart Energy Systems</p>
            <p>
              From solar power integration to advanced energy storage, eaneer
              provides innovative energy solutions that reduce dependency on
              fossil fuels and optimize power consumption for a sustainable
              future.
            </p>
          </div>
          <div className="Item">
            <p>Automation for Efficiency</p>
            <p>
              eaneer’s automation solutions are transforming industries and
              agriculture by streamlining processes, enhancing productivity, and
              improving precision. Our technologies are designed to drive
              efficiency while reducing environmental footprints.
            </p>
          </div>
          <div className="Item">
            <p>Connected Solutions</p>
            <p>
              Our connected solutions enable real-time monitoring, predictive
              maintenance, and optimization across industries. Whether in
              industrial settings or modern greenhouses, our IoT-enabled systems
              offer unparalleled control and insights.
            </p>
          </div>
          <div className="Item">
            <p>Innovating for Tomorrow</p>
            <p>
              At eaneer, we don’t just create products—we engineer the future.
              Our innovation pipeline focuses on addressing global challenges
              like climate change, energy scarcity, and sustainable growth,
              ensuring that we continue to deliver impactful, forward-thinking
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="Main-Innovation-Main3">
        <div className="Main-Innovation-Main3-Title">
          <p>Our Innovative Solutions</p>
        </div>
        <div className="Main-Innovation-Main3-Content">
          <div className="Item">
            <p>Future-Focused Technology</p>
            <p>
              We are committed to developing technologies that not only meet
              today’s needs but also anticipate the challenges of tomorrow. From
              smart energy systems to automation in agriculture and industrial
              solutions, we innovate to provide sustainable, scalable, and
              efficient products.
            </p>
          </div>
          <div className="Item">
            <p>Sustainability at the Core</p>
            <p>
              eaneer’s innovations are designed to foster a greener future. Our
              R&D focuses on energy efficiency, reducing environmental impact,
              and maximizing the use of renewable resources. We aim to
              decarbonize industries while ensuring economic growth and
              environmental preservation.
            </p>
          </div>
          <div className="Item">
            <p>Collaborative Ecosystem</p>
            <p>
              Innovation thrives through collaboration. We partner with
              universities, research institutions, and industry leaders to
              co-develop breakthrough technologies. Together, we explore new
              horizons in electrification, automation, and sustainable energy
              solutions.
            </p>
          </div>
          <div className="Item">
            <p>Digital Transformation</p>
            <p>
              eneer leverages digital tools and IoT technology to bring
              intelligence and connectivity into every aspect of our products
              and services. Through data-driven insights and real-time
              monitoring, we empower customers to make informed, efficient
              decisions that drive operational success.
            </p>
          </div>
          <div className="icon">
            <Image src={component23} height={37.6} width={33.83}></Image>
          </div>
        </div>
      </div>
      <div className="Main-Innovation-Main4">
        <p>
          Innovation is more than just a goal—it’s the driving force behind
          everything we do. As a new player in electrification, automation, and
          green energy, we are pushing the boundaries of what’s possible to
          create cutting-edge solutions that benefit our customers and the
          planet.
        </p>
      </div>
      <div className="Fourth-Main">
        <div className="Fourth-Main1">
          <p>Contact Us Today</p>
          <p className="content">
            Have questions about our services or ready to start your project?{" "}
          </p>
        </div>
        <div className="Fourth-Main2">
          <input type="text" placeholder="Type Your Email" />
          <button>Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Innovation;
