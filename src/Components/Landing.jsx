import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Landing.css";

function MyLanding() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  const Getproductblogs = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.goseo.in/api/Seo/GetProductBlogs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_name: "billpunch" }),
        }
      );
      const data = await response.json();
      if (data.status === "0") {
        setCards((prevCards) => [...prevCards, ...(data.data || [])]);
      } else {
        console.error("Failed to fetch blogs:", data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    Getproductblogs();
  }, []);

  const updateCarousel = useCallback(() => {
    if (containerRef.current && cards.length > 0) {
      const cardWidth =
        containerRef.current.querySelector(".My-Landing-card").offsetWidth;
      const newTranslateX = -(currentIndex * cardWidth);
      containerRef.current.style.transform = `translateX(${newTranslateX}px)`;

      // Check if we're near the end and need to load more cards
      if (currentIndex >= cards.length - 5 && !isLoading) {
        Getproductblogs();
      }
    }
  }, [currentIndex, cards.length, isLoading, Getproductblogs]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    updateCarousel();
  }, [currentIndex, isMobile, cards, updateCarousel]);

  return (
    <section className="My-Landing-whatsapp-marketing">
      <h2 className="My-Landing-section-title font-size-1">
        WhatsApp Marketing for Every Business, <br /> Transform Your Growth with
        Anlook
      </h2>
      <div
        className={`My-Landing-card-carousel ${isMobile ? "mobile-view" : ""}`}
      >
        <div className="My-Landing-carousel-controls">
          <button
            className="My-Landing-carousel-btn My-Landing-prev"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="My-Landing-carousel-btn My-Landing-next"
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>
        <div className="My-Landing-card-container" ref={containerRef}>
          {cards.map((item, i) => (
            <div key={i} className="My-Landing-card">
              <img
                className="My-Landing-card-image"
                src={item.post_featured_image}
                alt="Travel"
                style={{ maxWidth: "9rem" }}
              />
              <h3 className="font-size-2">{item.post_title}</h3>
              <p className="font-size-3">{item.post_excerpt}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Source Title</cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
      {isLoading && <div>Loading more cards...</div>}
    </section>
  );
}

export default MyLanding;
