import styled from "styled-components";
import { Card } from "../../../../shared";

const Wrapper = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 1.5rem;
`;

const Content = styled(Card)`
  width: 100%;
  height: auto;
  margin-left: 12px;
  padding: 14px;

  span {
    word-break: break-all;
  }

  #details {
    display: flex;
    flex-direction: column;

    a {
      color: inherit;
      text-decoration: none;
      display: inline-block;
    }

    h2 {
      width: fit-content;
      font-size: 0.875rem;
      font-weight: 700;
      word-break: break-all;
    }

    span {
      font-size: 0.75rem;
      color: var(--dark-gray);
    }

    #user {
      height: 1rem;
    }

    #date span {
      font-size: 0.688rem;
    }

    #owner {
      font-size: 0.75rem;

      b {
        margin: 0 0.3rem;
        font-size: 1rem;
      }
    }
  }

  #message {
    margin-top: 0.5rem;

    span {
      font-size: 0.9rem;
      color: var(--black);
    }
  }
`;

export { Wrapper, Content };
