import { DialogsType, DialogType } from '../../redux/dialog/dialog.types';
import { MetaDataType } from '../../common/types';

export type GetDialogType = Promise<DialogType>;
export type GetDialogsType = Promise<{ data: DialogsType, metaData: MetaDataType }>;
export type CreateDialogType = Promise<DialogType>;
export type DeleteDialogType = Promise<boolean>;
export type AddMessageType = Promise<DialogType>;