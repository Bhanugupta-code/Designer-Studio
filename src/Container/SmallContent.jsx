import React from 'react'
import './Home.css'

export const SmallContent = ({ title, descr ,link}) => {
    return (
        <div className="showstyleText">
            <h1 className='fontStyle'>{title}</h1>
            <h1 className='fontStyleSpecial'>{descr}</h1>
           <a href={link}><button className='button'>Know more</button></a>
            </div>
    )
};

export const SmallContent1 = ({ title, descr , link}) => {
    return (
        <div className="container showstyleText">
            <h1 className='fontStyleSpecial'>{title}</h1>
            <h1 className='fonttext text-center'>{descr}</h1>
           <a href={link}><button className='button'>Know more</button></a>
        </div>
    )
};

const SmallIcon = ({ title, descr, img_src }) => {
    return (
        <div className="small_log px-4 py-4 ">
            <div className="flex-column d-flex">
                <img className='mx-auto' src={img_src} alt={title || "icon"} width={100} height={100} />
                <h4 className='fs-4 text-center text-dark-emphasis fw-light'>{title}</h4>
                <h5 className='fs-6 text-center text-dark-emphasis fw-light f'>{descr}</h5>
            </div>
        </div>
    );
};

export const SmallContent2 = ({ title, descr , link }) => {
    return (
        <div id='About' className="showstyleText">
            <h1 className="fontStyleSpecial">{title}</h1>
            <h2 className="fonttext text-center">{descr}</h2>
            <div className="container small_icons">
                <SmallIcon
                    img_src="https://mulberryprefab.com/wp-content/uploads/2022/03/State-of-the-art.png"
                    title="STATE OF THE ART"
                    descr="Customized out-of-the-box designs. Faster construction."
                />
                <SmallIcon
                    img_src="https://mulberryprefab.com/wp-content/uploads/2022/03/Convinient.png"
                    title="CONVENIENT"
                    descr="Easy installation Transport anywhere in India Any Terrain Living."
                />
                <SmallIcon
                    img_src="https://mulberryprefab.com/wp-content/uploads/2022/03/Green-Living.png"
                    title="GREEN LIVING"
                    descr="Sustainable, Pro-Health construction."
                />
                <SmallIcon
                    img_src="https://mulberryprefab.com/wp-content/uploads/2022/03/futuristic.png"
                    title="FUTURISTIC"
                    descr="Concept to Key Better ROI."
                />
                <SmallIcon
                    img_src="https://mulberryprefab.com/wp-content/uploads/2022/03/International-standards.png"
                    title="INTERNATIONAL STANDARDS"
                    descr="Touch free (CNC) manufacturing Blemish less finishing , Finest accessories."
                />
                <SmallIcon
                    img_src="https://mulberryprefab.com/wp-content/uploads/2022/03/Built-to-last.png"
                    title="BUILT TO LAST"
                    descr="Precision engineering, Stronger than RCC structures."
                />
            </div>
            <a href={link}><button className='button'>Know more</button></a>

        </div>
    );
};
export const SmallContent3 = ({ title1, descr1, descr2, title2, title3 }) => {
    return (
        <div className="showstyleText container">
            <h1 className='fontStyleSpecial'>{title1}</h1>
            <p className='fonttext mb-0 pb-0'>{descr1}</p>
            <p className='fonttext mb-0 pb-0'>{descr2}</p>
            <button className='button mt-4 mb-5'>Know more</button>
            <h1 className='fontStyleSpecial'>{title2}</h1>
            <h1 className='fontStyleSpecial'>{title3}</h1>
        </div>
    )
};


export const SmallContent4 = ({ title, descr, img_src ,page_link }) => {
    return (
        <div className="small_log w-100 w-lg-50 w-xl-50 w-xxl-50 ">
            <div className="flex-column align-items-center py-3 my-3 d-flex mx-auto">
                <h4 className='fontStyleSpecial pt-2 mt-4'>{title}</h4>
                <p className='fontStyle text-dark-emphasis p-1'>{descr}</p>
                <a href={page_link}><button className="button">Know more</button></a>
            </div>
        </div>
    );
};