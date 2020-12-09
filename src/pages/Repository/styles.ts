import styled from 'styled-components';
import { shade } from 'polished';

export const UpBar = styled.div`
  display: flex;
  max-width: 960px;

  div {
    margin-left: auto;

    a {
      text-decoration: none;
      align-items: center;

      svg {
        color: #a8a8b3;
        margin-top: 4px;
      }

      span {
        margin-left: 8px;
        font-size: 16px;
        color: #a8a8b3;
        line-height: 20px;
        font-weight: 700;
        transition: background-color 0.5s;

        &:hover {
          color: ${shade(0.2, '#666')};
        }
      }
    }
  }
`;

export const ProfileRepo = styled.div`
  display: flex;

  align-items: center;
  margin-top: 82px;

  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }

  div {
    margin-left: 25px;
    flex: 1;

    strong {
      font-size: 36px;
      color: #3d3d4d;
      font-weight: 700;
      line-height: 40px;
    }

    p {
      font-size: 20px;
      color: #737380;
      margin-top: 10px;
      line-height: 20px;
    }
  }
`;

export const StatusRepo = styled.div`
  display: flex;
  margin-top: 50px;

  div {
    margin-right: 80px;
    strong {
      font-size: 36px;
      color: #3d3d4d;
      line-height: 40px;
    }
    p {
      font-size: 20px;
      color: #6c6c80;
      margin-top: 5px;
      line-height: 20px;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-width: 960px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 24px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
