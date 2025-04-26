import { useEffect, useRef } from 'react';
import aromaHeroVideo from '../assets/AROMAHERO.mp4';
import '../styles/hero.css';

const Hero = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    headingRef.current.classList.add('visible');
    buttonRef.current.classList.add('visible');
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <video
        className="hero-video"
        src={aromaHeroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-content">
        <h1 ref={headingRef}>Welcome to <span>Aroma Café</span></h1>  
        {/* <p>Experience the perfect blend of comfort and taste</p> */}
        <button
          ref={buttonRef}
          className="cta-button"
          onClick={scrollToMenu}
        >
          View Our Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;
