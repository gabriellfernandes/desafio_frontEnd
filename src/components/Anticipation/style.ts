import styled from "styled-components";

export const ContainerAnticipation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  gap: 20px;

  .containerAnticipation__title {
    font-family: "Source Sans Pro";
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #5d9cec;
    color: #3d75bb;
    text-align: left;
    width: 100%;
  }

  .containerAnticipation__paragraph {
    font-size: 16px;
    color: #5d9cec;
    text-align: left;
    width: 100%;
  }

  .containerAnticipation__value{
    color: #3d75bb;
  }
`;
