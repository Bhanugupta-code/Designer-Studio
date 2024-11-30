import React from 'react'
import { SmallContent2 } from './SmallContent'
import Navbar from './Navbar';
import { Footer1 } from './Footer';

const WhyUs = () => {
    return (
        <>
            <Navbar />

            <img style={{ width: "100%", marginTop: "70px", height: "80vh" }} src="https://mulberryprefab.com/wp-content/uploads/2022/04/WHY-MULBERRY-1920X1080.jpg" alt="" />

            <SmallContent2 title="Why Mulberry?" descr="Your Superior Quality & Healthy Dream Home . Significantly faster than the traditional construction methods." />

            <div className="mt-5 py-5">
                <div className="d-flex">
                    <div className="img" style={{ width: "50%", height: "50%" }}>
                        <img className='w-100 h-100' src="https://mulberryprefab.com/wp-content/uploads/2022/12/BLOG_CONVENIENT.jpg" alt="" />
                    </div>
                    <div style={{ width: "50%" }} className="d-flex p-5 flex-column justify-content-center text-center">
                        <h1 className='fontStyleSpecial'>Convenient</h1>
                        <p className='fontStyle fs-2 text-dark-emphasis'>Mulberry homes can be transported to any part of the country and installed on any terrain in just a matter of weeks. Simply pick your spot, make a wish, and voila! Your dream home will be ready for you!</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div style={{ width: "50%" }} className="d-flex p-5 flex-column justify-content-center text-center">
                        <h1 className='fontStyleSpecial'>Futuristic</h1>
                        <p className='fontStyle fs-2 text-dark-emphasis'>At Mulberry, we’ll be with you, right through your entire journey. From helping you choose your designer home, to carefully embellishing it, right down to its construction, installation and even welcoming your guests at the housewarming party.</p>
                    </div>
                    <div className="img" style={{ width: "50%", height: "50%" }}>
                        <img className="w-100 h-100" src="https://mulberryprefab.com/wp-content/uploads/2022/12/BLOG_FUTURISTIC.jpg" alt="" />
                    </div>
                </div>

                <div className="d-flex">
                    <div className="img" style={{ width: "50%", height: "50%" }}>
                        <img className="w-100 h-100" src="https://mulberryprefab.com/wp-content/uploads/2022/12/BLOG_STATE-OF-ART.jpg" alt="" />
                    </div>
                    <div style={{ width: "50%" }} className="d-flex p-5 flex-column justify-content-center text-center">
                        <h1 className='fontStyleSpecial'>State Of The Art</h1>
                        <p className='fontStyle fs-2 text-dark-emphasis'>When you step into Mulberry World you will be spoilt for choice. Select from our range of out of the box designs or customize them to suit own signature style. Whatever be your choice, rest assured that it will be ready for you in record time.</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div style={{ width: "50%" }} className="d-flex p-5 flex-column justify-content-center text-center">
                        <h1 className='fontStyleSpecial'>International Standards</h1>
                        <p className='fontStyle fs-2 text-dark-emphasis'>At Mulberry, we use touch free (CNC) manufacturing, so no one gets to touch your home but you. We painstakingly select only the finest accessories and bring them alive with blemish less finishing.</p>
                    </div>
                    <div className="img" style={{ width: "50%", height: "50%" }}>
                        <img className="w-100 h-100" src="https://mulberryprefab.com/wp-content/uploads/2022/04/INTERNATIONAL-STANDARDS-855X925.jpg" alt="" />
                    </div>
                </div>

                <div className="d-flex">
                    <div className="img" style={{ width: "50%", height: "50%" }}>
                        <img className="w-100 h-100" src="https://mulberryprefab.com/wp-content/uploads/2022/12/BLOG_CONVENIENT.jpg" alt="" />
                    </div>
                    <div style={{ width: "50%" }} className="d-flex p-5 flex-column justify-content-center text-center">
                        <h1 className='fontStyleSpecial'>Built To Last</h1>
                        <p className='fontStyle fs-2 text-dark-emphasis'>Mulberry is the next generation of design and construction technology Our precision engineering has no equal. This ensures our build is stronger than the best of RCC structures.</p>
                    </div>
                </div>

                <div className="d-flex pb-5">
                    <div style={{ width: "50%" }} className="d-flex p-5 flex-column justify-content-center text-center">
                        <h1 className='fontStyleSpecial'>Green Living</h1>
                        <p className='fontStyle fs-2 text-dark-emphasis'>Sustainability is at the heart of everything we do. From our technology to construction and erection practices, at Mulberry everything is designed to be pro health, delivering unmatched ROI, for you and the planet.</p>
                    </div>
                    <div className="img" style={{ width: "50%", height: "50%" }}>
                        <img className="w-100 h-100" src="https://mulberryprefab.com/wp-content/uploads/2022/04/GREEN-LIVING_-WHY-MULBERRY-855X906.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    )
}

export default WhyUs;
