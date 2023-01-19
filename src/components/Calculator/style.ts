import styled from "styled-components";

export const ContainerCalculator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 400px;

  .containerCalculator__title {
    text-align: left;
    color: var(--gray__title);
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;

  .containerInput__label {
    font-size: 12px;
    font-weight: 400;
    color: var(--gray__label);
  }

  .containerInput__input {
    ::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    font-size: 14px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid gray;
    outline-color: blue;
    color: var(--gray__label);
    padding-left: 15px;
  }
`;
