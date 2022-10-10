import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 148px;
  padding-bottom: 9rem;
  gap: 8rem;
  margin-inline: 12rem;
  @media (max-width: 768px) {
    margin-inline: 0;
  }
`