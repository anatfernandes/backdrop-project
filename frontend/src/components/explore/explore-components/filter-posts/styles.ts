import styled from "styled-components";
import { Card, Form } from "../../../shared";

const Wrapper = styled(Card)`
  height: 58px;
  margin: 2rem 0 3rem;
  overflow: hidden;
  outline: none;

  form {
    margin-top: 3rem;

    &.closed {
      visibility: hidden;
    }
  }

  &:has(form.open) {
    height: 100%;
  }

  &:focus-visible {
    outline: 1px solid var(--dark-gray);
  }
`;

const Title = styled(Form.Title)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export { Wrapper, Title };
