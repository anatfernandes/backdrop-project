import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--user-view-width);
  max-width: var(--max-user-view-width);
  margin-bottom: 50px;
  word-break: break-word;

  h1 {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 0.03rem;
    color: var(--primary);
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.1rem;
    line-height: 1.2rem;
    font-weight: 500;
    color: var(--primary);
  }

  p {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 1.7rem 0 2rem;
    color: var(--black);
  }

  #follow {
    font-size: 0.9rem;
    color: var(--dark-gray);

    b {
      margin: 0 0.5rem;
      font-size: 1rem;
    }
  }
`;

export { Wrapper };
