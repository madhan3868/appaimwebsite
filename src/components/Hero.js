import React, { useRef, useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoSlideRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "Color Matching",
      description: "Advanced AI-powered color matching technology for precise paint formulation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
      category: "Technology"
    },
    {
      id: 2,
      title: "Paint Base Correction",
      description: "Automated base correction system for optimal paint consistency",
      image: "/adam-juman-NxeQUw-mdwk-unsplash.jpg",
      category: "Quality Control"
    },
    {
      id: 3,
      title: "Quality Control",
      description: "Real-time quality monitoring and automated testing protocols",
      image: "/pic-7.jpg",
      category: "Testing"
    },
    {
      id: 4,
      title: "Color Analysis",
      description: "Spectral analysis and color profiling for accurate results",
      image: "/pic-8.jpg",
      category: "Analysis"
    },
    {
      id: 5,
      title: "Digital Dispensing",
      description: "Precision digital dispensing system for consistent formulations",
      image: "/pic-1.jpg",
      category: "Automation"
    },
    {
      id: 6,
      title: "IoT Integration",
      description: "Smart connectivity for real-time monitoring and control",
      image: "/pic-2.jpg",
      category: "Connectivity"
    }
  ];

  const getStep = () => {
    if (!trackRef.current) return 0;
    const firstCard = trackRef.current.querySelector('.feature-card');
    if (!firstCard) return 0;
    const style = window.getComputedStyle(trackRef.current);
    const gap = parseInt(style.columnGap || style.gap || '30', 10) || 30;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const scrollByStep = useCallback((direction) => {
    const step = getStep();
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
  }, []);

  const updateButtons = useCallback(() => {
    if (!trackRef.current) return;
    const maxScrollLeft = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    const scrollLeft = trackRef.current.scrollLeft;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScrollLeft - 1);
    
    // Update current slide based on scroll position
    const step = getStep();
    if (step > 0) {
      const newSlide = Math.round(scrollLeft / step);
      setCurrentSlide(newSlide);
    }
  }, []);

  const goToSlide = useCallback((slideIndex) => {
    if (!trackRef.current) return;
    const step = getStep();
    trackRef.current.scrollTo({ left: slideIndex * step, behavior: 'smooth' });
    setCurrentSlide(slideIndex);
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % features.length;
    goToSlide(nextIndex);
  }, [currentSlide, features.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentSlide === 0 ? features.length - 1 : currentSlide - 1;
    goToSlide(prevIndex);
  }, [currentSlide, features.length, goToSlide]);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', updateButtons);
      window.addEventListener('resize', updateButtons);
      updateButtons(); // Initial state
    }

    return () => {
      if (track) {
        track.removeEventListener('scroll', updateButtons);
      }
      window.removeEventListener('resize', updateButtons);
    };
  }, [updateButtons]);

  const handlePrevClick = () => {
    setIsAutoPlaying(false); // Pause auto-slide when user interacts
    prevSlide();
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  const handleNextClick = () => {
    setIsAutoPlaying(false); // Pause auto-slide when user interacts
    nextSlide();
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">INTEGRATING</span>
            <span className="title-line">Color Tinting</span>
            <span className="title-highlight">DELIVERING RESULTS.</span>
          </h1>
          <p className="hero-subtitle">We provide next generation Paint Color Solutions</p>
          
          {/* App Download Buttons */}
          <div className="app-downloads">
            <a href="#" className="download-btn google-play">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
            </a>
            <a href="#" className="download-btn app-store">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="social-links">
            <a href="#" className="social-link">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" alt="Twitter" />
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Right Content - Feature Sections */}
        <div className="hero-features">
          <div 
            ref={trackRef} 
            className="feature-cards-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {features.map((feature, index) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-card">
                  <div className="feature-image">
                    <img src={feature.image} alt={feature.title} />
                    <div className="feature-overlay">
                      <span className="feature-category">{feature.category}</span>
                    </div>
                  </div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="feature-nav">
            <button 
              className="nav-arrow left-arrow"
              onClick={handlePrevClick}
              title="Previous slide"
            >
              ‹
            </button>
            <button 
              className="nav-arrow right-arrow"
              onClick={handleNextClick}
              title="Next slide"
            >
              ›
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="feature-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  goToSlide(index);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <button 
            className="auto-play-toggle"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            title={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
