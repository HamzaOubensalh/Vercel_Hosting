import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import {
  mask_group_28,
  component23,
  mask_group_29,
  mask_group_30,
  mask_group_31,
  mask_group_32,
} from "@/Assets/Assets";
import Image from "next/image";
import "./page.css";

const Sustainability = () => {
  return (
    <div className="Main-Sustainability">
      <Header />
      <div className="Main-Sustainability-Titles">
        <p></p>
        <p></p>
        <p></p>
        <p>Sustainability</p>
        <p>
          eaneer’s Commitment to Sustainability Building a Greener Future,
          Together
        </p>
        <p>
          Sustainability Isn’t Just A Buzzword—It’s A Core Principle That Drives
          Everything We Do
        </p>
      </div>
      <div className="Main-Sustainability-Main1">
        <Image src={mask_group_28} height={489} alt="image-1"></Image>
      </div>
      <div className="Main-Sustainability-Main2">
        <Image
          src={component23}
          width={67.54}
          height={75.07}
          alt="image-2"
        ></Image>
      </div>
      <div className="Main-Sustainability-Main3">
        <p>eaneer's Vision for Sustainability</p>
        <p>
          we are dedicated to creating a sustainable future for generations to
          come. Join us as we explore the various ways in which Eaneer is making
          a positive impact on the environment and leading the way in
          sustainable business practices.
        </p>
      </div>
      <div className="Main-Sustainability-Main4">
        <div className="Item1">
          <p>Leading with Purpose</p>
          <p>
            contributing to the well-being of the planet while thriving
            economically. Our sustainability vision is centered on three
            pillars: environmental stewardship, social responsibility, and
            economic viability. By integrating these principles into our
            operations, we aim to set new standards for what it means to be a
            responsible and forward-thinking company.
          </p>
        </div>
        <div className="Item2">
          <Image src={mask_group_29} height={472} alt="image-2"></Image>
        </div>
      </div>
      <div className="Main-Sustainability-Main4">
        <div className="Item2">
          <Image src={mask_group_30} height={472} alt="image-2"></Image>
        </div>
        <div className="Item1">
          <p>Leading with Purpose</p>
          <p>
            contributing to the well-being of the planet while thriving
            economically. Our sustainability vision is centered on three
            pillars: environmental stewardship, social responsibility, and
            economic viability. By integrating these principles into our
            operations, we aim to set new standards for what it means to be a
            responsible and forward-thinking company.
          </p>
        </div>
      </div>
      <div className="Main-Sustainability-Main4">
        <div className="Item1">
          <p>Leading with Purpose</p>
          <p>
            contributing to the well-being of the planet while thriving
            economically. Our sustainability vision is centered on three
            pillars: environmental stewardship, social responsibility, and
            economic viability. By integrating these principles into our
            operations, we aim to set new standards for what it means to be a
            responsible and forward-thinking company.
          </p>
        </div>
        <div className="Item2">
          <Image src={mask_group_31} height={472} alt="image-2"></Image>
        </div>
      </div>
      <div className="Main-Sustainability-Main4">
        <div className="Item2">
          <Image src={mask_group_32} height={472} alt="image-2"></Image>
        </div>
        <div className="Item1">
          <p>Leading with Purpose</p>
          <p>
            contributing to the well-being of the planet while thriving
            economically. Our sustainability vision is centered on three
            pillars: environmental stewardship, social responsibility, and
            economic viability. By integrating these principles into our
            operations, we aim to set new standards for what it means to be a
            responsible and forward-thinking company.
          </p>
        </div>
      </div>
      <div className="Main-Sustainability-Main5">
        <div className="Sub1">
          <p>Enabling A More Sustainable And Resource-Efficient Future</p>
        </div>
        <div className="Sub2">
          <p>
            As an emerging leader in electrification and automation, Eaneer is
            committed to accelerating the energy transition from the start.
            Every day, we work alongside our customers globally to help them
            optimize their operations, electrify processes, and reduce their
            carbon footprint, driving the industries of tomorrow.
          </p>
        </div>
        <div className="Sub3">
          <p>
            Our Sustainability Vision is embedded in our foundation, aligned
            with international best practices. We aim to support a low-carbon
            society, conserve resources, and promote social progress for a
            net-zero future. With integrity and transparency guiding every step,
            we ensure our values extend across our growing value chain.
          </p>
        </div>
        <div className="Sub4">
          <p>
            We believe in building a better, sustainable future from the ground
            up.
          </p>
        </div>
      </div>
      <div className="Main-Substainability-Main6">
        <p>Partner with eaneer for a Sustainable Future</p>
        <p>Join Us on Our Sustainability Journey</p>
        <p>
          eaneer is committed to leading the way in sustainable business
          practices, and we invite you to join us on this journey. Whether
          you’re a customer, investor, or partner, your support helps us drive
          positive change and create a better world for all. Together, we can
          build a greener, more sustainable future.
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
export default Sustainability;
