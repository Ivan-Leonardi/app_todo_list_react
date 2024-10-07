import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: ${({theme}) => theme.COLORS.GRAY_DARK};
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.RED};
  }
  > h4 {
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 18px;
  }

  > div {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    > label {
      > input {
        margin-right: 5px;
      }
    }
  }

  > button {
    margin-top: 12px;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border: 0;
    border-radius: 8px;
    padding: 4px 22px;
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
