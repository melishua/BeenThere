import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "swiper/css/swiper.css";
import style from "../../../global-style";
import Swiper from "swiper";
import { Link } from "react-router-dom";

const Section = styled.div`
  width: 370px;

  margin: 0 auto;
  .title {
    padding-left: 40px;
    text-align: left;
    color: ${style["color-yellow-3"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-l"]};
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 5px;
  }
  .sub {
    padding-left: 40px;
    text-align: left;
    font-size: ${style["font-size-s"]};
    color: ${style["color-yellow-3"]};
    margin-bottom: 30px;
  }
  .introductionSection {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .introduction {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    &__detail {
      width: 165px;
      height: 165px;
      border-radius: 50%;

      border: 3px solid ${style["highlight-color"]};
      position: relative;
    }
    &__count {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 44px;
      color: ${style["highlight-color"]};
    }
    &__text {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${style["font-size-m"]};
      color: ${style["color-yellow-3"]};
    }
    &__description {
      /* width: 20rem; */
      text-align: center;
      padding-top: 10px;
      width: 115px;
      font-size: ${style["font-size-s"]};
      color: ${style["color-yellow-3"]};
      line-height: ${style["line-height-l"]};
    }
  }
`;
const SliderContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  padding: 30px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 15px;
  text-align: left;
  color: ${style["theme-color-primary"]};
  /* background: white; */
  background-color: rgba(91, 115, 123, 0.8);

  &::before {
    content: open-quote;
    position: absolute;
    top: 15px;
    left: -50px;
    /* line-height: 1; */
    font-size: 64px;
    color: ${style["highlight-color"]};
    z-index: 1;
  }

  .slider-container {
    position: relative;
    width: 100%;
    height: 100%;
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
      font-size: ${style["font-size-s"]};
      margin-bottom: 4rem;
      /* width: 100%; */
    }
    &__user {
      width: 50%;
      margin-left: 50%;
      font-size: ${style["font-size-sm"]};
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
const commentList = [
  "倾听完舱内其它有着相似经历但又都处在不同状态下的乘客的想法后，我对自己有了新的认识，也学着去自我接纳。",
  "每次从解压舱“出来”后我都感觉轻松了许多，心情也真的有变好，还探索到了一些对自己有效的缓解压力的方法。",
  "解压舱的leader总能很巧妙地引领讨论，支持我，让我有勇气去直面内心，在自我表达的舒适区间内倾诉我的烦恼。",
  "感觉谈话的过程很治愈。",
  "我学会对自己宽容，对情绪管理有了更好的了解和认知！",
  "拥抱轻松快乐的自己！",
  "认识到了高质量的朋友。",
  "我觉得自己在解压舱里跟社交圈外的人分享内心感受的过程中收获了许多有趣的观点，在放松的环境中一起调整状态，更好地面对生活的难题。",
  "解压舱的气氛很不错，所以我愿意在这卸下心中的一些担子！很喜欢每次自己分享完个人经历后都可以从其他乘客那了解到从不同视角出发的相似经历，这给了我蛮多的启发，也让我真切感受到了人与人之间的深度链接。",
];

function Introduction(props) {
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
      <div className="title">登舱者感言</div>
      <div className="sub">
        登陆线上团体互助空间，和有趣的 TA 们一同穿越人生百态
      </div>
      <div className="introduction">
        <div className="introduction__detail">
          <span className="introduction__count">9.2/10</span>
          <span className="introduction__text">推荐意愿</span>
        </div>
        <div className="introduction__description">
          总分为10，来访者将人生解压舱推荐给他人的意愿平均为9.2
        </div>
      </div>
      <SliderContainer>
        <div className="slider-container">
          <div className=" swiper-wrapper">
            {commentList.map((comment, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav story">
                    <p className="story__text">{comment}</p>
                    <p className="story__user">登舱者感言</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </SliderContainer>
    </Section>
  );
}

export default React.memo(Introduction);
