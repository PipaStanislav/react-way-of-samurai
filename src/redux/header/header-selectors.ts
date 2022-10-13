import { StateType } from '../../common/types';
import { HeaderStateType, LogoType } from './header.types';

export const getLogo = (state: StateType): LogoType => state.header.logo;

export const getHeaderStateToProps = (state: StateType): HeaderStateType => ({
  logo: getLogo(state),
});

const getStateToProps = (state: StateType): { header: HeaderStateType } => ({
  header: getHeaderStateToProps(state),
});

export default getStateToProps;