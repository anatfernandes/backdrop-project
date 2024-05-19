import styled from "styled-components";

const Wrapper = styled.section`
  section#custom-multiselect {
    margin: 0;
    position: relative;

    &::after {
      content: "";
      top: 56%;
      right: 1rem;
      position: absolute;
      border-left: 0.3rem solid transparent;
      border-right: 0.3rem solid transparent;
      border-top: 0.3rem solid var(--light-gray);
      pointer-events: none;
    }

    &:has(input:focus-within)::after,
    &:has(ul:focus-within)::after {
      border-top-color: var(--primary);
    }

    input {
      width: 100%;
      height: 36px;
      margin: 7px 0 0;
      padding: 0 2.3rem 0 10px;
      border-radius: 5px;
      outline: none;
      border: 1.6px solid var(--light-gray);
      background-color: transparent;
      color: var(--light-gray);
      font-size: 1rem;
      transition: color 0s linear;
      transition: border 0.1s linear;
    }

    input:focus-within,
    &:has(ul:focus-within) input {
      color: var(--black);
      border-color: var(--primary);
    }

    &:focus-within ul {
      display: initial;
    }

    ul {
      width: 100%;
      height: auto;
      max-height: 100px;
      border-radius: 3px;
      padding: 5px 0;
      border: 1px solid var(--dark-gray);
      box-shadow: 0 0 4px 2px var(--light-gray);
      background-color: var(--white);
      display: none;
      overflow: scroll;
      position: absolute;
      top: 50px;
      right: 0;
      left: 0;
      z-index: 2;

      li {
        width: 100%;
        height: auto;
        min-height: 2rem;
        padding: 0 10px;
        display: flex;
        align-items: center;
        background-color: var(--white);
        color: var(--black);
        font-size: 1rem;
        font-weight: 400;

        &:not(.disabled) {
          cursor: pointer;
        }

        &.selected {
          filter: brightness(0.9);
          outline: none;
        }

        &:not(.disabled):hover,
        &:not(.disabled):focus-visible {
          color: var(--white);
          background-color: var(--dark-gray);
        }
      }
    }
  }
`;

export { Wrapper };
