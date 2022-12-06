import styled from 'styled-components';

const CardsContainer = styled.div`
    margin: 10px auto 0 auto;
    max-width: 670px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const CounterDisplay = styled.div`
    color: black;
    margin: 5px auto;
    max-width: 670px;
    display: flex;
    font-weight: 500;
    font-size: 18px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Count = styled.div`
    color: #19b519;
    font-weight: 800;
    font-size: 25px;
`;

export {CardsContainer, CounterDisplay, Count};
