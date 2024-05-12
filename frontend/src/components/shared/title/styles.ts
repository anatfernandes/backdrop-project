import styled from "styled-components";
import { WrapperPropsType } from "./types";

const Wrapper = styled.h1<WrapperPropsType>`
  width: 100%;
  font-size: 1.5rem;
  line-height: 5rem;
  font-weight: 700;
  letter-spacing: 0.03rem;
  color: var(--primary);
  text-align: ${(props) => props.$align};
`;

export { Wrapper };
