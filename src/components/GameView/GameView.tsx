import Card from '../Card/Card';
import {CardsContainer, CounterDisplay, Count} from './styled';
import {CardProps} from '../../categories/category';

interface CardsContainerProps {
    cards: Array<CardProps>;
    onClick: (cardId: string) => void;
    selectedCards: Array<string>;
    matchedCards: Array<string>;
    noOfMatches: number;
}

export default function GameView(props: CardsContainerProps) {
    const {onClick, matchedCards, selectedCards} = props;

    return (
        <>
            <CardsContainer>
                {props.cards.map((card) => {
                    const uniqueId = `${card.name}:${card.id}`;
                    return (
                        <Card
                            key={card.id}
                            uniqueId={uniqueId}
                            svg={card.svg}
                            visible={
                                matchedCards.includes(card.name) || selectedCards.includes(uniqueId)
                            }
                            onClick={onClick}
                        />
                    );
                })}
            </CardsContainer>
            <CounterDisplay>
                <Count>{props.noOfMatches}</Count>
                &nbsp;{props.noOfMatches === 1 ? 'match' : 'matches'} found
            </CounterDisplay>
        </>
    );
}
