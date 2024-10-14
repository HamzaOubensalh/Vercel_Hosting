import Header from '../../../Component/Header/header';
import Footer from '../../../Component/Header/footer';
import './page.css'
import Image from 'next/image';
import { about_us_image, big_logo1, big_logo2, big_logo3 } from '@/Assets/Assets';
import { about_us_image2 } from '@/Assets/Assets';
import { about_us_image3 } from '@/Assets/Assets';
import { about_us_image4 } from '@/Assets/Assets';
import { component23 } from '@/Assets/Assets';

const AboutUs = () => {
  return (
    <>
      <div className='Main-About-Us'>
        <Header />
        <div className='Main-About-Style'>
          <div className='Second-About-Us'>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>About Us</p>
            <p>Empowering Excellence in Electrical Solutions</p>
            <p>Discover the Ideas Behind eaneer's Commitment to Innovation and Quality</p>
            <p>We're Committed To Pioneering Sustainable Electrical Solutions That Empower Our Clients To Thrive.</p>
          </div>
          <div className='Image-About-Us'>
            <Image className='img1' src={about_us_image} alt={'about_us_image'} height={562} width={1920}></Image>
          </div>
          <div className='Vision-Div'>
            <div className='first-div'>
              <p className='item1'>Our Vision</p>
              <p className='item2'>A Future Powered By Electrical Innovation</p>
              <div className='text-div'>
                <p>At eaneer, we envision a future where innovation and sustainability drive electrical engineering. </p>
                <p>We're dedicated to leveraging cutting-edge technologies in industrial, agricultural, and construction sectors to optimize energy consumption.</p>
                <p>With a strong focus on renewable energy, we're committed to creating a sustainable future for our customers and the planet. </p>
                <p>Join us in shaping a better world.</p>
              </div>
            </div>
            <div className='second-div'>
              <Image src={about_us_image2} alt={''}></Image>

            </div>
          </div>
          <div className='Mission-Div'>
            <div className='first-Mission-Div'>
              <Image src={about_us_image3} alt={''} height={550} width={540}></Image>
            </div>
            <div className='second-Mission-Div'>
              <div className='second-Mission-First'>
                <p>Our Mission</p>
                <p>Creating A Clean Environment Through Green Energy</p>
              </div>
              <div className='second-Mission-Second'>
                <p>At Eaneer, our mission is to promote a cleaner environment through the adoption of renewable energies, including solar panel installations. We're committed to developing innovative solutions to save energy and optimize electrical and industrial systems. </p>
                <p>By prioritizing energy efficiency, we help our clients reduce their environmental footprint while achieving substantial savings on their energy costs. We firmly believe that every small step matters in building a more sustainable future, and our mission is to provide the tools and technologies needed to realize this vision. </p>
                <p>Join us in our commitment to creating a world where clean energy and environmental innovation are at the heart of every project we undertake.</p>
              </div>
            </div>
          </div>
          <div className='Holder-Div'>
            <div className='Join-Div'>
              <div className='Join-Div-First'>
                <div className='Join-Div-Titles'>
                  <p>Careers At eaneer</p>
                  <p>Join our growing team</p>
                </div>
                <div className='Join-Div-Content'>
                  <p>eaneer is home to passionate electrical engineers, innovative thinkers, sustainability advocates, and dedicated professionals. Come join us in shaping a greener and more sustainable future</p>
                </div>
                <div className='Button-Div'>
                  <button className='Button-button'>View Open Positions</button>
                </div>
              </div>
              <div className='Join-Div-Second'>
                <Image src={about_us_image4} alt={''} width={432} height={357}></Image>
              </div>
            </div>
          </div>
          <div className='Holder-Div-2'>
            <div className='First'>
              <div className='Second-Paragraph'>
                <p>Overview</p>
                <p>eaneer Enterprise Profile</p>
                <p>Explore the comprehensive overview of eaneer's vision,
                  mission, and core values. Learn about our innovative
                  solutions and how we are leading the way in electrical,
                  agricultural, industrial, and renewable energy sectors.
                  Discover what makes Eaneer a trusted partner for clients worldwide.</p>
                <p>Download now</p>
              </div>
              <div className='Third_Logo'>
                <Image src={big_logo1} height={45.66} width={45.63} alt='logo_1'></Image>
                <Image src={big_logo2} height={43.06} width={122.91} alt='logo_1'></Image>
                <Image src={big_logo3} height={45.69} width={45.69} alt='logo_1'></Image>
              </div>
            </div>
            <hr />
            <div className='Second'>
              <div className='Second-Paragraph'>
                <p>Overview</p>
                <p>eaneer Enterprise Profile</p>
                <p>Explore the comprehensive overview of eaneer's vision,
                  mission, and core values. Learn about our innovative
                  solutions and how we are leading the way in electrical,
                  agricultural, industrial, and renewable energy sectors.
                  Discover what makes Eaneer a trusted partner for clients worldwide.</p>
                <p>Download now</p>
              </div>
              <div className='Third_Logo'>
                <Image src={big_logo1} height={45.66} width={45.63} alt='logo_1'></Image>
                <Image src={big_logo2} height={43.06} width={122.91} alt='logo_1'></Image>
                <Image src={big_logo3} height={45.69} width={45.69} alt='logo_1'></Image>
              </div>
            </div>
            <hr />
            <div className='Third'>
              <div className='Second-Paragraph'>
                <p>Overview</p>
                <p>eaneer Enterprise Profile</p>
                <p>Explore the comprehensive overview of eaneer's vision,
                  mission, and core values. Learn about our innovative
                  solutions and how we are leading the way in electrical,
                  agricultural, industrial, and renewable energy sectors.
                  Discover what makes Eaneer a trusted partner for clients worldwide.</p>
                <p>Download now</p>
              </div>
              <div className='Third_Logo'>
                <Image src={big_logo1} height={45.66} width={45.63} alt='logo_1'></Image>
                <Image src={big_logo2} height={43.06} width={122.91} alt='logo_1'></Image>
                <Image src={big_logo3} height={45.69} width={45.69} alt='logo_1'></Image>
              </div>
            </div>
            <hr />
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
      </div>
    </>
  );
};

export default AboutUs;
