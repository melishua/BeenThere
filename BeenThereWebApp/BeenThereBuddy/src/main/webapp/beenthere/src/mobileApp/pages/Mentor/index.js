import React, { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import Footer from "../../components/Footer";
import BuddyIntroBoard from "./components/BuddyIntroBoard";
import ThankCard from "./components/ThankCard";
import BuddyVideo from "./components/BuddyVideo";
import BuddyArticle from "./components/BuddyArticle";
import BuddyQuoteBoard from "./components/BuddyQuoteBoard";
import Checklist from "./components/Checklist";
import HotlineCard from "./components/HotlineCard";
import { connect } from "react-redux";
import { fetchedMentorData } from "../../redux/index";
import { isEmptyObject } from "../../../utils/utils";
import { Section, HeaderContainer, SideBar } from "./style";
import Button from "../../components/Button";
function Mentor(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showHotline, setShowHotline] = useState(false);
  const { buddyInfo } = props;
  const { fetchedMentorData } = props;
  const id = props.match.params.id;
  useEffect(() => {
    fetchedMentorData(id);
  }, []);
  const handleReturn = () => {
    setShowStatus(false);
  };
  const handleShowChecklist = (e) => {
    e.preventDefault();

    e.stopPropagation();
    setShowChecklist(true);
  };
  const handleCloseChecklist = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowChecklist(false);
    setShowHotline(true);
  };
  const handleCloseHotline = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowHotline(false);
  };
  const menu = [
    { id: "videos", text: "视频" },
    { id: "articles", text: "文章" },
    { id: "thankscards", text: "感谢卡" },
  ];

  const refs = menu.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
  const handleClick = (e, id) => {
    e.preventDefault();

    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  // const sideRef = React.createRef();
  const [paddingTop, setPaddingTop] = useState(0);

  const changeSideBar = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    if (scrollTop > 500 && scrollTop < 2500) {
      // sideRef.current.client = 200;

      setPaddingTop(scrollTop - 500);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", changeSideBar);
    return () => {
      document.removeEventListener("scroll", changeSideBar);
    };
  }, [paddingTop]);

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      {!isEmptyObject(buddyInfo) ? (
        <React.Fragment>
          <Section>
            <HeaderContainer onClick={handleReturn}>
              <h1> &larr; 返回</h1>
            </HeaderContainer>

            <BuddyIntroBoard
              handleShowChecklist={handleShowChecklist}
              buddyInfo={buddyInfo}
            />
            <SideBar paddingTop={paddingTop}>
              {menu.map((item) => (
                <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </SideBar>
            <BuddyVideo
              video={buddyInfo.video}
              name={buddyInfo.name}
              id={id}
              ref={refs["videos"]}
            />

            <BuddyArticle
              id={id}
              article={buddyInfo.article}
              ref={refs["articles"]}
            />
            <ThankCard
              thankcards={buddyInfo.thankcards}
              ref={refs["thankscards"]}
            />
            {/* <BuddyQuoteBoard
              handleShowChecklist={handleShowChecklist}
              service={buddyInfo.service}
              id={id}
              avatar={buddyInfo.avatar}
            /> */}

            <Checklist
              showStatus={showChecklist}
              handleCloseChecklist={handleCloseChecklist}
            />
            <HotlineCard
              showStatus={showHotline}
              handleCloseHotline={handleCloseHotline}
            />
            {buddyInfo.service === "ready" ? (
              <div className="appointment">
                <a href="#" onClick={handleShowChecklist}>
                  <Button
                    background="#a7a7ff"
                    fontColor="#ffffff"
                    hoverBackground="#9c9cff"
                    style={{ height: "45px", fontSize: "16px" }}
                  >
                    我要预约
                  </Button>
                </a>
              </div>
            ) : (
              <div className="appointment">
                <a href="https://wj.qq.com/s2/6734752/cd0e/">
                  <Button
                    background="#a7a7ff"
                    fontColor="#ffffff"
                    hoverBackground="#9c9cff"
                    style={{ height: "45px", fontSize: "16px" }}
                  >
                    希望和TA语音
                  </Button>
                </a>
              </div>
            )}
          </Section>
          {/* <Footer /> */}
        </React.Fragment>
      ) : (
        <p>Loading data</p>
      )}
    </CSSTransition>
  );
}

const mapStateToProps = (state) => ({
  buddyInfo: state.buddy.buddyInfo,
});
const mapDispatchToProps = {
  fetchedMentorData,
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Mentor));
