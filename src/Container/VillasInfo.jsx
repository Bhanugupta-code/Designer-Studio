import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import './Home.css';
import { Footer1 } from './Footer';
import mulberryArt from '../FileFolders/mulberryArt';
import { useParams } from 'react-router-dom';

const VillasInfo = () => {
    const [info, setInfo] = useState(null);
    const { info: villaId } = useParams();
    useEffect(() => {
        const loadInfo = () => {
            console.log(villaId)

            const updatedData = mulberryArt.find((item) => String(item.id) === (villaId));
               setInfo(updatedData );
        };
        loadInfo();
    }, [villaId]);

    if (!info) {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1>Villa information not found</h1>
                </div>
                <Footer1 />
            </div>
        );
    }

    return (
        <div>
            {console.log(info)}
            <Navbar />
            <div id="video" style={{ marginBottom: '2vh' }}>
                <img
                    className="video"
                    src={info.img_link}
                    alt={info.title}
                />
            </div>
            <div className="container py-4 mt-5">
                <h1 className="fontStyleSpecial" style={{ fontSize: '90px', padding: "4vh 4vw 1vh" }}>{info.title}</h1>
                <div className='d-flex my-4 justify-content-evenly text-center'>
                    <div style={{ width: "80vw" }} >
                        <p className="text-dark text-center fs-4">{info.p1}</p>
                        <p className="text-dark text-center fs-4">{info.p2}</p>
                        <p className="text-dark text-center fs-4">{info.p3}</p>
                        <p className="text-dark text-center fs-4">{info.p4}</p>
                    </div>
                    <hr style={{ border: "1px solid black", margin: "2vh 2vw", height: "inherit", width: "1px" }} />
                    <div className='d-flex ms-2 flex-column text-center justify-content-center'>
                        {info.Layout && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Layout</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Layout}</p>
                                <br />
                            </>
                        )}

                        {info.Built_up_Area && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Built up Area</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Built_up_Area}</p>
                                <br />
                            </>
                        )}

                        {info.Deck_Area && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Deck Area</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Deck_Area}</p>
                                <br />
                            </>
                        )}

                        {info.Total_Area && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Total Area</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Total_Area}</p>
                                <br />
                            </>
                        )}

                        {info.Architectural_Style && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Architectural Style</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Architectural_Style}</p>
                                <br />
                            </>
                        )}


                        {info.type && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">{info.type}</h2>
                                <br />
                            </>
                        )}

                        {info.Timeline && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Timeline</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Timeline}</p>
                                <br />
                            </>
                        )}

                        {info.Recommended_Size && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Recommended Size</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Recommended_Size}</p>
                                <br />
                            </>
                        )}

                        {info.Green_Quotient && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Green Quotient</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Green_Quotient}</p>
                                <br />
                            </>
                        )}

                        {info.Durability && (
                            <>
                                <h2 className="text-dark p-0 fw-light m-0">Durability</h2>
                                <p className="fs-5 text-dark-emphasis p-0 fw-light m-0">{info.Durability}</p>
                                <br />
                            </>
                        )}

                    </div>
                </div>
            </div>

            <div className="container pb-5 mb-5">
                <h1 className="fontStyleSpecial" style={{ fontSize: '90px', padding: "4vh 4vw 1vh" }}>Technical Details</h1>
                <div className='d-flex my-4 justify-content-evenly text-center'>
                    <div style={{ width: "80vw"}} >
                      <img style={{width:"100%", height:"100%"}} src={info.technical_details} alt="error" />
                    </div>
                    <div className='d-flex flex-column text-center justify-content-center'>
                     <img src={info.Detail} alt="" />
                    </div>
                </div>
            </div>

            <Footer1 />
        </div>
    );
};

export default VillasInfo;
