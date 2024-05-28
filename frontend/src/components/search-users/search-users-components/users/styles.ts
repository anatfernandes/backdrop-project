import styled from "styled-components";

const Wrapper = styled.div`
  #no-data {
    font-size: 0.9rem;
    text-align: center;
    display: inline-block;
  }

  ul {
    padding-bottom: 5px;
  }

  ul > li {
    padding: 0;

    a {
      width: 100%;
      height: fit-content;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      border: none;
      color: var(--black);

      div#user {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        line-height: 1.2rem;

        span {
          font-weight: 400;
          font-size: 0.8rem;
        }

        span#name {
          font-weight: 500;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export { Wrapper };
