import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CardsImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const Header = styled.div`
    font-size: 31px;
    font-weight: 450;
    padding-bottom: 15px;
    @media (max-width: 425px) {
        font-size: 25px;
    }
`;

const CategoriesContainer = styled.div`
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    flex-wrap: wrap;
    justify-content: center;
`;

export {Container, CardsImage, Header, CategoriesContainer};
