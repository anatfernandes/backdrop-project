import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  transition: all 0.1s ease;
  display: none;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    width: 15%;
    min-width: 2.5rem;
    height: 2rem;
    border-radius: 3px;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
  }

  a:focus-within,
  a:focus,
  a:hover {
    svg {
      color: var(--secondary) !important;
    }
  }

  a:focus-within,
  a:focus {
    border-color: var(--secondary);
  }

  @media (max-width: 500px) {
    display: initial;
  }

  @media (max-width: 300px) {
    padding: 0 1rem;
  }

  @media (max-width: 270px) {
    padding: 0 0.1rem;
  }
`;

export { Wrapper };
