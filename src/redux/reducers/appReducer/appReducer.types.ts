import ActionInterface from '../../../common/interface';

export interface ActionType extends ActionInterface {
  type: string
}

export type AppStateType = {
  initialized: boolean
};