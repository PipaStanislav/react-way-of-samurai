import initialState from './headerInitialState';
import { HeaderActionInterface } from './headerReducer.interfaces';
import { HeaderStateType } from './headerReducer.types';

const headerReducer = (state: HeaderStateType = initialState, action: HeaderActionInterface) => {
  return state;
}

export default headerReducer;