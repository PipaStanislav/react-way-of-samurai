import initialState from './header-initial-state';
import { HeaderActionInterface } from './header.interfaces';
import { HeaderStateType } from './header.types';

const headerReducer = (state: HeaderStateType = initialState, action: HeaderActionInterface) => {
  return state;
}

export default headerReducer;