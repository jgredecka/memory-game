import styled from 'styled-components';
import {theme} from '../../theme';

const Container = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 100px auto auto auto;
    align-items: center;
    flex-direction: column;
`;

const ThumbsUpImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const Header = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: ${theme.colors.purplePrimary};
`;

const Button = styled.div`
    border: 3px solid ${theme.colors.purplePrimary};
    cursor: pointer;
    margin-top: 30px;
    padding: 10px 10px;
    border-radius: 5px;
`;

export {Container, ThumbsUpImage, Header, Button};
