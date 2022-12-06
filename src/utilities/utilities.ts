import {CardProps} from '../categories/category';
import {categoryItemToSvgMap} from '../categories/svg';

export const mapCategoryItemsToCards = (categoryNames: Array<string>): Array<CardProps> => {
    const categoryCards: Array<Omit<CardProps, 'id' | 'svg'>> = [];
    for (const name of categoryNames) {
        categoryCards.push({name: name}, {name: name}); // Pair of identical card items
    }
    return categoryCards.map((item) => ({
        ...item,
        id: categoryCards.indexOf(item),
        svg: categoryItemToSvgMap[item.name],
    }));
};
// Fishes-Yates algorithm to randomise cards
export const shuffleCards = (cards: Array<CardProps>): Array<CardProps> => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const current = cards[i];
        cards[i] = cards[j];
        cards[j] = current;
    }
    return cards;
};
