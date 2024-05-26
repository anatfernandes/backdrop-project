import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--user-view-width);
  max-width: var(--max-user-view-width);

  menu {
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--light-gray);
    display: flex;
    background-color: var(--white);
    font-size: 0.9rem;
    overflow: scroll;

    li {
      height: 2rem;
      margin: 0 3px;
      padding: 6px 7px 0;
      border-radius: 3px 3px 0 0;
      border-bottom: 3px solid transparent;
      background-color: var(--white);
      color: var(--dark-gray);
      font-weight: 400;
      list-style: none;
      outline: none;
      cursor: pointer;
    }

    li:hover,
    li:focus-visible {
      border-bottom-color: var(--dark-gray);
      filter: brightness(0.9);
    }

    li.active-tab {
      font-weight: 500;
      border-bottom-color: var(--primary);
    }
  }
`;

export { Wrapper };
