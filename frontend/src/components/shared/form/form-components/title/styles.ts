import styled from "styled-components";

const Wrapper = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  text-align: start;
  color: var(--primary);

  @media (max-width: 400px) {
    font-size: 1.08rem;
  }
`;

export { Wrapper };
