import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import './page.css';
import CardEmail from "@/Component/CardEmail";


const Support = () => {
    return (
        <div className="Main-Support">
            <Header />
            <div className="Main-Support-Titles">
                <p></p>
                <p></p>
                <p>Support</p>
                <p>We're Here to Help</p>
                <p>Customer Satisfaction Is Our Top Priority. Our Dedicated Support Team Is Ready To Assist You With Any Questions Or Issues You May Have</p>
            </div>
            <div className="Main-Support-Para1">
                <p>Explore our support resources and contact us for personalized assistance.</p>
            </div>
            <div className="Main-Support-Para2">
                <div className="Para2-Titles">
                    <p>Product-Specific Documentation</p>
                    <p>Documentation</p>
                </div>
                <div className="Para2-Divs">
                    <div>
                        <div>
                            <p className="p-Title">Electrical Solutions</p>
                        </div>
                        <div>
                            <p>Find detailed manuals and installation guides for our electrical
                                solutions. From basic setups to advanced configurations.</p>
                        </div>
                        <div>
                            <p>Download Electrical Documentation</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="p-Title">Electrical Solutions</p>
                        </div>
                        <div>
                            <p>Find detailed manuals and installation guides for our electrical
                                solutions. From basic setups to advanced configurations.</p>
                        </div>
                        <div>
                            <p>Download Electrical Documentation</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="p-Title">Electrical Solutions</p>
                        </div>
                        <div>
                            <p>Find detailed manuals and installation guides for our electrical
                                solutions. From basic setups to advanced configurations.</p>
                        </div>
                        <div>
                            <p>Download Electrical Documentation</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="p-Title">Electrical Solutions</p>
                        </div>
                        <div>
                            <p>Find detailed manuals and installation guides for our electrical
                                solutions. From basic setups to advanced configurations.</p>
                        </div>
                        <div>
                            <p>Download Electrical Documentation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main-Support-Main3">
                <div className="Main3-Div1">
                    <div className="Div1-First">
                        <p>Community Forum</p>
                        <p>Join the Discussion</p>
                    </div>
                    <div className="Div1-Second">
                        <p>Connect with other eaneer users in our community forum.
                            Share your experiences, ask questions,
                            and find solutions together. Our community is a great resource for tips,
                            advice, and peer support</p>
                    </div>
                </div>
                <div className="Main3-Div2">
                    <div className="Div2-Form">
                        <form action="">
                            <input type="text" placeholder="Work Email" />
                            <input type="text" placeholder="Company Name" />
                            <input type="text" placeholder="UserName" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="City" />
                            <br />
                            <button>Get Link</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="Main-Support-Main4">
                <p>Contact Support</p>
                <p>Get in Touch</p>
            </div>
            <div className="Main-Support-Main5">
                <p>Our support team is available to help you with any inquiries or technical issues. </p>
            </div>
            <CardEmail />
            <Footer />
        </div>

    )
}
export default Support;