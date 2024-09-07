import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BLUE};
    color: ${({theme}) => theme.COLORS.BACKGROUND};

    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
`;