import React from 'react'
import Navbar from './Navbar';
import { Footer1 } from './Footer';
const DesignerVi = () => {
    return (
        <>
            <Navbar />

            <img style={{ width: "100%", height: "90vh" }} src="https://mulberryprefab.com/wp-content/uploads/2024/04/Banner-1920X990.webp" alt="" />

            <div className='d-flex align-items-center flex-column pt-5' style={{ marginBottom: "-17px" }}>
                <h1 className='fontStyleSpecial' style={{ fontSize: "70px", padding: "5px 10px", margin: "10px" }}>Designer Villas</h1>
                <h1 className='fontStyleSpecial pt-0 pb-0 mb-0' style={{ fontSize: "50px" }}>Endless Summer Vibes Collection</h1>
                <p className='text-center fs-4 fontStyle mb-0 py-0' style={{ marginTop: "-10px" }}>(A Balinese Style Series)</p>
                <p className='text-dark-emphasis w-50 mx-auto fs-5 p-0 text-center'>Bali, Indonesia is one of the world’s most popular tropical holiday destinations. With influences from the Hindu and Javanese cultures, the architecture of Bali
                    derives its principles from ancient philosophies of a ‘sacred place’.</p>
                <button className='fontStyle button px-3 pointor py-1 rounded'>Read More</button>
            </div>

            <div className="section bg4"></div>

            <div className='d-flex align-items-center flex-column pt-5' style={{ marginBottom: "-17px" }}>
                <h1 className='fontStyleSpecial pt-0 pb-0 mb-0' style={{ fontSize: "50px" }}>Tropical Tints Collection</h1>
                <p className='text-center fs-4 fontStyle mb-0 py-0' style={{ marginTop: "-10px" }}>(A Hawaiian Style Series)</p>
                <p className='text-dark-emphasis w-50 mx-auto p-0 fs-5 text-center'>Lush green forests, panoramic beaches, active volcanoes and breath-taking sunsets are synonymous with the islands of Hawaii. Located in the northern Pacific Ocean,
                    this group of eight islands is a quintessential holiday destination.</p>
                <button className='fontStyle button px-3 py-1 pointor rounded'>Read More</button>
            </div>

            <div className="section bg5"></div>

            <div className='d-flex align-items-center flex-column pt-5' style={{ marginBottom: "-17px" }}>
                <h1 className='fontStyleSpecial pt-0 pb-0 mb-0' style={{ fontSize: "50px" }}>Mediterranean Blues Collection</h1>
                <p className='text-center fs-4 fontStyle mb-0 py-0' style={{ marginTop: "-10px" }}>(A Spanish Style Series)</p>
                <p className='text-dark-emphasis w-50 mx-auto p-0 fs-5 text-center'>Home to some of the world’s most celebrated architectural masterpieces, Spain is a land of art, history and culture. Spanish architecture is known for its beautiful, peculiar design elements – from historic buildings like the Sagrada Familia and modern icons like the Guggenheim Museum.</p>
                <button className='fontStyle button px-3 pointor rounded'>Read More</button>
            </div>

            <div className="section bg6"></div>

            <Footer1 />

        </>
    )
}

export default DesignerVi;
