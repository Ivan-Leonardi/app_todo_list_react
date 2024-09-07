import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;  
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin-bottom: 8px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_LIGHT};

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({theme}) => theme.GRAY_DARK};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
        }
    }

    > svg {
        margin-left: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    }
`;