import { StateType } from '../../common/types';
import { AppStateType, InitializedType } from './app.types';

export const getInitialized = (state: StateType): InitializedType => state.app.initialized;

export const getAppStateToProps = (state: StateType): AppStateType => ({
  initialized: getInitialized(state),
});

const getStateToProps = (state: StateType): { app: AppStateType } => ({
  app: getAppStateToProps(state),
});

export default getStateToProps;