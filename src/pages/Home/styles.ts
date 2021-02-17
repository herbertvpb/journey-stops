import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  img {
    width: 190px;
    height: 190px;
  }
`;

export const Form = styled.form`
  z-index: 1;

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

    &:disabled {
      background: #a8a8b3;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 75%;
  background: #151515;
  margin-top: -18px;
  padding: 40px;
`;

export const SpaceshipsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 60%;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SpaceshipCard = styled.div`
  display: flex;
  width: 40%;
  min-width: 200px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 16px;
  margin: 12px;

  border-radius: 5px;

  background: #fff;
`;

export const Info = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  align-self: center;
  justify-self: center;
  border-radius: 5px;

  text-align: center;

  span {
    color: #ffffff;
    font: 24px bold;
  }
`;

export const SeeMore = styled.div`
  button {
    width: 96px;
    height: 36px;
    background: none;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: color 0.2s;

    cursor: pointer;

    &:hover {
      color: #ba3f3f;
    }

    &:disabled {
      color: #a8a8b3;
    }
  }
`;
