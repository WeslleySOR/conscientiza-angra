import styled from "styled-components";

interface IHeaderContainer {
  pageScrolled: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainer>`
  z-index: 99999;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  width: 100%;
  background-color: #7aaf60;
  color: #fff;
  transition: opacity 0.3s;
  opacity: ${props => props.pageScrolled ? 0.95 : 1};
`

export const HeaderNavigation = styled.nav`
  display: flex;
  margin-inline: 4rem;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem;
    text-underline-offset: 8px;
    &:hover {
      text-decoration: underline;
    }
  }
`