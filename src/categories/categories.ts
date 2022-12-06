import {characterCards} from './characters';
import {foodCards} from './food';
import {animalCards} from './animals';
import {CardProps} from './category';

const categoryCards: {[key: string]: Array<CardProps>} = {
    animals: [...animalCards],
    characters: [...characterCards],
    food: [...foodCards],
};

export {categoryCards};
