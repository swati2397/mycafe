import { useState, useEffect, useRef } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  
  const images = [
    { url: 'https://i.pinimg.com/originals/c1/ba/2d/c1ba2d2ace4cd7105c8471682ce65eac.jpg', alt: 'Coffee shop interior' },
    { url: 'https://thumbs.dreamstime.com/b/barista-preparing-cappuccino-coffee-machine-coffee-preparation-concept-barista-preparing-cappuccino-coffee-machine-133568057.jpg', alt: 'Barista preparing coffee' },
    { url: 'https://img.freepik.com/premium-photo/coffee-pastries-table-with-cup-coffee_884243-47.jpg', alt: 'Coffee and pastry on a table' },
    { url: 'http://www.infratech-usa.com/wp-content/uploads/infratech-blog-jerrys-feature.jpg', alt: 'Outdoor seating area' },
    { url: 'https://daylighthilliard.com/wp-content/uploads/2021/04/great-coffee-bean.jpeg', alt: 'Coffee beans' },
    { url: 'https://images.squarespace-cdn.com/content/v1/5ebe4d17fa0cb47f52dd2601/bf63362a-b99b-466f-9d21-a648925b9ba3/latte+art.jpeg', alt: 'Latte art' },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery-container">
        <h2>Gallery</h2>
        
        <div className="gallery-slider">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
