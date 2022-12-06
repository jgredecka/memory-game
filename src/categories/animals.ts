import {CardProps} from './category';
import {mapCategoryItemsToCards} from '../utilities/utilities';

const categoryNames: Array<string> = [
    'parrot',
    'pig',
    'cat',
    'corgi',
    'octopus',
    'alligator',
    'leopard',
    'frog',
    'hedgehog',
    'elephant',
];

const animalCards: Array<CardProps> = mapCategoryItemsToCards(categoryNames);

export {animalCards};
