import styled from "styled-components";

const Wrapper = styled.main`
  img#logo {
    height: 180px;
    width: auto;
    display: initial;
  }

  section#content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 2rem;
      color: var(--primary);
      font-weight: 700;
      margin: 3rem 0 4rem;
    }

    span {
      line-height: 4rem;
      font-size: 1rem;
      color: var(--black);

      a {
        color: var(--primary);
        text-align: center;
      }
    }
  }

  @media (max-width: 500px) {
    img#logo {
      height: 100px;
    }

    section#content {
      > h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export { Wrapper };
