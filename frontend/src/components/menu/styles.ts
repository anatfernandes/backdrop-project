import styled from "styled-components";

const Wrapper = styled.aside`
  height: 100%;
  width: 30%;
  max-width: 240px;
  min-width: 180px;
  padding: 0;
  padding-top: 80px;
  box-shadow: 1px 0 4px 0 var(--dark-gray);
  background-color: var(--primary);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  overflow: scroll;

  nav {
    width: 100%;
  }

  ul {
    display: block;
  }

  a {
    padding: 10px 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    font-size: 1rem;
    color: var(--white);
    text-decoration: none;
    outline: none;

    &:hover,
    &:focus-visible {
      filter: brightness(0.7);
    }
  }

  div#option {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }

  @media (max-width: 600px) {
    height: fit-content;
    width: 100%;
    max-width: 100%;
    padding: 80px 10px 0;
    display: flex;
    align-items: center;

    ul {
      display: flex;
    }

    a {
      padding: 10px 1rem;
    }
  }

  @media (max-width: 500px) {
    a {
      font-size: 0.9rem;
    }

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export { Wrapper };
