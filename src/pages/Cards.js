import React, { useRef, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Cards.css';

const Cards = () => {
  const carouselRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const options = {
    autoWidth: true,
    loop: true,
    items: 1
  };

  return (
    <section className="game-section">
      <h2 className="line-title">trending games</h2>
      <OwlCarousel ref={carouselRef} {...options}>
        <div
          className={`item ${activeItem === 0 ? 'active' : ''}`}
          style={{ backgroundImage: "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)" }}
          onMouseEnter={() => handleMouseEnter(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
              Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 1 ? 'active' : ''}`}
          style={{ backgroundImage: "url(https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg)" }}
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
              of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 2 ? 'active' : ''}`}
          style={{ backgroundImage: "url(https://ucarecdn.com/ec1918b1-2674-452c-bf61-8f73d8cc40c6/rdr2.jpg)" }}
          onMouseEnter={() => handleMouseEnter(2)}
        >
          <div className="item-desc">
            <h3>RDR 2</h3>
            <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
              Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default Cards;
