import GameView from '../GameView/GameView';
import CategoryView from '../CategoryView/CategoryView';
import {useEffect, useState} from 'react';
import {categoryCards} from '../../categories/categories';
import {shuffleCards} from '../../utilities/utilities';
import {CardProps} from '../../categories/category';
import {GameFinishedView} from '../GameFinishedView/GameFinishedView';

const NO_OF_CARDS = 20;

const getCardName = (cardId: string) => {
    return cardId.split(':')[0];
};

const cardsMatch = (selectedCardPair: Array<string>) => {
    return getCardName(selectedCardPair[0]) === getCardName(selectedCardPair[1]);
};

export default function App() {
    const [cards, setCards] = useState<Array<CardProps>>([]);
    const [selectedCards, setSelectedCards] = useState<Array<string>>([]);
    const [matchedCards, setMatchedCards] = useState<Array<string>>([]);
    const [gameFinished, setGameFinished] = useState<boolean | null>(null);

    const noOfMatches = matchedCards.length;

    const handleTryAnotherGameClick = () => {
        setCards([]);
        setSelectedCards([]);
        setMatchedCards([]);
    };

    const handleCategoryClick = (category: string) => {
        const shuffledCards = shuffleCards(categoryCards[category]);
        setGameFinished(false);
        setCards(shuffledCards);
    };

    const handleCardClick = (cardId: string) => {
        if (selectedCards.length < 2) {
            setSelectedCards((current) => [...current, cardId]);
        }
    };

    // Display the Game Finished screen when all matches have been found
    useEffect(() => {
        if (matchedCards.length === NO_OF_CARDS / 2) {
            setTimeout(() => {
                setGameFinished(true);
            }, 1500);
        }
    }, [matchedCards]);

    // Reset currently selected cards after a new match has been found
    useEffect(() => {
        setSelectedCards([]);
    }, [matchedCards]);

    useEffect(() => {
        if (selectedCards.length === 2) {
            if (cardsMatch(selectedCards)) {
                const matchedCardName = getCardName(selectedCards[0]);
                setMatchedCards((current) => [...current, matchedCardName]);
            } else {
                setTimeout(() => setSelectedCards([]), 800);
            }
        }
    }, [selectedCards]);

    const renderComponent = () => {
        if (!cards.length) {
            return <CategoryView onClick={handleCategoryClick} />;
        }
        if (cards.length && gameFinished) {
            return <GameFinishedView onClick={handleTryAnotherGameClick} />;
        }
        if (cards.length && !gameFinished) {
            return (
                <GameView
                    cards={cards}
                    selectedCards={selectedCards}
                    matchedCards={matchedCards}
                    noOfMatches={noOfMatches}
                    onClick={handleCardClick}
                />
            );
        }
    };

    return <>{renderComponent()}</>;
}
