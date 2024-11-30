import React from 'react'
import './Home.css'
import img1 from './image/Agree-contract.png'
import img2 from './image/Discover-your-dream.png'
import img3 from './image/Tak-a-design-tour.png'
import { FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="footer w-100 pb-4">
            <div className="px-4 text-center py-4 justify-content-center">
                <h1 className='text-center fontStyleSpecial p-4 mb-3'>6 Steps to Mulberry Living</h1>
                <div className="d-flex align-item-center justify-content-evenly flex-wrap mx-auto">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src="https://mulberryprefab.com/wp-content/uploads/2022/03/site-feasibility.png" width={120} height={120} alt="error" />
                        <span className="fontStyle text-white">Site feasibility</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={img1} width={120} height={120} alt="error" />
                        <span className='fontStyle text-white'>Agree & Contract</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={img2} width={120} height={120} alt="error" />
                        <span className='fontStyle text-white'>Discover your dream</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={img3} width={120} height={120} alt="error" />
                        <span className='fontStyle text-white'>Take a design tour</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src="https://mulberryprefab.com/wp-content/uploads/2022/03/Home-making.png" width={120} height={120} alt="error" />
                        <span className='fontStyle text-white'>Home in the making</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src="https://mulberryprefab.com/wp-content/uploads/2022/03/House-installation.png" width={120} height={120} alt="error" />
                        <span className='fontStyle text-white'>Installation to house warming</span>
                    </div>
                </div>
                <button className='button'>Know more</button>
            </div>
        </div>
    )
}



export const Footer1 = () => {
  return (
    <div id='Footer1' className="d-flex flex-column justify-content-center footer1">
    <div className="mt-1 pt-1 d-flex flex-lg-row flex-column justify-content-evenly align-items-center">
      <div className="width d-flex justify-content-center">
        <span className="text-white fs-3 fontStyle"><a href="/blog">Blog</a></span>
        <span className="text-white fs-3 fontStyle mx-2">+</span>
        <span className="text-white fs-3 fontStyle"><a href="https://mulberryprefab.com/faqs/">FAQ's</a></span>
      </div>
  
      <div className="width1 d-flex align-items-center">
        <span className="text-white fs-6 px-2 fontStyle">Terms & Conditions</span>
        <span className="text-white fs-6 px-2 fontStyle">+</span>
        <span className="text-white fs-6 px-2 fontStyle">Privacy Policies</span>
        <span className="text-white fs-6 px-2 fontStyle">+</span>
        <span className="text-white fs-6 px-2 fontStyle">Disclaimer</span>
      </div>
  
      <div className="width2 d-flex align-items-center">
        <span className="text-white fs-6 px-3 fontStyle"><FaLinkedin style={{color:'#F9D986' , fontSize:'150%'}} /></span>
        <span className="text-white fs-6 px-3 fontStyle"><FaFacebook style={{color:'#F9D986' , fontSize:'150%'}} /></span>
        <span className="text-white fs-6 px-3 fontStyle"><FaWhatsapp style={{color:'#F9D986' , fontSize:'150%'}} /></span>
        <span className="text-white fs-6 px-3 fontStyle"><FaTwitter style={{color:'#F9D986' , fontSize:'150%'}} /></span>
        <span className="text-white fs-6 px-3 fontStyle"><FaInstagram style={{color:'#F9D986' , fontSize:'150%'}} /></span>
      </div>
    </div>
    <div className='container text-white'>
        <hr />
        <p className='p-3 text-center fontStyle fs-6'>Copyright Mulberry, All Rights Reserved.</p>
    </div>

  </div>
  
  
  )
}


