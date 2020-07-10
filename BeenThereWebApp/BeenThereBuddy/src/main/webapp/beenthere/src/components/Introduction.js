import React, { useState, useEffect } from "react";
import styled from "styled-components";
import style from "../global-style";
import "swiper/css/swiper.css";
import Swiper from "swiper";
import { Link } from "react-router-dom";
const Section = styled.div`
  padding: 10rem;
  text-align: center;
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }
  .introductionSection {
    display: flex;
    justify-content: space-evenly;
  }

  .description {
    /* padding-left: 5rem; */
    /* margin: auto 2rem; */

    &__title {
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      color: ${style["font-color-dark"]};
      span {
        display: block;
        line-height: ${style["line-height-l"]};
      }
    }
    &__sub {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-l"]};
      /* margin-bottom: 3rem; */
      color: ${style["font-color-light-2"]};
      span {
        display: block;
        line-height: ${style["line-height-m"]};
      }
    }
  }
  .introduction {
    display: grid;
    grid-template-columns: repeat(2, 16rem);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    padding: 5rem;
    height: 100%;

    text-align: left;
    &__group {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    &__detail {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      color: ${style["highlight-color"]};
      border: 3px solid ${style["highlight-color"]};
      position: relative;
    }
    &__count {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${style["font-size-ll"]};
    }
    &__text {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light-2"]};
    }
    &__description {
      width: 13rem;
      text-align: center;
      padding-top: 3px;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light-1"]};
      line-height: ${style["line-height-l"]};
    }
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-l"]};
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
  width: 50%;
  height: 100%;
  padding: 7rem;
  margin: auto;
  border-radius: 3rem;
  text-align: left;
  color: ${(props) =>
    props.fontColor ? props.fontColor : style["font-color-light-2"]};
  /* background: white; */
  background-color: ${(props) =>
    props.swiperColor ? props.swiperColor : style["theme-color-primary"]};

  &::before {
    content: open-quote;
    position: absolute;
    top: 3rem;
    left: -15rem;
    line-height: 1;
    font-size: 20rem;
    color: ${style["highlight-color"]};
    z-index: 1;
    @media (max-width: 37.5em) {
      font-size: 15rem;
    }
  }

  .slider-container {
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;
    margin: auto;
    /* border-radius: 6px; */
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination {
      padding-top: 2rem;
    }
    .swiper-pagination-bullet-active {
      border: 1px solid ${style["highlight-color"]};
      background-color: ${style["highlight-color"]};
    }
  }
  .story {
    &__text {
      line-height: ${style["line-height-l"]};
      font-size: ${style["font-size-l"]};
      margin-bottom: 4rem;
      /* width: 100%; */
    }
    &__user {
      width: 50%;
      margin-left: 50%;
      font-size: ${style["font-size-s"]};
      display: grid;
      grid-template-columns: 1fr max-content;
      align-items: center;
      grid-column-gap: 1.5rem;
      &::before {
        content: "";
        height: 1px;
        display: block;
        background-color: currentColor;
      }
    }
  }
`;
const commentList = [1, 2, 3, 4].map((item) => ({
  text:
    "她总是舍身出地的为我着想，这段漫长的失恋期是她告诉我不要埋怨自己，要selfcare，听我慢慢的讲述自己变化和改善，让我感受到一个来自陌生人的善意和世界的谅解。",
  user: "来访者感悟",
}));
function Introduction(props) {
  const { swiperColor, fontColor } = props;

  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    if (commentList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination", clickable: true },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [sliderSwiper]);
  return (
    <Section>
      <div className="description">
        <div className="description__title">了解 BeenThere</div>
        <div className="description__sub">
          <p>Beenthere 有 100 余位来自世界各地的Online Buddy, </p>
          <p>TA 们经过精心筛选和严格培训, 其中有哈佛、麻省理工、哥大、</p>

          <p>斯坦福、伯克利、清华、北大、港大、剑桥、牛津等名校的众多校友</p>
        </div>
      </div>
      <div className="introductionSection">
        <SliderContainer swiperColor={swiperColor} fontColor={fontColor}>
          <div className="slider-container">
            <div className=" swiper-wrapper">
              {commentList.map((comment, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="slider-nav story">
                      <p className="story__text">{comment.text}</p>
                      <p className="story__user">{comment.user}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </SliderContainer>
        <div className="introduction">
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">4500+</span>
              <span className="introduction__text">咨询对话</span>
            </div>
            <div className="introduction__description">
              共进行超过4500次咨询对话
            </div>
          </div>
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">96%</span>
              <span className="introduction__text">表示满意</span>
            </div>
            <div className="introduction__description">
              96% 的来访者对 Buddy 服务表示满意
            </div>
          </div>
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">87%</span>
              <span className="introduction__text">带来提升</span>
            </div>
            <div className="introduction__description">
              87% 的来访者表示我们的服务为 TA 带来提升
            </div>
          </div>
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">91%</span>
              <span className="introduction__text">愿意推荐</span>
            </div>
            <div className="introduction__description">
              91% 的来访者愿意将 BeenThere 推荐给他人
            </div>
          </div>
        </div>
      </div>
      <Link to="/family">
        <button className="button">BeenThere 大家庭 ></button>
      </Link>
    </Section>
  );
}

export default Introduction;
