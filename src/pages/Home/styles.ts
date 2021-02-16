import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  align-items: center;

  img {
    width: 190px;
    height: 190px;
  }
`;

export const Form = styled.form`
  input {
    flex: 1;
    height: 36px;
    padding: 0 12px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 96px;
    height: 36px;
    background: #3e9b9e;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    cursor: pointer;

    &:hover {
      background: ${shade(0.2, '#3e9b9e')};
    }
  }
`;

export const SpaceshipsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px 0;
`;

export const SpaceshipCard = styled.div`
  display: flex;
  width: 282px;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px 0;
  margin: 12px;

  border-radius: 5px;

  background: #fff;
`;
