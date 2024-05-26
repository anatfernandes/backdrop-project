import styled from "styled-components";

const Wrapper = styled.article`
  ul {
    margin: 1rem 0 4rem;

    li {
      height: 54px;
      padding: 0 1rem;
      border-radius: 5px;
      border-bottom: 1px solid var(--light-gray);
      background-color: var(--white);
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 400;
      color: var(--black);
      cursor: pointer;

      &.selected {
        font-weight: 700;
        color: var(--white);
        background-color: var(--primary);
      }

      &:hover,
      &:focus-visible {
        filter: brightness(0.8);
      }
    }
  }
`;

export { Wrapper };
