import React from 'react';
import '../css/Work.css';

const Work = () => {
  return (
    <section className="work-container">
      <video autoPlay loop muted className="work-video">
        <source src="https://res.cloudinary.com/dcbyjmsdq/video/upload/v1729232395/short-reel-2023_qiriu5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="work-overlay">
      </div>
      <div className="work-content">
        <h2>Play Our Reel</h2>
      </div>
    </section>
  );
};

export default Work;
