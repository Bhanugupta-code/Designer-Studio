import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Footer1 } from "./Footer";
 import blogData from "../FileFolders/Blogdata";
const Blog = () => {
  return (
    <div>
        <Navbar />
      <header className="bg-light text-center py-5 mt-5">
        <div className="container">
          <h1 className="display-4 fontStyleSpecial">Elegant Villas & Luxury Pods</h1>
          <p className="lead">
            Explore breathtaking designs and cutting-edge architecture.
          </p>
        </div>
      </header>
      <section className="container my-5">
        <div className="row">
          {blogData.map((item) => (
            <div className="col-lg-4  col-md-6 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title ">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer1 />
    </div>
  );
};

export default Blog;
