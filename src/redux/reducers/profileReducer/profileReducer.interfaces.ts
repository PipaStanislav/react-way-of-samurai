import ActionInterface from '../../../common/interface';
import { PostsType, ProfileType } from './profileReducer.types';
import { MetaDataType } from '../../../common/types';

export interface ProfileActionInterfaces extends ActionInterface {
  profile?: ProfileType,
  profilePosts?: PostsType,
  metaData?: MetaDataType,
}