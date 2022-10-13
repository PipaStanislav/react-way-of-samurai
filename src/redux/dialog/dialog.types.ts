import { MetaDataType } from '../../common/types';

export type MessageType = {
  id: number,
  text: string,
  userId: number,
};

export type DialogType = null | {
  id: number,
  organizerId: number,
  participantId: number,
  messages: Array<MessageType>
};

export type DialogsType = Array<DialogType>

export type DialogStateType = {
  dialog: DialogType,
  dialogs: DialogsType,
  metaData: MetaDataType
};