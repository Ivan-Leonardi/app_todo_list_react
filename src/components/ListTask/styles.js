import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 12px;
  gap: 20px;
  width: 100%;  
`;

export const TaskItem = styled.div`
  background-color: ${({ status, theme }) => {
    switch (status) {
      case "completed":
        return theme.COLORS.GREEN;
      case "in_progress":
        return theme.COLORS.BLUE;
      case "pending":
      default:
        return theme.COLORS.YELLOW;
    }
  }};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  width: 300px;
  

  section {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 50px;    
  }

  h4 {
    margin-bottom: 10px;
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-size: 22px;
    font-weight: 500;
  }

  p {   
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    margin-bottom: 10px;
    font-size: 18px;
  }

  span {    
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-size: 14px;
  }

  div:last-child {
    display: flex;
    gap: 10px;

    svg {
      color: ${({theme}) => theme.COLORS.BACKGROUND};
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
