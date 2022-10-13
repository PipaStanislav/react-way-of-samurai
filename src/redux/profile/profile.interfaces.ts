import { ActionInterface } from '../../common/interface';
import { PostsType, ProfileType } from './profile.types';
import { MetaDataType } from '../../common/types';

export interface ProfileActionInterfaces extends ActionInterface {
  profile?: ProfileType,
  profilePosts?: PostsType,
  metaData?: MetaDataType,
}