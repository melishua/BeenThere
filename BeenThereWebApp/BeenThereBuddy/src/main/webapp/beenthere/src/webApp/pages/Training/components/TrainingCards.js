import React, { useRef } from "react";
import styled from "styled-components";
import style from "../../../global-style";
import card1 from "../../../../img/交流_1.svg";
import card2 from "../../../../img/创意_1.svg";
import card3 from "../../../../img/打卡_1.svg";
import { Description } from "../style";
export const CardDescription = styled(Description)`
  width: 100%;
  margin: 4vw;

  margin-bottom: 0;

  @media (min-width: 75em) {
    margin: 6vw 4vw;
  }
  @media (max-width: 75em) {
    margin: 5vw 3vw;
  }
  @media (max-width: 56.25em) {
    margin: 4vw 3vw;
  }
  @media (max-width: 37.5em) {
    margin: 3vw;
  }
`;

export const Card = styled.div`
  border-radius: 30px;
  display: flex;
  width: 100%;
  height: 12vw;
  overflow: hidden;
  transition: all 0.3s;
  @media (max-width: 37.5em) {
    height: 7vw;
  }
  .title {
    font-size: ${style["font-size-l"]};
  }
  .card-img {
    flex: 0 0 35%;
    height: 30vw;
    /* width: 30vw; */
    border-right: 3px solid rgba(255, 255, 255, 0.2);
    position: relative;
    padding: 4rem;
    @media (max-width: 37.5em) {
      height: 25vw;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
  flex-direction: column;
  @media (min-width: 93.75em) {
    width: 1152px;
    margin: 0 auto;
  }
  .card {
    &--1 {
      height: 30vw;
      background-color: rgba(115, 91, 123, 0.8);
      @media (max-width: 37.5em) {
        height: 25vw;
      }
    }
    &--2 {
      background-color: rgba(93, 91, 123, 0.8);
    }
    &--3 {
      background-color: rgba(91, 115, 123, 0.8);
    }
  }
`;

function TrainingCards(props) {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const handleExpand1 = (e) => {
    ref2.current.style.height = "30vw";
    ref1.current.style.height = "12vw";
  };
  const handleClose1 = (e) => {
    ref1.current.style.height = "30vw";
    ref2.current.style.height = "12vw";
  };
  const handleExpand2 = (e) => {
    ref3.current.style.height = "30vw";
    ref1.current.style.height = "12vw";
  };
  const handleClose2 = (e) => {
    ref1.current.style.height = "30vw";
    ref3.current.style.height = "12vw";
  };
  return (
    <Cards>
      <Card className="card--1" ref={ref1}>
        <div
          className="card-img"
          style={{
            background: `url(${card1}) no-repeat center center`,
            backgroundSize: "80% 80%",
          }}
        />
        <CardDescription className="card-description">
          <h2 className="title title--2">
            PEER SUPPORT GROUP MEETING
            <br />
            线上同伴互助交流舱
          </h2>

          <div className="content content--2">
            Peer Support Group Meeting (以下简称为 PSG Meeting)
            为”解压舱乘客“提供了一个安全健康的团体心灵互助空间。在这7天里，每个解压舱会进行一次
            PSG Meeting。在 PSG
            Meeting中，经过培训的BeenThere朋辈支持者将会带领“乘客”围绕着共同挑选出来的主题进行个人感受和经历的分享。每一位“解压舱乘客”都有机会去倾诉心事和疏解情绪，同时也慢慢学会去倾听和陪伴彼此。{" "}
            <br></br>
            PSG Meeting 不是团体治疗，而是专门提供同伴互助的朋辈支持小组。
          </div>
        </CardDescription>
      </Card>
      <Card
        className="card--2"
        ref={ref2}
        onMouseEnter={handleExpand1}
        onMouseLeave={handleClose1}
      >
        <div
          className="card-img"
          style={{
            background: `url(${card2}) no-repeat center center`,
            backgroundSize: "80% 80%",
          }}
        />
        <CardDescription className="card-description">
          <h2 className="title title--2">
            CREATIVE ACTIVITY
            <br />
            线上解压创意活动
          </h2>

          <div className="content content--2">
            与 PSG Meeting 搭配食用，Creative Activity
            采用创意十足的形式去让“解压舱乘客”收获一份与他人交心、得以释放压力的快乐；正经起来的我们会一起在舱内【寻找人生的意义】，嗨皮起来的我们说不定就会来一场让你过翻瘾的【泄压
            Party】
          </div>
        </CardDescription>
      </Card>
      <Card
        className="card--3"
        ref={ref3}
        onMouseEnter={handleExpand2}
        onMouseLeave={handleClose2}
      >
        <div
          className="card-img"
          style={{
            background: `url(${card3}) no-repeat center center`,
            backgroundSize: "80% 80%",
          }}
        ></div>
        <CardDescription className="card-description">
          <h2 className="title title--2">
            JOURNEY MARKER
            <br />
            舱内打卡
          </h2>

          <div className="content content--2">
            <span>有了舱内打卡，妈妈再也不用担心我会忘记这7天的旅程啦！</span>
            <br></br>
            <span>“情绪日记”、“人生之最”、“时间胶囊”……</span>
            <span>等等打卡活动在向我们招手，仿佛在说：</span>
            <br></br>
            <span>“来嘛！咱一步步解锁这未知之旅！ 打卡选择完全由你决定～”</span>
            <br></br>
          </div>
        </CardDescription>
      </Card>
    </Cards>
  );
}

export default React.memo(TrainingCards);
