import styled from "styled-components";

import style from "../../global-style";

export const Container = styled.div`
  padding: 15rem 5rem;
  text-align: center;
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }
  .title {
    font-size: ${style["font-size-ll"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
    color: ${style["font-color-dark"]};
  }
  .description {
    font-size: ${style["font-size-l"]};
    line-height: ${style["line-height-l"]};
    margin-bottom: 2rem;
    color: ${style["font-color-light-2"]};
    .donate {
      color: ${style["highlight-color"]};
      font-weight: bold;
    }
  }
  .text {
    color: ${style["font-color-light-2"]};
    font-size: ${style["font-size-l"]};
    margin: 3rem auto;
    line-height: ${style["line-height-m"]};
  }
  .buddy-record {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 3rem 10rem;
    @media (max-width: 56.25em) {
      grid-template-columns: 1fr;
    }
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  font-size: ${style["font-size-m"]};
  color: ${style["font-color-light-2"]};
  @media (max-width: 56.25em) {
    justify-content: center;
    margin: 0 auto;
    /* height: 12rem; */
  }
  @media (max-width: 37.5em) {
    padding-left: 0;
    /* justify-content: flex-start; */
  }
  .input-box {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: end;
    color: inherit;
  }
  .icon {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    background-color: red;
  }
  .input {
    border: none;
    border-bottom: 1px solid ${style["font-color-light-2"]};
    font-size: inherit;
    padding: 0.7rem;
    margin-left: 2rem;
    color: inherit;
    &:focus {
      outline: none;
      width: 100%;
    }
  }
`;

export const SearchButton = styled.button`
  border: none;
  font-size: inherit;
  padding: 1.2rem 3.5rem;
  border-radius: 10rem;
  margin-right: 1rem;

  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const SearchAllButton = styled(SearchButton)`
  background-color: ${(props) =>
    props.changeStyle ? `transparent` : `${style["theme-color-primary"]}`};
  color: ${(props) =>
    props.changeStyle
      ? `${style["font-color-light-2"]}`
      : `${style["highlight-color"]}`};
  font-weight: ${(props) => (props.changeStyle ? "" : "bold")};
`;
export const SearchCallButton = styled(SearchButton)`
  background-color: ${(props) =>
    props.changeStyle ? `${style["theme-color-primary"]}` : `transparent`};
  color: ${(props) =>
    props.changeStyle
      ? `${style["highlight-color"]}`
      : `${style["font-color-light-2"]}`};
  font-weight: ${(props) => (props.changeStyle ? "bold" : "")};
`;
