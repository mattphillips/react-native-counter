import { ADD, SUBTRACT } from './types';

const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });

export {
  add,
  subtract
};
