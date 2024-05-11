import styled from "styled-components";
import { WrapperPropsType } from "./types";

const Wrapper = styled.div<WrapperPropsType>`
  width: fit-content;
  margin: ${(props) => props.$margin};
`;

export { Wrapper };
