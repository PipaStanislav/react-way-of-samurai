import { ActionInterface } from '../../common/interface';
import { MetaDataType } from '../../common/types';
import { DialogType } from './dialog.types';

export interface DialogActionInterface extends ActionInterface {
  dialog?: DialogType,
  dialogs?: Array<DialogType>,
  metaData?: MetaDataType,
}