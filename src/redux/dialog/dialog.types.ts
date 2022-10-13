import { IdType, MetaDataType } from '../../common/types';
import { UserIdType, UserType } from '../user/user.types';

export type MessageType = {
  id: number,
  text: string,
  userId: number,
};

export type DialogType = {
  id: number,
  organizerId: number,
  participantId: number,
  messages: Array<MessageType>,
  user: UserType,
};

export type DialogsType = Array<DialogType>

export type DialogStateType = {
  dialog: DialogType | null,
  dialogs: DialogsType,
  metaData: MetaDataType
};