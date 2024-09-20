"use client";

import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import './page.css';
import Image from "next/image";
import { partners_image, component23 } from "@/Assets/Assets";
import { useState, useEffect } from "react";

const Partners = () => {
    const [display, setDisplay] = useState(false);
    const [content, setContent] = useState<JSX.Element | null>(null);
    const [extraClass, setExtraClass] = useState('');

    useEffect(() => {
        const menuItems = document.querySelectorAll<HTMLLIElement>('#menu li');

        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                menuItems.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Cleanup event listeners on component unmount
        return () => {
            menuItems.forEach(item => {
                item.removeEventListener('click', () => {});
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
                    {/* Your content */}
                </div>
            );
            setDisplay(true);
        } else if (element.classList.contains("Distributors")) {
            setContent(
                <div className="services-content-partner">
                    {/* Your content */}
                </div>
            );
            setDisplay(true);
        } else if (element.classList.contains("Contractors")) {
            setContent(
                <div className="services-content-partner">
                    {/* Your content */}
                </div>
            );
            setDisplay(true);
        } else if (element.classList.contains("Engineers")) {
            setContent(
                <div className="services-content-partner">
                    {/* Your content */}
                </div>
            );
            setDisplay(true);
        } else if (element.classList.contains("Property_Managers")) {
            setContent(
                <div className="services-content-partner">
                    {/* Your content */}
                </div>
            );
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
                    <Image className="Partners-Image" src={partners_image} alt={""} height={609} />
                </div>
                <div className="Main-Partners-Content2">
                    <div className="Content2-Titles">
                        <p>Are you a business or organization looking to collaborate with a leader in sustainable energy solutions? Partner with Eaneer and together</p>
                        <p>Why Partner With Us:</p>
                    </div>
                    <div className="Content2-Cards">
                        <div className="Card1">
                            <p>Innovative Solutions:</p>
                            <p>Access cutting-edge technology and innovative solutions developed by Eaneer's team of experts.</p>
                        </div>
                        <div className="Card2">
                            <p>Market Leadership:</p>
                            <p>Partner with a recognized leader in the industry, trusted by clients worldwide for our quality and reliability.</p>
                        </div>
                        <div className="Card3">
                            <p>Shared Values:</p>
                            <p>Align your brand with our commitment to sustainability and environmental stewardship.</p>
                        </div>
                        <div className="Card4">
                            <p>Collaborative Approach:</p>
                            <p>Benefit from our collaborative approach to partnerships, tailored to meet your unique needs and objectives.</p>
                        </div>
                        <div className="Card5">
                            <p>Mutual Growth:</p>
                            <p>Grow your business alongside ours, leveraging our expertise and resources to achieve mutual success.</p>
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
                            <p>Join our reseller program and distribute Eaneer's products and solutions to your customers</p>
                        </div>
                        <div className="Content-Card2">
                            <p>Technology Partnerships</p>
                            <p>Collaborate with us to integrate your technology with ours, driving innovation and enhancing product offerings.</p>
                        </div>
                        <div className="Content-Card3">
                            <p>Strategic Alliances</p>
                            <p>Forge strategic alliances with Eaneer to explore new markets, expand your reach, and drive growth.</p>
                        </div>
                    </div>
                    <div className="Main-Partners-Content3-Footer">
                        <p>Partner with Eaneer and unlock new opportunities for growth, innovation,</p>
                        <p>and success. Let's work together to build a cleaner, more sustainable</p>
                        <p>future for all.</p>
                    </div>
                </div>
                <div className="Creative_Element">
                    <ul id="menu" className="Creative_Element_Navbar">
                        <li onClick={displayDiv} className='Architects active'>Architects</li>
                        <li onClick={displayDiv} className='Distributors'>Distributors</li>
                        <li onClick={displayDiv} className='Contractors'>Contractors</li>
                        <li onClick={displayDiv} className='Engineers'>Engineers</li>
                        <li onClick={displayDiv} className='Property_Managers'>Property Managers</li>
                    </ul>
                </div>
                <div className={`services-content-1 ${extraClass}`}>
                    {content}
                </div>
                <div className="eaneer_logo">
                    <Image src={component23} width={33.83} height={37.6} alt={"Eaneer_Logo"} />
                </div>
                <div className="Fourth-Main">
                    <div className="Fourth-Main1">
                        <p>Contact Us Today</p>
                        <p className="content">Have questions about our services or ready to start your project?</p>
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
