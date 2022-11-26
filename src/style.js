import styled from "styled-components";

export const Conteiner = styled.div`
  .div__position {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 22px;

    background-color: var(--background-div);

    width: 50%;
    height: 375px;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    border: 1px solid var(--border-grey-color);

    > div {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 1.5rem;
    }

    h2 {
      border-bottom: 1px solid var(--border-grey-color);
      width: 11rem;
      color: var(--p-color);
    }
  }
`;
