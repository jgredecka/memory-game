import {CardProps} from './category';
import {mapCategoryItemsToCards} from '../utilities/utilities';

const categoryNames: Array<string> = [
    'raspberry',
    'cheesecake',
    'pizza',
    'eggs',
    'bento',
    'hamburger',
    'fries',
    'apple',
    'pineapple',
    'avocado',
];

const foodCards: Array<CardProps> = mapCategoryItemsToCards(categoryNames);

export {foodCards};
