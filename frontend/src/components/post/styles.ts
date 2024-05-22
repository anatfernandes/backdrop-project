import styled from "styled-components";
import { Card } from "../shared";

const Wrapper = styled(Card)`
  & > p#content {
    font-size: 0.875rem;
    color: var(--black);
  }
`;

export { Wrapper };
