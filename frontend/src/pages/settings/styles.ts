import styled from "styled-components";

const Wrapper = styled.main`
  padding-top: 150px;

  @media (min-width: 600px) {
    width: 100%;
    max-width: 100%;
    padding: 95px 2rem 95px 35%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { Wrapper };
