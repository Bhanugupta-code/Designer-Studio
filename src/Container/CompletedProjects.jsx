import React from 'react'
import Navbar from './Navbar';
import CompleteProjectsData from '../FileFolders/CompleteProjectsData';
import { Footer1 } from './Footer';

const CompleteProject = () => {
  return (
    <>
      <Navbar />
      <img style={{width:"100%",marginTop:"70px", height:"80vh"}} src="https://mulberryprefab.com/wp-content/uploads/2024/04/mulberry-t-villa-1.webp" alt="" />
      <h1 className='fontStyleSpecial pt-5 mt-2'>Recently Completed Projects</h1>
     
<div className="d-flex p-3 flex-wrap justify-content-evenly">
          {CompleteProjectsData.map((curelem) => {
            return (
              <div className="ds_img m-2 my-4">
                <a href={`/completed-projects/${curelem.id}`} className='a_img'><img className='img_hover img' src={curelem.main_img} alt="" /></a>
                <h4 className='title p-2 mb-0'>{curelem.title}</h4>
              </div>
            );
          })}
        </div>
        <Footer1 />
    </>
  )
}

export default CompleteProject;
