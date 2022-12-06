import styled from 'styled-components';
import {theme} from '../../theme';

interface StyledCardProps {
    visible: boolean;
}

const LogoLetter = styled.div`
    font-weight: 700;
    font-size: 30px;
    color: ${theme.colors.coralPrimary};
    @media (max-width: 483px) {
        font-size: 20px;
    }
`;

const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${(props) =>
        props.visible ? theme.colors.purplePrimary : theme.colors.purpleSecondary};
    width: 110px;
    height: 140px;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: ${(props) => (props.visible ? 'default' : 'pointer')};
    border: 0.5px solid #6041ac;
    @media (max-width: 483px) {
        width: 80px;
        height: 110px;
    }
`;

export {LogoLetter, StyledCard};
