import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;

  input {
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1.6px solid var(--light-gray);
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    color: var(--light-gray);
    padding: 1.7rem 10px 0.8rem;
    transition: color 0s linear;
    transition: border 0.1s linear;
  }

  input::placeholder {
    color: transparent;
  }

  input:focus::placeholder {
    color: var(--dark-gray);
  }

  input:focus-within {
    color: var(--black);
    border-color: var(--primary);
  }

  label {
    font-size: 1rem;
    color: var(--primary);
    position: absolute;
    transform: translate(10px, 13px) scale(1);
    transform-origin: top left;
  }

  &:not(:focus-within):has(input:placeholder-shown) input {
    color: transparent;
  }

  &:focus-within label,
  &:has(input:not(:placeholder-shown)) label {
    transform: translate(10px, 4px) scale(0.75);
  }

  &:has(input[required]) label:after {
    content: "";
    margin: 0.15em;
    padding: 0.15em;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="crimson" d="M110 16 76 57v1l51-10v32l-51-9-1 1 35 39-28 17-18-50-1 1-18 49-28-17 34-40-50 9V48l50 10v-1L17 17 46 1l17 48h1L82 1l28 15z"/></svg>')
      no-repeat 0 25%;
  }

  &:has(#password-visibility) input {
    padding: 1.7rem 40px 0.8rem 0.8rem;
  }

  #password-visibility {
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
`;

export { Wrapper };
