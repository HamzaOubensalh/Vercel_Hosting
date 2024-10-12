import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import "./page.css";
import { adresse_contact } from "@/Assets/Assets";
import { telephone_contact } from "@/Assets/Assets";
import { email_contact } from "@/Assets/Assets";
import { linkedin } from "@/Assets/Assets";
import { facebook } from "@/Assets/Assets";
import { tiktok } from "@/Assets/Assets";
import { instagram } from "@/Assets/Assets";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="Main-Container">
      <Header />
      <div className="Holder-Main-Container">
        <div className="First-Holder">
          <p>Contact</p>
          <p>Get In Touch</p>
          <p>
            Get in touch with Eaneer for all your electrical needs. Let's spark
            innovation together!
          </p>
          <p>Reach out today.</p>
        </div>
      </div>
      <div className="Second-Holder">
        <div className="Second-Holder-Content">
          <div className="First-Content">
            <div className="First-Content-Titles">
              <p>Contact Us</p>
              <p>
                Contact Eaneer for any inquiries, quotes, or collaboration
                requests. Our team is available to answer your questions and
                assist you with your electrical projects.
              </p>
            </div>
            <div className="First-Content-Info-Contact">
              <div className="First-Info">
                <Image
                  src={adresse_contact}
                  alt={"Adresse_Of_Company"}
                  height={31}
                  width={32}
                ></Image>
                <div className="First-Info-Content">
                  <p>Address</p>
                  <p>Technopark, casablanca</p>
                </div>
              </div>
              <div className="Second-Info">
                <Image
                  src={telephone_contact}
                  alt={"Telephone_Number_Of_Company"}
                  height={31}
                  width={32}
                ></Image>
                <div className="Second-Info-Content">
                  <p>Phone Number</p>
                  <p>00212770181715</p>
                </div>
              </div>
              <div className="Third-Info">
                <Image
                  src={email_contact}
                  alt={"Email_Of_Company"}
                  height={31}
                  width={32}
                ></Image>
                <div className="Third-Info-Content">
                  <p>E-mail</p>
                  <p>contact@eaneer.com</p>
                </div>
              </div>
            </div>
            <div className="First-Content-Footer">
              <p>We Can Help You Achieve Your Energy And Electricity Goals.</p>
            </div>
          </div>
          <div className="Second-Content">
            <div className="Form">
              <div className="Second-Content-Title">
                <p>Send A Message</p>
              </div>
              <form action="">
                <input type="text" placeholder="Name" />
                <br />
                <input type="text" placeholder="E-Mail Adresse" />
                <br />
                <textarea name="" id="" placeholder="Message"></textarea>
                <br />
                <div className="Submit-Button">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="Social-Media-Icons">
          <div className="Social-Media-Icons-Content">
            <Image src={linkedin} alt={""} height={26} width={26}></Image>
            <Image src={facebook} alt={""} height={26} width={26}></Image>
            <Image src={instagram} alt={""} height={26} width={26}></Image>
            <Image src={tiktok} alt={""} height={26} width={26}></Image>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
