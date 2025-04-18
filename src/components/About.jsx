import { useEffect, useRef } from 'react';
import aboutVideo from '../assets/aboutbg.mp4';
import '../styles/about.css';

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Aroma Café has been serving the community with the finest
            coffee and homemade pastries for over a decade. What started as a small corner
            shop has grown into a beloved local gathering place.
          </p>
          <p>
            We source our beans directly from ethical farms around the world and roast them
            in-house to ensure the freshest, most flavorful cup every time. Our pastries are
            baked fresh daily using traditional recipes and the highest quality ingredients.
          </p>
        </div>
        <div className="about-image">
          <div className="image-container">
          <video
      src={aboutVideo}
      autoPlay
      loop
      muted
      playsInline
      className="about-video"
    />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;