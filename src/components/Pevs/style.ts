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
  > h1 {
    font-size: 2.4rem;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  span {
    font-size: 1.6rem;
    line-height: 2.8rem;
    a {
      color: #fff;
    }
    &.localizations {
      padding-top: 4rem;
      border-top: 1px solid #fafafa;
    }
  }
  ol {
    padding-inline: 2rem;
    list-style: disc;
    li {
      font-size: 1.6rem;
      line-height: 2.8rem;
    }
  }
`;

export const ContentTable = styled.table`
  border-collapse: collapse;
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #262626;
  }
  tr:hover {
    background-color: #121212;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #53803e;
    font-size: 1.4rem;
    color: #fff;
  }
  td {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
