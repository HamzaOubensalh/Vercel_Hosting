import Header from "@/Component/Header/header";
import './page.css';
import Image from "next/image";
import { component23, mask_group_16, mask_group_17, mask_group_18, mask_group_19, mask_group_20 } from "@/Assets/Assets";
import Footer from "@/Component/Header/footer";



const Finance = () => {
    return (
        <div className="Main-Finance-Main">
            <Header />
            <div className="Main-Finance-Main1">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p>Finance</p>
                <p>eaneer Investors & Relations</p>
                <p>Invest in Innovation and Sustainability</p>
                <p>Join us in driving the future of innovation, sustainability, and growth across key sectors</p>
            </div>
            <div className="Main-Finance-Main2">
                <Image className="first-image" src={mask_group_16} alt={""} height={524} ></Image>
            </div>
            <div className="Main-Finance-Main3">
                <Image src={component23} alt={""} height={37.6} width={33.83}></Image>
            </div>
            <div className="Main-Finance-Main4">
                <p>eaneer offers a unique opportunity to be part of a
                    forward-thinking company committed to creating
                    long-term value.</p>
            </div>
            <div className="Main-Finance-Main5">
                <div className="Main5-First">
                    <Image className="Main5-image" src={mask_group_17} alt={""} height={414}></Image>
                    <div className="Main5-Content">
                        <div className="Content-Title">
                            <p>Diverse Portfolio</p>
                        </div>
                        <div className="Content-Content">
                            <p>eaneer operates in high-growth sectors including construction,
                                industrial automation, green energy, and agriculture,
                                providing a well-balanced portfolio that mitigates risk
                                and maximizes returns.</p>
                        </div>
                    </div>
                </div>
                <div className="Main5-Second">
                    <Image className="Main5-image" src={mask_group_18} alt={""} height={414}></Image>
                    <div className="Main5-Content">
                        <div className="Content-Title">
                            <p>Proven Financial Performance</p>
                        </div>
                        <div className="Content-Content">
                            <p>With a strong track record of financial growth and stability, eaneer is positioned to deliver consistent returns, supported by our strategic investments in innovation and expansion.</p>
                        </div>
                    </div>

                </div>
                <div className="Main5-Third">
                    <Image className="Main5-image" src={mask_group_19} alt={""} height={414}></Image>
                    <div className="Main5-Content">
                        <div className="Content-Title">
                            <p>Commitment to Sustainability</p>
                        </div>
                        <div className="Content-Content">
                            <p>Invest in a company that prioritizes sustainability. eaneer integrates eco-friendly practices across all operations, ensuring that your investment supports a greener future.</p>
                        </div>
                    </div>
                </div>
                <div className="Main5-Fourth">
                    <Image className="Main5-image" src={mask_group_20} alt={""} height={414}></Image>
                    <div className="Main5-Content">
                        <div className="Content-Title">
                            <p>Transparent Relations</p>
                        </div>
                        <div className="Content-Content">
                            <p>We maintain open communication with our investors, providing regular updates on our financial health, strategic initiatives, and market opportunities, fostering trust and confidence.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main-Finance-Main6">
                <div className="Main-Finance-Main6-Holder">
                    <p>Strategic Growth Areas</p>
                    <p>Investment Opportunities</p>
                    <p>Explore opportunities in our core sectors</p>
                    <div className="Sectors-Div">
                        <div className="First">
                            <div className="image">
                                <Image src={component23} alt={""} height={37.6}></Image>
                            </div>
                            <div className="content">
                                <p>Construction</p>
                                <p>Innovative building solutions</p>
                            </div>
                        </div>
                        <div className="Second">
                            <div className="image">
                                <Image src={component23} alt={""} height={37.6}></Image>
                            </div>
                            <div className="content">
                                <p>Construction</p>
                                <p>Innovative building solutions</p>
                            </div>
                        </div>
                        <div className="Third">
                            <div className="image">
                                <Image src={component23} alt={""} height={37.6}></Image>
                            </div>
                            <div className="content">
                                <p>Construction</p>
                                <p>Innovative building solutions</p>
                            </div>
                        </div>
                        <div className="Fourth">
                            <div className="image">
                                <Image src={component23} alt={""} height={37.6}></Image>
                            </div>
                            <div className="content">
                                <p>Construction</p>
                                <p>Innovative building solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main-Finance-Main7">
                <p>Sustainable Impact</p>
                <p>Investing with eaneer means supporting initiatives that reduce
                    environmental impact, improve energy efficiency, and foster
                    community development.</p>
            </div>
            <div className="Main-Finance-Main8">
                <p>Investor Resources</p>
            </div>
            <div className="Main-Finance-Main9">
                <div className="Main9-Div">
                    <p>Financial Reports</p>
                    <p>Access our latest financial statements,
                        quarterly earnings, and annual reports to
                        stay informed about Eaneer’s financial health
                        and performance.</p>
                </div>
                <div className="Main9-Div">
                    <p>Investor Presentations</p>
                    <p>Download detailed presentations that outline our strategic
                        vision, market positioning, and growth prospects.</p>
                </div>
                <div className="Main9-Div">
                    <p>Corporate Governance</p>
                    <p>Review our corporate governance policies,
                        ensuring Eaneer operates with the highest standards
                        of ethics, transparency, and accountability.</p>
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
            <Footer />
        </div>
    )
}
export default Finance;