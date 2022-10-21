import { UserIdType } from '../redux/user/user.types';
import { IdType } from '../common/types';

export type QueryType = Partial<{
  id: IdType,
  userId: UserIdType,
}>