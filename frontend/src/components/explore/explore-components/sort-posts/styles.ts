import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark-gray);

  hr {
    width: 100%;
    border: 1px solid var(--dark-gray);
    border-top: none;
  }

  button {
    width: fit-content;
    min-width: max-content;
    margin-left: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: var(--white);
    outline: none;
    color: var(--dark-gray);
    font-size: 0.8rem;
  }

  button:focus-visible {
    border-color: var(--dark-gray);
  }

  svg {
    margin-left: 5px;
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
    outline: none;
  }

  ul li:hover,
  ul li:focus-within {
    filter: brightness(0.9);
  }

  ul li:focus-within {
    border-color: var(--dark-gray);
  }
`;

export { Wrapper };
