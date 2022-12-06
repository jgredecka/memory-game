import {CardProps} from './category';
import {mapCategoryItemsToCards} from '../utilities/utilities';

const categoryNames: Array<string> = [
    'baby-yoda',
    'rick-sanchez',
    'harry-potter',
    'dobby',
    'super-mario',
    'gizmo',
    'iron-man',
    'peter-pan',
    'batman',
    'walter-white',
];

const characterCards: Array<CardProps> = mapCategoryItemsToCards(categoryNames);

export {characterCards};
