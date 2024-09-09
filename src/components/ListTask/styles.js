import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 12px;
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
        return theme.COLORS.GRAY_LIGHT;
    }
  }};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  height: 200px;

  section {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 60px;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }

  div:last-child {
    display: flex;
    gap: 10px;

    svg {
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
