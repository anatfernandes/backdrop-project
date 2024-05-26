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

  button#settings {
    background-color: transparent;
  }

  a,
  button#settings {
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
  a:hover,
  button#settings:focus-within,
  button#settings:focus,
  button#settings:hover {
    svg {
      color: var(--secondary) !important;
    }
  }

  a:focus-within,
  a:focus,
  button#settings:focus-within,
  button#settings:focus {
    border-color: var(--secondary);
  }

  ul {
    padding: 2.5px 0;
    cursor: pointer;
  }

  ul li {
    width: 100%;
    line-height: 2rem;
    padding: 0 10px;
    background-color: var(--white);
    border: 1px solid transparent;
    border-left: none;
    border-right: none;
    color: var(--dark-gray);
    font-weight: 500;
    outline: none;
  }

  ul li:hover,
  ul li:focus-within {
    filter: brightness(0.9);
  }

  ul li:focus-within {
    border-color: var(--dark-gray);
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
