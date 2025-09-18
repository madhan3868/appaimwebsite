import React, { useRef, useState, useEffect, useCallback } from 'react';

const SupportAreas = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1); // Start with highlighted card
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoSlideRef = useRef(null);

  const supportCards = [
    { 
      id: 1, 
      title: "Color Solution", 
      description: "Advanced color matching and formulation solutions for perfect paint consistency",
      image: "/pic-1.jpg", 
      highlight: false,
      category: "Technology"
    },
    { 
      id: 2, 
      title: "Base Correction", 
      description: "Automated base correction system ensuring optimal paint quality and performance",
      image: "/pic-2.jpg", 
      highlight: true,
      category: "Quality"
    },
    { 
      id: 3, 
      title: "Dispensing Software", 
      description: "Intelligent dispensing software for precise paint mixing and color accuracy",
      image: "/pic-3.jpg", 
      highlight: false,
      category: "Software"
    },
    { 
      id: 4, 
      title: "Color Database", 
      description: "Comprehensive color database with thousands of paint formulations and recipes",
      image: "/pic-4.jpg", 
      highlight: false,
      category: "Database"
    },
    { 
      id: 5, 
      title: "Dispenser Support", 
      description: "24/7 technical support and maintenance for all dispensing equipment",
      image: "/pic-5.jpg", 
      highlight: false,
      category: "Support"
    },
    { 
      id: 6, 
      title: "Technician Availability", 
      description: "Expert technicians available for installation, training, and troubleshooting",
      image: "/pic-6.jpg", 
      highlight: false,
      category: "Service"
    },
    { 
      id: 7, 
      title: "IoT Monitoring", 
      description: "Real-time monitoring and analytics for optimal equipment performance",
      image: "/pic-7.jpg", 
      highlight: false,
      category: "IoT"
    },
    { 
      id: 8, 
      title: "Quality Assurance", 
      description: "Comprehensive quality control systems ensuring consistent paint standards",
      image: "/pic-8.jpg", 
      highlight: false,
      category: "QA"
    }
  ];

  const getCardWidth = () => {
    if (!carouselRef.current) return 250;
    const card = carouselRef.current.querySelector('.card');
    if (!card) return 250;
    const style = window.getComputedStyle(carouselRef.current);
    const gap = parseInt(style.columnGap || style.gap || '20', 10) || 20;
    return card.getBoundingClientRect().width + gap;
  };

  const scrollCarousel = useCallback((direction) => {
    const step = getCardWidth();
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
  }, []);

  const updateButtons = useCallback(() => {
    if (!carouselRef.current) return;
    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const scrollLeft = carouselRef.current.scrollLeft;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScrollLeft - 1);
    
    // Update current slide based on scroll position
    const step = getCardWidth();
    if (step > 0) {
      const newSlide = Math.round(scrollLeft / step);
      setCurrentSlide(newSlide);
    }
  }, []);

  const goToSlide = useCallback((slideIndex) => {
    if (!carouselRef.current) return;
    const step = getCardWidth();
    carouselRef.current.scrollTo({ left: slideIndex * step, behavior: 'smooth' });
    setCurrentSlide(slideIndex);
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % supportCards.length;
    goToSlide(nextIndex);
  }, [currentSlide, supportCards.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentSlide === 0 ? supportCards.length - 1 : currentSlide - 1;
    goToSlide(prevIndex);
  }, [currentSlide, supportCards.length, goToSlide]);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
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
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateButtons);
      window.addEventListener('resize', updateButtons);
      updateButtons(); // Initial state
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', updateButtons);
      }
      window.removeEventListener('resize', updateButtons);
    };
  }, [updateButtons]);

  const handlePrevClick = () => {
    setIsAutoPlaying(false);
    prevSlide();
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleNextClick = () => {
    setIsAutoPlaying(false);
    nextSlide();
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section className="support-areas" id="support">
      <h2>SUPPORT AREAS</h2>

      <div className="carousel-container">
        <div 
          ref={carouselRef} 
          className="carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {supportCards.map((card, index) => (
            <div key={card.id} className={`card ${index === currentSlide ? 'highlight' : ''}`}>
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <div className="card-category">{card.category}</div>
                <div className="card-title">{card.title}</div>
                <div className="card-description">{card.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          className="prev"
          onClick={handlePrevClick}
          title="Previous slide"
        >
          &#10094;
        </button>
        <button 
          className="next"
          onClick={handleNextClick}
          title="Next slide"
        >
          &#10095;
        </button>

        {/* Slide Indicators */}
        <div className="support-indicators">
          {supportCards.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                goToSlide(index);
                setTimeout(() => setIsAutoPlaying(true), 6000);
              }}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <button 
          className="support-auto-play-toggle"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          title={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </section>
  );
};

export default SupportAreas;
