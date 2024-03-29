import styled from "styled-components";
import style from "../../global-style";
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20rem;
  position: relative;
  @media (min-width: 93.75em) {
    width: 1152px;
    margin: 0 auto;
  }
  .description {
    /* width: 75%; */
    /* padding-left: 2rem; */
    margin: auto 2rem;
    &__title {
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      color: ${style["font-color-dark"]};
      span {
        display: block;
        line-height: ${style["line-height-ll"]};
      }
    }
    &__sub {
      font-size: ${style["font-size-l"]};

      margin-bottom: 3rem;
      color: ${style["font-color-light-1"]};
      span {
        display: block;
        line-height: ${style["line-height-l"]};
      }
      &--hightlight {
        font-weight: bold;
      }
    }
  }
  .photo {
    z-index: 1;
    &--1 {
      margin: 0 2rem;
      width: 40%;
    }
    &--2 {
      padding-right: 5rem;
      width: 42%;
    }
    &--3 {
      width: 35%;
    }
    img {
      width: 100%;
    }
  }
  .background-vector {
    position: absolute;
    &--1 {
      left: -5rem;
      top: -8rem;
      width: 45%;
      height: 100%;
    }
    &--2 {
      right: 0;
      top: -8rem;
      width: 45%;
      height: 100%;
    }
    &--3 {
      transform: rotateY(-4.4deg);
      left: -8rem;
      top: -20rem;
      width: 50%;
      height: 100%;
    }
  }
`;
export const Title = styled.div`
  padding: 15rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
    color:${style["font-color-dark"]};
  }
  .description {
    color:${style["font-color-light-2"]};
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
    width: 50vw;
    text-align: center;
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-l"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    /* border-bottom: 1px solid transparent; */
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      /* border-bottom: 1px solid ${style["highlight-color"]}; */
    }
  }
`;
