import styled from "styled-components";

const Wrapper = styled.section`
  max-width: var(--max-user-view-width);
  display: flex;
  align-items: center;
  flex-direction: column;

  & article:nth-child(1) {
    margin: 0;
  }
`;

export { Wrapper };
