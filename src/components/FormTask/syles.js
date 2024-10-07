import styled from "styled-components";

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    margin: 16px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};

    gap: 20px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        text-align: center;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
`;

export const Input = styled.input`
    background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    padding: 15px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.COLORS.GREEN};
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px 30px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;
