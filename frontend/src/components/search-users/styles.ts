import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;

  div#background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  section#search-section {
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;

    article#search-input {
      width: 100%;
      position: relative;

      input {
        width: 100%;
        height: 32px;
        padding: 0 2.1rem 0 15px;
        border-radius: 50px;
        border: 1px solid var(--dark-gray);
        background-color: var(--white);
        color: var(--black);
        outline: none;
      }

      #search-icon {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        right: 10px;
        top: 5.5px;
        cursor: inherit;
      }
    }

    article#search-users {
      width: 100%;
      height: auto;
      max-height: 300px;
      padding-top: 1.6rem;
      border-radius: 0 0 7px 7px;
      border: 1px solid var(--dark-gray);
      background-color: var(--white);
      overflow: scroll;
      position: absolute;
      top: 16px;
      z-index: -1;

      svg {
        cursor: inherit;
      }
    }
  }
`;

export { Wrapper };
