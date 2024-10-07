import styled from "styled-components";

export const CardNewTask = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  border: 3px dashed ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border: 2px dashed ${({ theme }) => theme.COLORS.BACKGROUND};
      }

  > strong {
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    margin-bottom: 8px;  
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
`;
