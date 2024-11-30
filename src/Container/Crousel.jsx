import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Crousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/hdr-6-of-6.webp"
          alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/hdr-2-of-4.webp"
          alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/hdr-1-of-8.webp"
          alt="third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/2-1.webp"
          alt="fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/6-1.webp"
          alt="fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/hdr-7-of-8-1.webp"
          alt="sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://mulberryprefab.com/wp-content/uploads/2024/02/14-1.webp"
          alt="seventh slide" />
      </Carousel.Item>
    </Carousel>
  );
}


export const Crousel1 = ({img1, img2 ,img3 , img4 , img5}) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img1}
          alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img2}
          alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img3}
          alt="third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img4}
          alt="fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img5}
          alt="fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

