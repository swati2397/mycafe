import { useState, useEffect, useRef } from 'react';
import myVideo from '../assets/menu.mp4';
import '../styles/menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null); 
  const [videoVisible, setVideoVisible] = useState(true); 
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            videoRef.current?.play().catch(err => {
              console.log("Autoplay failed:", err);
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const menuItems = {
    coffee: [
      { name: 'Espresso', price: '₹130.50', description: 'Strong and concentrated coffee shot' },
      { name: 'Cappuccino', price: '₹150.50', description: 'Espresso with steamed milk and foam' },
      { name: 'Latte', price: '₹140.75', description: 'Espresso with steamed milk' },
      { name: 'Americano', price: '₹130.75', description: 'Espresso diluted with hot water' },
      { name: 'Mocha', price: '₹150.00', description: 'Espresso with chocolate and steamed milk' },
    ],
    pastries: [
      { name: 'Croissant', price: '₹130.50', description: 'Buttery, flaky pastry' },
      { name: 'Chocolate Muffin', price: '₹140.00', description: 'Rich chocolate muffin with chocolate chips' },
      { name: 'Cinnamon Roll', price: '₹140.50', description: 'Sweet roll with cinnamon and frosting' },
      { name: 'Blueberry Scone', price: '₹130.75', description: 'Buttery scone with fresh blueberries' },
      { name: 'Almond Danish', price: '₹140.25', description: 'Flaky pastry with almond filling' },
    ],
    lunch: [
      { name: 'Avocado Toast', price: '₹180.50', description: 'Sourdough bread with avocado, radish, and microgreens' },
      { name: 'Caprese Sandwich', price: '₹190.00', description: 'Tomato, mozzarella, and basil on ciabatta' },
      { name: 'Quinoa Salad', price: '₹300.00', description: 'Mixed greens, quinoa, vegetables, and balsamic dressing' },
      { name: 'Chicken Wrap', price: '₹190.50', description: 'Grilled chicken, vegetables, and aioli in a wrap' },
      { name: 'Soup of the Day', price: '₹160.00', description: 'Ask about our daily soup special' },
    ]
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVideoVisible(false); 
  };

  return (
    <section id="menu" className="menu" ref={sectionRef}>
      <div className="menu-container">
        <h2>Our Menu</h2>
        
        {videoVisible && (
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="menu-video"
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={myVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="menu-categories">
          <button 
            className={activeCategory === 'coffee' ? 'active' : ''} 
            onClick={() => handleCategoryClick('coffee')}
          >
            Coffee
          </button>
          <button 
            className={activeCategory === 'pastries' ? 'active' : ''} 
            onClick={() => handleCategoryClick('pastries')}
          >
            Pastries
          </button>
          <button 
            className={activeCategory === 'lunch' ? 'active' : ''} 
            onClick={() => handleCategoryClick('lunch')}
          >
            Lunch
          </button>
        </div>
        
        {activeCategory && (
          <div className="menu-items">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
