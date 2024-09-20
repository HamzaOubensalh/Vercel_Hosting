import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import Image from "next/image";
import "./page.css";
import { mask_group_7 } from "@/Assets/Assets";
import { component23 } from "@/Assets/Assets";

const Affiliate = () => {
  return (
    <div className="Main-Affiliate-Div">
      <Header />
      <div className="Affiliate-Title-Div">
        <p></p>
        <p></p>
        <p>Affiliate</p>
        <p>Join eaneer's Affiliate Program</p>
        <p>
          Join Eaneer's Affiliate Program and become a part of our mission to
          revolutionize the energy industry.
        </p>
      </div>
      <div className="Affiliate-Content-Div">
        <Image
          className="Image"
          src={mask_group_7}
          alt={""}
          height={524}
        ></Image>
        <Image src={component23} alt={""} width={33.83} height={37.6}></Image>
      </div>
      <div className="Affiliate-Content2-Div">
        <div className="Sub-Affiliate-Content">
          <div className="Sub-Affiliate-Content-Titles">
            <p>
              Are you passionate about promoting sustainable energy solutions?
            </p>
            <p>How It works:</p>
          </div>
          <div className="Sub-Affiliate-Content-Content">
            <div className="Content-Holder">
              <div>
                <p>Sign Up:</p>
                <p>
                  {" "}
                  Fill out our simple registration form to become an affiliate
                  partner.
                </p>
              </div>
              <div>
                <p>Earn Commissions:</p>
                <p>
                  Earn commissions for every successful referral that leads to a
                  sale on our website.
                </p>
              </div>
              <div>
                <p>Track Your Progress: </p>
                <p>
                  Monitor your performance and earnings through our
                  user-friendly affiliate dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="Sub-Affiliate-Content-Footer">
            <Image
              src={component23}
              alt={""}
              width={33.83}
              height={37.6}
            ></Image>
          </div>
        </div>
      </div>
      <div className="Affiliate-Content3-Div">
        <div className="Affiliate-Content3-Titles">
          <p>Be Our Partner</p>
          <p>Why Partner With Eaneer:</p>
        </div>
        <div className="Affiliate-Content3-Content">
          <div className="Content3-Holder">
            <div>
              <p>High Commissions: </p>
              <p>Earn competitive commissions on every sale you generate.</p>
            </div>
            <div>
              <p>High Commissions: </p>
              <p>Earn competitive commissions on every sale you generate.</p>
            </div>
            <div>
              <p>High Commissions: </p>
              <p>Earn competitive commissions on every sale you generate.</p>
            </div>
          </div>
          <div className="Content3-Holder2">
            <p>Join Us Today:</p>
            <p>
              Join eaneer's Affiliate Program today and start earning
              commissions while promoting a greener, more sustainable future for
              all.
            </p>
          </div>
        </div>
        <div className="Affiliate-Content3-Footer">
          <p>
            Ready to get started? Sign up now and become a part of the Eaneer
            family!
          </p>
        </div>
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
      <hr />
      <Footer />
    </div>
  );
};
export default Affiliate;
