import styled from 'styled-components';

export const Container = styled.div` 
background: ${({theme}) => theme.COLORS.GRAY_DARK};
`;

export const Header = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_LIGHT};  
  padding: 12px 48px; 
  display:flex;
  align-items: center;
  justify-content: space-around;
  > div {
    > h3 {
    font-size: 26px;
    color: ${({theme}) => theme.COLORS.BACKGROUND};
  }
  > p {
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
  }
  }
  > div {    
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    svg {
      color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
      cursor: pointer;
      
    }
  }   
`;

export const Titleh2 = styled.h2`
text-align: center;
padding: 26px 0px;
font-size: 22px;
font-weight: 400;
color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
 
  gap: 28px;
  margin-bottom: 36px;
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 48px;  
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 0 8px;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  > svg {
    position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${({theme}) => theme.COLORS.RED};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
