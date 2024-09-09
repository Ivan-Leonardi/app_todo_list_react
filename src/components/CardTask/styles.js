import styled from 'styled-components';

export const Card = styled.div`
  background-color: transparent;
  border: 3px solid; 
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s ease;

  strong {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    color: ${({theme}) => theme.COLORS.BACKGROUND};
  }

  p {
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
  }
`;
