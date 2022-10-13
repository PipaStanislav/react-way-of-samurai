import { PostType } from '../../redux/profile/profile.types';
import { MetaDataType } from '../../common/types';

export type GetPostType = Promise<PostType>;
export type GetPostsType = Promise<{ data: Array<PostType>, metaData: MetaDataType }>;
export type CreatePostType = Promise<PostType>;
export type UpdatePostType = Promise<PostType>;
export type DeletePostType = Promise<boolean>;