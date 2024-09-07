import styled from "styled-components";
import backgroundIMG from "../../assets/77993000_0d57_ghhp_230929.jpg";

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
    margin-bottom: 36px;
  }
`;

export const BackgroundIMG = styled.div`
  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size: cover;
`;
