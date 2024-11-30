import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import mulberryArt from '../FileFolders/mulberryArt'
import { Footer1 } from './Footer'
const DesignerVillas = () => {
  return (
    <>
      <Navbar />

      <div id='video' style={{marginBottom:"2vh"}}>
        <img className='video' src="https://mulberryprefab.com/wp-content/uploads/2024/04/Enscape_2022-12-02-14-51-06.webp" alt="preview" />
      </div>

      <h1 className='fontStyleSpecial' style={{ fontSize: '8vw', padding: "4vh 4vw 1vh" }}>Mulberry Art</h1>

      <div className="container py-2 my-2 d-flex align-items-center flex-column">
        <div className="d-flex w-100 p-3  flex-wrap justify-content-evenly">
          {mulberryArt.map((curelem) => {
            return (
              <div className="ds_img my-4" key={curelem.id}>
                <a href={`/mulberry-art/${curelem.id}`} className='a_img'><img className='img_hover img' src={curelem.img_link} alt="" /></a>
                <h4 className='title p-2 mb-0'>{curelem.title}</h4>
              </div>
            );
          })}
        </div>
       <a href="/AddContentInFile"><button className="button">You can Add More villas</button></a>
      </div>

      <Footer1 />
    </>
  )
}

export default DesignerVillas;
