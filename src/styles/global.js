import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};     
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{        
        font-family: Poppins, sans-serif;
        font-size: 16px;
        outline: none;        
    }

    a{
        text-decoration: none;
    }

    button, a{
        font-weight: bold;
        cursor: pointer;
        transition: filter 0.3s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);        
    }
`;