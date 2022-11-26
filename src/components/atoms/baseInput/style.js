import styled from "styled-components";

export const Conteiner = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid var(--border-grey-color);
  border-radius: 0.5rem;

  padding-left: 10px;

  margin-top: 0.5em;

  z-index: 2;

  &:focus {
    border: 2px solid var(--focus-input-color);
  }
`;
