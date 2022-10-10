import styled from "styled-components";

export const LogoContainer = styled.div`
  user-select: none;
  display: flex;
  gap: 2rem;
  img {
    width: fit-content;
    height: 64px;
    width: 64px;
  }
  span {
    display: flex;
    margin-block: auto;
    font-size: 2.6rem;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 1);
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;
