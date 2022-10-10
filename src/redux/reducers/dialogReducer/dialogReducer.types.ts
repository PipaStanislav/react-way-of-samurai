import { MetaDataType } from '../../../common/types';

export type MessageType = {
  id: number,
  text: string,
  userId: number,
};

export type DialogType = {
  id: number,
  organizerId: number,
  participantId: number,
  messages: Array<MessageType>
};

export type DialogsType = Array<DialogType>

export type DialogStateType = {
  dialogs: DialogsType,
  dialog: DialogType | null,
  metaData: MetaDataType
};