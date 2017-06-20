import { ADD, SUBTRACT } from '../actions/types';

export default (state = 0, action) => {
  if (action.type === ADD) return state + 1;

  if (action.type === SUBTRACT) return state - 1;

  return state;
};
