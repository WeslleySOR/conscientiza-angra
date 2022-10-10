import styled from "styled-components";

export const Container = styled.div`
  scroll-margin-top: 148px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #343434;
  color: #fff;
`;
export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  h1 {
    font-size: 2.4rem;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  span {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
`;

export const ContainerCards = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
