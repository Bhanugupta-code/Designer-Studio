import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Crousel1 } from './Crousel';
import Navbar from './Navbar';
import { Footer1 } from './Footer';
import LiveProjectsData from '../FileFolders/LiveProjectsData';
import CompleteProjectsData from '../FileFolders/CompleteProjectsData';

export const LivePageInfo = () => {
    const [info, setInfo] = useState(null);
    const { info: liveProjectId } = useParams();

    useEffect(() => {
        const loadInfo = () => {
            const updatedData = LiveProjectsData.find(
                (item) => String(item.id) === String(liveProjectId)
            );
            setInfo(updatedData || null);
            console.log(updatedData);
        };

        loadInfo();
    }, [liveProjectId]);

    return (
        <>
            <Navbar />
            {info ? (
                <>
                <div className='mt-5' style={{width:"100%", height:"80vh"}}>
                    <Crousel1
                        img1={info.img1}
                        img2={info.img2}
                        img3={info.img3}
                        img4={info.img4}
                        img5={info.img5}
                    />
                        </div>
                    <h1
                        className="fontStyleSpecial py-5 my-5"
                        style={{ fontSize: "80px" }}
                    >
                        {info.title}
                    </h1>
                    </>
            ) : (
                <h1>{liveProjectId ? "Loading..." : "Project not found"}</h1>
            )}
            <Footer1 />
        </>
    );
};

export const CompletePageInfo = () => {
    const [info, setInfo] = useState(null);
    const { info: completeProjectId } = useParams();

    useEffect(() => {
        const loadInfo = () => {
            const updatedData = CompleteProjectsData.find(
                (item) => String(item.id) === String(completeProjectId)
            );
            setInfo(updatedData || null);
            console.log(updatedData);
        };

        loadInfo();
    }, [completeProjectId]);

    return (
        <>
            <Navbar />
            {info ? (
                <>
                <div style={{width:"100%", height:"80vh"}}>
                    <Crousel1
                        img1={info.img1}
                        img2={info.img2}
                        img3={info.img3}
                        img4={info.img4}
                        img5={info.img5}
                    />
                        </div>
                    <h1
                        className="fontStyleSpecial py-5 my-5"
                        style={{ fontSize: "80px" }}
                    >
                        {info.title}
                    </h1>
                    </>
            ) : (
                <h1>{completeProjectId ? "Loading..." : "Project not found"}</h1>
            )}
            <Footer1 />
        </>
    );
};
