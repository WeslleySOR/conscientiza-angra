import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #262626;
  color: #fff;
  padding: 2rem 4rem;
  margin: 2rem;
`;

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  > h2 {
    font-size: 2rem;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentSeparator = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
  ol {
    padding-inline: 2rem;
    list-style: disc;
    li {
      font-size: 1.6rem;
      line-height: 2.8rem;
    }
    &.decimal {
      list-style: decimal;
    }
  }
`;
