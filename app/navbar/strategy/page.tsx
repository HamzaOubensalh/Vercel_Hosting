import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import Image from "next/image";
import './page.css';
import { partners_image } from "@/Assets/Assets";





const strategy=()=>{
    return(
        <div className="Main-Strategy">
            <Header/>
            <div className="Main-Strategy-Titles">
                <p></p>
                <p></p>
                <p>Strategy</p>
                <p>Our Strategy: Driving Sustainable Innovation</p>
                <p>At Eaneer, We Are Committed To Driving Sustainable Innovation In The Field Of Energy Solutions</p>
            </div>
            <div className="Main-Strategy-Content">
                <Image className="Image-Strategy" src={partners_image} alt={""} height={609}></Image>
            </div>
            <div className="Main-Strategy-Content2">
                <div className="Content2-Titles">
                    <p>Our Strategy Serves</p>
                    <p>Our Strategic Approach Is Centered Around Three Core Pillars</p>
                </div>
                <div className="Content2-Content">
                    <div className="Content1">
                        <div>
                            <p>Innovation</p>
                            <p>We prioritize innovation in everything we do, continuously seeking new technologies and approaches to improve energy efficiency and sustainability</p>
                        </div>
                        <div>
                            <p>Collaboration</p>
                            <p>Collaboration is at the heart of our strategy. We work closely with our clients, partners, and industry experts to co-create solutions that address their unique needs and challenges.</p>
                        </div>
                        <div>
                            <p>Impact</p>
                            <p>We measure our success not only by financial metrics but also by the positive impact we have on the environment and society</p>
                        </div>
                    </div>
                    <div className="Content2">
                        <div className="Content2-Title">
                            <p>Our Roadmap to Success</p>
                        </div>
                        <div className="Content2-Content">
                            <p>Our goal is to create lasting change and contribute to a more sustainable future for all.</p>
                        </div>
                        <div className="Content2-Footer">
                            <hr />
                            <p>Contact Eaneer for Innovative Electrical Solutions</p>
                        </div>
                        <div className="Content2-Button">
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main-Strategy-Content3">
                <div className="Content3-Holder">
                    <div className="First-Holder">
                        <p>Key Elements of Our Strategy</p>
                    </div>
                    <div className="Second-Holder">
                        <div className="Second-Holder-Div">
                            <p>High Commissions: </p>
                            <p>Earn competitive commissions on every sale you generate.</p>
                        </div>
                        <div className="Second-Holder-Div">
                            <p>High Commissions: </p>
                            <p>Earn competitive commissions on every sale you generate.</p>
                        </div>
                        <div className="Second-Holder-Div">
                            <p>High Commissions: </p>
                            <p>Earn competitive commissions on every sale you generate.</p>
                        </div>
                    </div>
                    <div className="Third-Holder">
                        <p>Guiding Our Efforts As We Work Towards Our Vision Of A Cleaner, More </p>
                        <p>Sustainable Future.</p>
                    </div>
                </div>
            </div>
            <div className="Fourth-Main">
                    <div className="Fourth-Main1">
                        <p>Contact Us Today</p>
                        <p className="content">Have questions about our services or ready to start your project? </p>
                    </div>
                    <div className="Fourth-Main2">
                        <input type="text" placeholder="Type Your Email" />
                        <button>Get Started</button>
                    </div>
            </div>
            <hr />
            <Footer/>
        </div>


    )
}
export default strategy;
