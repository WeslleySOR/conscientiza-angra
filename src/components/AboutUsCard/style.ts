import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 396px;
  background-color: #4b7139;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  h1 {
    text-align: center;
    font-size: 2.4rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    a {
      text-decoration: underline;
      font-size: 1.6rem;
      color: #fff;
    }
  }
`;
