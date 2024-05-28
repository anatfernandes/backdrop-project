import styled from "styled-components";
import { Card } from "../../../shared";

const Wrapper = styled.section`
  max-width: var(--max-user-view-width);
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: initial;
    text-decoration: none;
  }
`;

const UserCard = styled(Card)`
  display: flex;
  margin-bottom: 1rem;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  #user {
    margin-left: 1rem;

    h2 {
      width: fit-content;
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--black);
      word-break: break-all;
    }

    p {
      margin-top: 0.4rem;
      font-size: 0.87rem;
      color: var(--black);
      word-break: break-all;
    }
  }
`;

export { Wrapper, UserCard };
