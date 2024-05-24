import styled from "styled-components";
import { Form } from "../../../../shared";

const Wrapper = styled(Form.InputSection)`
  width: 100%;
  height: auto;
  display: flex;

  input {
    margin: 0;
    border-right: none;
    border-radius: 50px 0 0 50px;
    padding-left: 1rem;
  }

  button {
    height: 36px;
    width: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border: 2px solid var(--light-gray);
    border-left: none;
    border-radius: 0 50px 50px 0;
    outline: none;

    svg {
      cursor: pointer;
    }
  }

  &:has(input:focus-within) button {
    border-color: var(--primary);
  }

  button:focus-visible {
    border-left: 2px solid;
    border-color: var(--primary);
  }
`;

export { Wrapper };
