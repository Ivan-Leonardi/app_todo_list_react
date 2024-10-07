import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
   
    padding: 0px 12px;
    gap: 20px;
    width: 100%;
`;

export const TaskItem = styled.div`
   border: 1px solid ${({ status, theme }) => {
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
    width: 400px;
    margin-bottom: 12px;

 

    section {
        display: flex;
        align-items: left;
        justify-content: space-between;
        gap: 50px;
    }

    h4 {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        font-size: 18px;
        font-weight: 500;
    }

    p {
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        margin-bottom: 10px;
        font-size: 16px;
    }

    span {
        color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
        font-size: 14px;
    }

    div:last-child {
       
        display: flex;
        gap: 10px;

        svg {
            margin-top: 60px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND};
            cursor: pointer;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
    @media (max-width: 420px) {
        width: 280px;
    }
`;

