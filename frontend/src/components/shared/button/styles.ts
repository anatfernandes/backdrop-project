import styled, { css } from "styled-components";
import { WrapperStylePropsType } from "./types";

const Wrapper = styled.button<WrapperStylePropsType>`
  min-height: 40px;
  width: ${(props) => props.$width};
  max-width: var(--max-view);
  border-radius: ${(props) => props.$radius};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  background-color: var(--primary);
  color: var(--white);
  font-family: "Roboto", sans-serif;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
	outline: none;
  cursor: pointer;

  &:hover,
	&:focus-within {
    filter: brightness(0.8);
  }

  &:disabled {
    filter: brightness(0.6);
    cursor: not-allowed;
  }

  ${(props) =>
    props.$buttonType === "secondary" &&
    css`
      background-color: var(--white);
      color: var(--primary);
      border-color: var(--primary);
    `}

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export { Wrapper };
