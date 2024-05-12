import styled from "styled-components";

const Wrapper = styled.form`
  width: 100%;
  max-width: var(--max-view);
  height: 100%;
  padding: 0;
  margin: 0;

  section {
    width: 100%;
    height: auto;
    border: none;
    padding: 0;
    margin: 1rem 0 0;
  }

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`;

export { Wrapper };
