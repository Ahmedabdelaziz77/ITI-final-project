import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #d1d5db;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  color: black;
  font-size: 1rem;
  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export default Input;
