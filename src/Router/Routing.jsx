import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Container/Home.jsx';
import DesignerVillas from '../Container/DesignerVillas.jsx';
import DesignerVi from '../Container/DesignerVi.jsx';
import VillasInfo from '../Container/VillasInfo.jsx';
import LiveProject from '../Container/LiveProject.jsx';
import { LivePageInfo , CompletePageInfo } from '../Container/LivePageInfo.jsx';
import CompleteProject from '../Container/CompletedProjects.jsx';
import WhyUs from '../Container/WhyUs.jsx';
import AddContentInFile from '../Container/AddContentInFile.jsx';
import Blog from '../Container/Blog.jsx';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/designer-villas" element={<DesignerVi />} />
        <Route path="/mulberry-art" element={<DesignerVillas />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/mulberry-art/:info" element={<VillasInfo />} />
        <Route path="/complete-projects" element={<CompleteProject />} />
        <Route path="/completed-projects/:info" element={<CompletePageInfo />} />
        <Route path="/live-projects" element={<LiveProject />} />
        <Route path="/live-projects/:info" element={<LivePageInfo />} />
        <Route path="/AddContentInFile" element={<AddContentInFile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
