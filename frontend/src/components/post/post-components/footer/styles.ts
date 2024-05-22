import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: var(--white);
    display: flex;
    align-items: center;
    outline: none;

    > svg {
      width: 1.875rem;
      height: 1.875rem;
      cursor: pointer;
    }

    span#quantity {
      margin-left: 7px;
    }

    &:focus-visible {
      border-color: var(--dark-gray);
    }
  }

  @media (max-width: 360px) {
    button > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export { Wrapper };
