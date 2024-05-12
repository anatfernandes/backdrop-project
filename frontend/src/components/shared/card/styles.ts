import styled from "styled-components";
import { WrapperStylePropsType, DivisionStylePropsType } from "./types";

const Wrapper = styled.article<WrapperStylePropsType>`
  height: auto;
  width: ${(props) => props.$width};
  max-width: var(--max-view);
  padding: 20px;
  border-radius: 5px;
  margin: ${(props) => props.$margin};
  background-color: var(--white);
  box-shadow: 0 0 4px 1px var(--light-gray);
  font-size: 1rem;
  position: relative;
  z-index: 1;

  @media (max-width: 400px) {
    padding: 15px;
    font-size: 0.9rem;
  }
`;

const Divider = styled.hr<DivisionStylePropsType>`
  width: 100%;
  border: none;
  border-top: 1px solid var(--light-gray);
  margin: ${(props) => props.$margin};
`;

export { Wrapper, Divider };
