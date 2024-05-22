import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;

  #details {
    display: flex;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
  }
`;

const User = styled.div`
  margin-left: 1rem;

  h2 {
    width: fit-content;
    font-size: 1rem;
    font-weight: 700;
    word-break: break-all;
  }

  span {
    font-size: 0.75rem;
    color: var(--dark-gray);

    b {
      margin: 0 0.3rem;
      font-size: 1rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    font-size: 0.75rem;
    padding-right: 7px;
    line-height: 1rem;
    display: inline;
    color: var(--primary);
  }

  ul li:before {
    content: "·";
    font-size: 1.5rem;
    margin-right: 3px;
    vertical-align: middle;
  }

  div#post-details {
    width: fit-content;

    span {
      word-break: break-all;
    }
  }
`;

const Options = styled.div`
  align-self: flex-start;
  cursor: pointer;

  ul {
    padding: 2.5px 0;
  }

  ul li {
    width: 100%;
    line-height: 2rem;
    padding: 0 10px;
    background-color: var(--white);
    border: 1px solid transparent;
    border-left: none;
    border-right: none;
    color: var(--black);
    outline: none;
  }

  ul li:hover,
  ul li:focus-within {
    filter: brightness(0.9);
  }

  ul li:focus-within {
    border-color: var(--dark-gray);
  }
`;

export { Wrapper, Options, User };
