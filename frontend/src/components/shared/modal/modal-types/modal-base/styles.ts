import styled from "styled-components";
import ReactModal from "react-modal";

const Wrapper = styled(ReactModal)`
  width: 90%;
  max-width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;

  section#content {
    p {
      line-height: 1rem;
      font-size: 1rem;
      margin: 7px 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  color: var(--primary);

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

const ButtonsSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 0;

  @media (max-width: 400px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 90px;

    button {
      margin: 0;
    }
  }
`;

export { Wrapper, Title, ButtonsSection };
