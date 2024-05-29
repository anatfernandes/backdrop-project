import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  max-height: 300px;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  #no-data {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: var(--dark-gray);
  }

  div#comments-section {
    width: 100%;
    height: auto;
    margin-top: 1.5rem;
    padding: 0 0.5rem 1rem 0;
    overflow: scroll;
  }

  @media (max-width: 500px) {
    max-height: 200px;
  }
`;

export { Wrapper };
