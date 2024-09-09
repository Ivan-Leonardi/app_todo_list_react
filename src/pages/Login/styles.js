import styled from "styled-components";
import backgroundIMG2 from "../../assets/bg-login.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 820px) {
    padding: 16px;
  }

  > h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    margin-bottom: 12px;

    > span {
      color: ${({ theme }) => theme.COLORS.GREEN};
      font-weight: 800;
    }
  }

  > p {
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    margin: 8px 0px 36px;

    > a {
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      font-weight: 500;
      margin-left: 3px;
    }
  }
`;

export const BackgroundIMG2 = styled.div`
  flex: 1;
  background: url(${backgroundIMG2}) no-repeat center center;
  background-size: cover;
`;
