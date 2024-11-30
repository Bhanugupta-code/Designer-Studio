import React, { useState , useEffect } from 'react'
import Navbar from './Navbar.jsx';
import './Home.css'
import { SmallContent, SmallContent1, SmallContent2, SmallContent3, SmallContent4 } from './SmallContent.jsx';
import {Crousel} from './Crousel.jsx';
import { Footer , Footer1 } from './Footer.jsx'

const Home = () => {
  const [email, setEmail] = useState("");
 const [emailData, setEmailData] = useState([]);
  const emailHandler = () =>{
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
    } 
    else{
      setEmailData((prevData) => [...prevData, email]);
      setEmail("");
      console.log(emailData);
    }
  }

  useEffect(() => {
    localStorage.setItem("EmailData", JSON.stringify(emailData));
  }, [emailData]);

  return (
    <div>
      <Navbar />


      <div id="video">
        <video className='video' preload='auto' src='https://mulberryprefab.com/wp-content/uploads/2022/04/Balinese-Home-page-GIF-8MB.mp4' autoPlay="auto" alt="video tag" />
      </div>

      <SmallContent title="Presenting" descr="The Renaissance In Construction & Design" link="/mulberry-art"/>

      <Crousel />

      <SmallContent1 title="Recently Completed Project" descr="Crafting experiences from emotions, Mulberry is a celebration of the unimaginable possibilities of design" link="/complete-projects"/>

      <SmallContent2 title="Why Mulberry?" descr="How Mulberry is inspiring a renaissance in the world of architecture, construction & design" link="/why-us"/>
      <div className="">
        <div className="section bg1"></div>
        <SmallContent3 title1="Re-Engineering Practices" descr1="Sustainability is at the heart of Mulberry."
          descr2="Everything that goes into making your home has minimal impact on our planet, while delivering unmatched ROI to you." title2="Stop Dreaming!  Start Living!" title3="Products and Services" />
        <div className="section bg2">
        </div>
        <div className="divTwo">
          <SmallContent4 title="Villas" page_link="/designer-villas" descr="Homes that reflect your Quality of Life" />
          <SmallContent4 title="Pods" page_link="" descr="Pods that offer a futuristic style" />
        </div>
        <div className="section bg3"></div>
        <SmallContent1 title="Live Projects" link="/live-projects" descr="Finally, the abode for your creative side." />
        <SmallContent1 title="Re-Designing Lifestyles" descr="Welcome to international living. Experience the finest nuances of every indulgence you have ever wished for. The world’s finest brands, brought together by Mulberry." />
      </div>
      <Footer />
      <h1 className='fontStyleSpecial pt-4 mb-0'>Subscribe to our Newsletter</h1>
      <div className="container justify-content-center gap-4 py-3 d-flex">
        <img src="https://mulberryprefab.com/wp-content/uploads/elementor/thumbs/icons8-email-64-pfrunwjttag1ya6u8icj8osrydrwkx623l00r0zs18.png" alt="" />
        <input className="w-50 px-2 fs-4 border-0 border-bottom border-bottom-3" value={email} type='email' placeholder='Enter the email' onChange={(e) => setEmail(e.target.value)}/>
        <button className='button fontStyleSpecial fs-5' onClick={emailHandler}>Subscribe</button>
      </div>
      <p className='w-75 mx-auto text-dark-emphasis fs-5 my-2 py-2 text-center'>Sign up and be among the first ones to get updates on our new templates and latest design trends, and tips to keep your home up-to-date and functional.</p>
      <img src="https://mulberryprefab.com/wp-content/uploads/2024/04/7.webp" className='footer_img' alt="" />
<Footer1 />

    </div>
  )
}

export default Home;
