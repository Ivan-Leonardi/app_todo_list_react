import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;  
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    margin-bottom: 12px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_LIGHT};

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({theme}) => theme.COLORS.BACKGROUND};
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