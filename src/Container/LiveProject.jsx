import React from 'react'
import Navbar from './Navbar';
import LiveProjectsData from '../FileFolders/LiveProjectsData';
import { Footer1 } from './Footer';

const LiveProject = () => {
  return (
    <>
      <Navbar />
      <img style={{width:"100%",marginTop:"70px", height:"80vh"}} src="https://mulberryprefab.com/wp-content/uploads/2024/04/08-de-arte-1.webp" alt="" />
      <h1 className='fontStyleSpecial pt-5 mt-2'>Live Projects</h1>
      <p style={{fontSize:"20px", lineHeight:"40px"}} className="text-center w-75 mx-auto text-dark emphasis">Now you can unleash your creative side in an exclusive Mulberry villa at Karjat. Brought to you in association with Forest by the Hills, Mulberry offers you a range of incomparable signature villas that are uniquely designed to stimulate your creative energies and help you connect with the inner you.</p>
      <p style={{fontSize:"20px", lineHeight:"40px"}} className="text-center w-75 mx-auto text-dark emphasis">Each of the five themes that we offer have been carefully curated to resonate with different personality styles. Celebrate your individuality, touch your vibrant energy. Rejuvenate, reconnect, recharge. It’s the place you’ve been longing for.
All our villas come fully furnished with a guaranteed date of delivery and attached to a 1-acre plot of land.</p>

<div className="d-flex p-3 flex-wrap justify-content-evenly">
          {LiveProjectsData.map((curelem) => {
            return (
              <div className="ds_img m-2 my-4">
                <a href={`/live-projects/${curelem.id}`} className='a_img'><img className='img_hover img' src={curelem.main_img} alt="" /></a>
                <h4 className='title p-2 mb-0'>{curelem.title}</h4>
              </div>
            );
          })}
        </div>
        <Footer1 />
    </>
  )
}

export default LiveProject;
