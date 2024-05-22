import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--black);

  a {
    margin-left: 10px;
    line-height: 1.2rem;
    color: var(--primary);
    word-break: break-all;
  }

  @media (max-width: 400px) {
    a {
      font-size: 0.75rem;
    }
  }
`;

export { Wrapper };
