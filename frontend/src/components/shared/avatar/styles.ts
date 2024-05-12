import styled from "styled-components";
import { WrapperPropsType } from "./types";

const Wrapper = styled.article<WrapperPropsType>`
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
  border-radius: 50px;
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.$color};
  background-image: ${(props) => props.$image};
  box-shadow: 0 0 7px 2px var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${(props) => props.$fontSize};
  font-weight: 700;
  overflow: hidden;
  cursor: ${(props) => props.$cursor};
`;

export { Wrapper };
