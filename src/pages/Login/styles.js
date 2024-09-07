import styled from "styled-components";
import backgroundIMG2  from "../../assets/2151252471.jpg";

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

  > h1 {
    font-size: 36px;
    color: ${({theme}) => theme.COLORS.GRAY_DARK};
    margin-bottom: 12px;

    > span {
        color: ${({theme}) => theme.COLORS.GREEN };
        font-weight: 800;
    }
  }

  > p {
    font-size: 18px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_DARK};
    margin: 8px 0px 36px;

    > a {
    color: ${({theme}) => theme.COLORS.GRAY_DARK};
    font-weight: 500;
  }
  }

  
`;

export const BackgroundIMG2 = styled.div`
  flex: 1;
  background: url(${backgroundIMG2}) no-repeat center center;
  background-size: cover;
`;
