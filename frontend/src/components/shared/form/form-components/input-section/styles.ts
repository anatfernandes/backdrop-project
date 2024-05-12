import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;

  input,
  select,
  textarea {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    margin: 7px 0 0;
    border-radius: 5px;
    border: 1.6px solid var(--light-gray);
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    color: var(--light-gray);
    padding: 0 10px;
    transition: color 0s linear;
    transition: border 0.1s linear;
  }

  textarea {
    height: auto;
    min-height: 90px;
    padding: 10px;
    resize: none;
    font-family: "Roboto", sans-serif;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--light-gray);
  }

  input:focus-within::placeholder,
  textarea:focus-within::placeholder {
    color: var(--dark-gray);
  }

  input:focus-within,
  select:focus-within,
  textarea:focus-within {
    color: var(--black);
    border-color: var(--primary);
  }

  label {
    font-size: 0.875rem;
    color: var(--primary);
  }

  &:has(input[required]) label:after,
  &:has(select[required]) label:after,
  &:has(textarea[required]) label:after {
    content: "";
    margin: 0.15em;
    padding: 0.15em;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="crimson" d="M110 16 76 57v1l51-10v32l-51-9-1 1 35 39-28 17-18-50-1 1-18 49-28-17 34-40-50 9V48l50 10v-1L17 17 46 1l17 48h1L82 1l28 15z"/></svg>')
      no-repeat 0 25%;
  }

  span#remaining-characteres {
    font-size: 0.75rem;
    color: var(--dark-gray);
    position: absolute;
    bottom: 5px;
    right: 10px;
  }

  @media (max-width: 400px) {
    textarea {
      min-height: 130px;
    }
  }
`;

export { Wrapper };
