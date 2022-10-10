import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  scroll-margin-top: 148px;
  > div:nth-child(odd) {
    background-color: #262626;
  }
`

export const Content = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4rem;
  padding-top: 10rem;
  padding-bottom: 16rem;
  padding-inline: 4rem;
  background-color: #343434;
  color: #fff;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
  h1 {
    font-size: 2.4rem;
  }
  span {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
`