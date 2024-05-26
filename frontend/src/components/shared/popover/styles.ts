// original code: https://codepen.io/chocochip/pen/zYxMgRG

import styled from "styled-components";
import { WrapperStyleParamsType } from "./types";

const Wrapper = styled.div<WrapperStyleParamsType>`
  position: relative;
  display: inline-block;

  .popover__content {
    width: auto;
    min-width: 120px;
    max-width: 200px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: ${(props) => props.$top};
    bottom: ${(props) => props.$bottom};
    right: 0;
    z-index: 4;
    background-color: var(--white);
    box-shadow: 0 1px 5px 0 var(--dark-gray);
    font-size: 0.9rem;
    color: var(--black);
    transform: translate(0, 10px);
  }

  &:hover .popover__content,
  &:focus-within .popover__content {
    opacity: 1;
    visibility: visible;
    transform: translate(0, -20px);
    transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }
`;

export { Wrapper };
