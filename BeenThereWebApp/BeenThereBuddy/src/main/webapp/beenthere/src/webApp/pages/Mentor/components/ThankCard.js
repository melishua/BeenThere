import React, { useState, useEffect } from "react";
import style from "../../../global-style";
import styled from "styled-components";
import Swiper from "swiper";
import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.min.css";

const Section = styled.div`
  text-align: center;
  margin: 10rem;
  padding: 0 15rem;
  @media (max-width: 56.25em) {
    margin: 60px;
    padding: 30px;
  }
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-3"]};
    margin-bottom: 2rem;
  }
  .gallery {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
    border-top: 1px solid #e5e5e5;
    padding-top: 3rem;
    &--image {
      width: 90%;
      height: 100%;
    }
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-m"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
`;
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  /* padding: 7rem; */
  .swiper-button-next,
  .swiper-button-prev {
    color: ${style["font-color-light-2"]};
  }
  .slider-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: auto;
  }
  .slider-nav {
    position: absolute;
    /* display: block; */
    /* padding: 5rem; */
    width: 60%;
    /* height: 100%; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .swiper-slide {
    border-radius: 30px;
    width: 100%;
    transition: all 0.3s;
    position: relative;
  }
`;

const ThankCard = React.forwardRef((props, ref) => {
  const { thankcards } = props;

  const [sliderSwiper, setSliderSwiper] = useState(null);
  // const [renderCard, setRenderCard] = useState(false);

  useEffect(() => {
    // setRenderCard(!renderCard);
    if (thankcards.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      setSliderSwiper(newSliderSwiper);
    }
    return () => {
      if (sliderSwiper) {
        setSliderSwiper(null);
      }
    };
  }, [thankcards, sliderSwiper]);
  return (
    <Section ref={ref}>
      <div className="title">TA的感谢卡</div>
      <SliderContainer>
        <div className="slider-container">
          <div className=" swiper-wrapper">
            {thankcards &&
              thankcards.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img
                      src={`/thankcard/${item}`}
                      alt="Card"
                      className="slider-nav"
                    />
                  </div>
                );
              })}
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </SliderContainer>
    </Section>
  );
});
export default ThankCard;
