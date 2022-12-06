import styled from 'styled-components';
import {theme} from '../../theme';

const StyledCategory = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 200px;
    height: 200px;
    align-items: center;
    margin: 5px;
    border: 1px solid ${theme.colors.greyPrimary};
    border-radius: ${theme.borderRadius};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
`;

const CategoryImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const Title = styled.p`
    font-size: 19px;
    font-weight: 400;
`;

export {StyledCategory, CategoryImage, Title};
