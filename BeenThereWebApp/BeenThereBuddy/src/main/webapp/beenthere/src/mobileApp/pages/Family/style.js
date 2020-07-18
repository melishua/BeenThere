import styled from "styled-components";
import style from "../../global-style";
export const Section = styled.div`
  text-align: center;
  height: 100%;
  .description {
    &--1,
    &--2 {
      line-height: ${style["line-height-m"]};
      width: 315px;
      margin: 20px auto;
    }

    &--1 {
      font-size: ${style["font-size-s"]};
    }
    &--2 {
      font-size: ${style["font-size-m"]};
    }
  }
  .video {
    padding-top: 70px;
    width: 65vw;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .credentials {
    width: 90%;

    margin: 0 auto;
    &__icon {
      width: 100%;
    }
  }
`;
export const Gallery = styled.div`
  position: relative;

  width: 85%;
  margin: 0 auto;
  margin-top: 30px;
  .image {
    position: absolute;
    width: 162px;
    border-radius: 15px;
    &--1 {
      /* height: 273px; */
      top: 0;
      left: 0;
      /* clip: rect(10px, 60px, 200px, 0px); */
    }
    &--2 {
      /* height: 168px; */
      right: 0;
      top: 0;
    }
    &--3 {
      /* height: 173px; */
      right: 0;
      top: 80px;
    }
    &--4 {
      top: 230px;
      left: 0;
      /* height: 120px; */
    }
    &--5 {
      top: 265px;
      right: 0;
    }
    &--6 {
      top: 350px;
      left: 0;
      /* height: 148px; */
    }
    &--7 {
      top: 542px;
      right: 0;
    }
    &--8 {
      top: 470px;
      left: 0;
    }
    &--9 {
      top: 405px;
      right: 0;
    }
    &--10 {
      top: 610px;
      left: 0;
    }
    &--11 {
      top: 680px;
      right: 0;
    }
    &--12 {
    }
    &--13 {
    }
  }
`;
export const Credentials = styled.div`
  display: grid;
  grid-column: full-start/full-end;
  grid-template-columns: repeat(3, 120px);
  grid-template-rows: repeat(3, 70px);
  grid-column-gap: 2px;
  grid-row-gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  .caption {
    align-self: end;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
  .image {
    width: 100%;
    margin: 0 auto;
    display: block;
    object-fit: cover;
    align-self: center;
    flex: 1;
    &--1 {
      width: 85%;
    }
    &--2 {
      width: 110%;
    }
    &--3 {
      width: 60%;
    }
    &--4 {
      width: 75%;
    }
    &--5 {
      width: 35%;
    }
    &--6 {
      width: 60%;
    }
    &--7 {
      width: 65%;
    }
    &--8 {
      width: 90%;
    }
    &--9 {
      width: 90%;
    }
  }
  .text {
    flex: 0 0 30%;
    font-size: ${style["font-size-ss"]};
    line-height: ${style["line-height-l"]};
    color: #434343;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: ${style["line-height-m"]};
  color: ${style["font-color-light-1"]};
  background-color: ${style["background-color-white"]};
  z-index: 100;
  margin: 0;
  font-size: ${style["font-size-l"]};
  font-weight: bold;
  text-align: center;
  .icon {
    cursor: pointer;
  }
  & > span {
    text-align: center;
    flex: 0 0 85%;
    letter-spacing: 0.02em;
  }
`;
