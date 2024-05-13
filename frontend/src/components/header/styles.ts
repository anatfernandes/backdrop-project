import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--secondary);
  transition: all 0.1s ease;

  > img {
    height: 50px;
  }

  section {
    display: flex;
    align-items: center;

    svg {
      height: 1.563rem;
      width: 1.563rem;
      color: var(--black);
      outline: none;
      cursor: pointer;
    }
  }

  nav {
    display: initial;
  }

  a,
  section#search {
    width: 2.5rem;
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
  section#search:focus-within,
  section#search:focus,
  section#search:hover {
    svg {
      color: var(--light-gray) !important;
    }
  }

  a:focus-within,
  a:focus,
  section#search:focus-within,
  section#search:focus {
    border-color: var(--light-gray);
  }

  @media (max-width: 500px) {
    nav {
      display: none;
    }
  }
`;

export { Wrapper };
